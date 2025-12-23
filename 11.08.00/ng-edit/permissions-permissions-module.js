(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permissions-permissions-module"],{

/***/ "1MJk":
/*!*******************************!*\
  !*** ../edit/shared/index.ts ***!
  \*******************************/
/*! exports provided: webApiAppFilesAll, webApiAppFile, webApiAppFileCreate, AssetsService, DnnBridgeService, DropzoneDraggingHelper, webApiEditRoot, EavService, EditRoutingService, webApiEntityRoot, webApiEntityList, EntityService, FileTypeService, GlobalConfigService, LoadIconsService, QueryService, FileTypeConstants, ScriptsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "lyDw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFilesAll", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiAppFilesAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFile", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiAppFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFileCreate", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiAppFileCreate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["AssetsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DnnBridgeService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["DnnBridgeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropzoneDraggingHelper", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["DropzoneDraggingHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEditRoot", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiEditRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EavService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["EavService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditRoutingService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["EditRoutingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityRoot", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiEntityRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityList", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["webApiEntityList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["EntityService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["FileTypeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["GlobalConfigService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadIconsService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["LoadIconsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["QueryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeConstants", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["FileTypeConstants"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptsLoaderService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["ScriptsLoaderService"]; });




/***/ }),

/***/ "3OPX":
/*!*************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/permissions/permissions.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-component-wrapper\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>Permissions</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <div class=\"grid-wrapper\">\r\n    <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"permissions$ | async\" [modules]=\"modules\"\r\n      [gridOptions]=\"gridOptions\">\r\n    </ag-grid-angular>\r\n\r\n    <button mat-fab mat-elevation-z24 class=\"grid-fab\" matTooltip=\"Create a new permission\"\r\n      (click)=\"editPermission(null)\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "6Ilh":
/*!***********************************************************!*\
  !*** ./src/app/permissions/permissions-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PermissionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsRoutingModule", function() { return PermissionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "it7M");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "nXrb");
/* harmony import */ var _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions-dialog.config */ "UXYu");






var routes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_5__["permissionsDialog"] },
        children: [
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "B+J5")).then(function (m) { return m.EditModule; }); }
            },
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["refreshEdit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-refresh-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-refresh-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/refresh-edit.module */ "orgq")).then(function (m) { return m.RefreshEditModule; }); }
            },
        ]
    },
];
var PermissionsRoutingModule = /** @class */ (function () {
    function PermissionsRoutingModule() {
    }
    PermissionsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PermissionsRoutingModule);
    return PermissionsRoutingModule;
}());



/***/ }),

/***/ "CW1q":
/*!*******************************************************************************************************!*\
  !*** ./src/app/permissions/ag-grid-components/permissions-actions/permissions-actions.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvcGVybWlzc2lvbnMvYWctZ3JpZC1jb21wb25lbnRzL3Blcm1pc3Npb25zLWFjdGlvbnMvcGVybWlzc2lvbnMtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "HEI7":
/*!*****************************************************************************************************!*\
  !*** ./src/app/permissions/ag-grid-components/permissions-actions/permissions-actions.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PermissionsActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsActionsComponent", function() { return PermissionsActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_permissions_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./permissions-actions.component.html */ "PUKq");
/* harmony import */ var _permissions_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions-actions.component.scss */ "CW1q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var PermissionsActionsComponent = /** @class */ (function () {
    function PermissionsActionsComponent() {
    }
    PermissionsActionsComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    PermissionsActionsComponent.prototype.refresh = function (params) {
        return true;
    };
    PermissionsActionsComponent.prototype.deletePermission = function () {
        var permission = this.params.data;
        this.params.onDelete(permission);
    };
    PermissionsActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-permissions-actions',
            template: _raw_loader_permissions_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_permissions_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], PermissionsActionsComponent);
    return PermissionsActionsComponent;
}());



/***/ }),

/***/ "PUKq":
/*!************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/permissions/ag-grid-components/permissions-actions/permissions-actions.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Delete\" (click)=\"deletePermission()\">\r\n    <mat-icon>delete</mat-icon>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "RI13":
/*!******************************************************!*\
  !*** ../edit/shared/services/edit-routing.models.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "SNUn":
/*!*************************************************************!*\
  !*** ./src/app/permissions/services/permissions.service.ts ***!
  \*************************************************************/
/*! exports provided: PermissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsService", function() { return PermissionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content-items/services/entities.service */ "GTfO");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _metadata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata.service */ "ykZ8");





var PermissionsService = /** @class */ (function () {
    function PermissionsService(metadataService, entitiesService) {
        this.metadataService = metadataService;
        this.entitiesService = entitiesService;
    }
    PermissionsService.prototype.getAll = function (targetType, keyType, key) {
        return this.metadataService.getMetadata(targetType, keyType, key, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__["eavConstants"].contentTypes.permissions);
    };
    PermissionsService.prototype.delete = function (id) {
        return this.entitiesService.delete(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__["eavConstants"].contentTypes.permissions, id, false);
    };
    PermissionsService.ctorParameters = function () { return [
        { type: _metadata_service__WEBPACK_IMPORTED_MODULE_4__["MetadataService"] },
        { type: _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_2__["EntitiesService"] }
    ]; };
    PermissionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_metadata_service__WEBPACK_IMPORTED_MODULE_4__["MetadataService"], _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_2__["EntitiesService"]])
    ], PermissionsService);
    return PermissionsService;
}());



/***/ }),

/***/ "SST1":
/*!******************************************************!*\
  !*** ./src/app/permissions/permissions.component.ts ***!
  \******************************************************/
/*! exports provided: PermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsComponent", function() { return PermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_permissions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./permissions.component.html */ "3OPX");
/* harmony import */ var _permissions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions.component.scss */ "Xbyz");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "KLQV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/id-field/id-field.component */ "JzAw");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ "QjRa");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ "uuTa");
/* harmony import */ var _ag_grid_components_permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ag-grid-components/permissions-actions/permissions-actions.component */ "HEI7");
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/permissions.service */ "SNUn");
















var PermissionsComponent = /** @class */ (function () {
    function PermissionsComponent(dialogRef, router, route, permissionsService, snackBar) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.route = route;
        this.permissionsService = permissionsService;
        this.snackBar = snackBar;
        this.permissions$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_11__["defaultGridOptions"]), { frameworkComponents: {
                idFieldComponent: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_10__["IdFieldComponent"],
                permissionsActionsComponent: _ag_grid_components_permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_14__["PermissionsActionsComponent"],
            }, columnDefs: [
                {
                    headerName: 'ID', field: 'Id', width: 70, headerClass: 'dense', cellClass: 'id-action no-padding no-outline',
                    cellRenderer: 'idFieldComponent', sortable: true, filter: 'agTextColumnFilter',
                    cellRendererParams: {
                        tooltipGetter: function (paramsData) { return "ID: " + paramsData.Id + "\nGUID: " + paramsData.Guid; },
                    },
                },
                {
                    headerName: 'Name', field: 'Title', flex: 2, minWidth: 250, cellClass: 'primary-action highlight',
                    sortable: true, filter: 'agTextColumnFilter', onCellClicked: this.editPermission.bind(this),
                },
                {
                    headerName: 'Identity', field: 'Identity', flex: 2, minWidth: 250, cellClass: 'no-outline', sortable: true,
                    filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Condition', field: 'Condition', flex: 2, minWidth: 250, cellClass: 'no-outline', sortable: true,
                    filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Grant', field: 'Grant', width: 70, headerClass: 'dense', cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    width: 40, cellClass: 'secondary-action no-padding', cellRenderer: 'permissionsActionsComponent', pinned: 'right',
                    cellRendererParams: {
                        onDelete: this.deletePermission.bind(this),
                    },
                },
            ] });
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        this.targetType = parseInt(this.route.snapshot.paramMap.get('type'), 10);
        this.keyType = this.route.snapshot.paramMap.get('keyType');
        this.key = this.route.snapshot.paramMap.get('key');
    }
    PermissionsComponent.prototype.ngOnInit = function () {
        this.fetchPermissions();
        this.refreshOnChildClosed();
    };
    PermissionsComponent.prototype.ngOnDestroy = function () {
        this.permissions$.complete();
        this.subscription.unsubscribe();
    };
    PermissionsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    PermissionsComponent.prototype.fetchPermissions = function () {
        var _this = this;
        this.permissionsService.getAll(this.targetType, this.keyType, this.key).subscribe(function (permissions) {
            _this.permissions$.next(permissions);
        });
    };
    PermissionsComponent.prototype.editPermission = function (params) {
        var e_1, _a;
        var form;
        if (params == null) {
            var target = void 0;
            var keys = Object.keys(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].metadata);
            try {
                for (var keys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].metadata[key].type !== this.targetType) {
                        continue;
                    }
                    target = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].metadata[key].target;
                    break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            form = {
                items: [{
                        ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].contentTypes.permissions,
                        For: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ Target: target }, (this.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].keyTypes.guid && { Guid: this.key })), (this.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].keyTypes.number && { Number: parseInt(this.key, 10) })), (this.keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].keyTypes.string && { String: this.key }))
                    }],
            };
        }
        else {
            var permission = params.data;
            form = {
                items: [{ EntityId: permission.Id }],
            };
        }
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_13__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    PermissionsComponent.prototype.deletePermission = function (permission) {
        var _this = this;
        if (!confirm("Delete '" + permission.Title + "' (" + permission.Id + ")?")) {
            return;
        }
        this.snackBar.open('Deleting...');
        this.permissionsService.delete(permission.Id).subscribe(function () {
            _this.snackBar.open('Deleted', null, { duration: 2000 });
            _this.fetchPermissions();
        });
    };
    PermissionsComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(!!this.route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () { return !!_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            _this.fetchPermissions();
        }));
    };
    PermissionsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _services_permissions_service__WEBPACK_IMPORTED_MODULE_15__["PermissionsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    PermissionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-permissions',
            template: _raw_loader_permissions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_permissions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _services_permissions_service__WEBPACK_IMPORTED_MODULE_15__["PermissionsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], PermissionsComponent);
    return PermissionsComponent;
}());



/***/ }),

/***/ "UXYu":
/*!**********************************************************!*\
  !*** ./src/app/permissions/permissions-dialog.config.ts ***!
  \**********************************************************/
/*! exports provided: permissionsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionsDialog", function() { return permissionsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var permissionsDialog = {
    name: 'SET_PERMISSIONS_DIALOG',
    initContext: true,
    panelSize: 'large',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var PermissionsComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./permissions.component */ "SST1"))];
                    case 1:
                        PermissionsComponent = (_a.sent()).PermissionsComponent;
                        return [2 /*return*/, PermissionsComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "Xbyz":
/*!********************************************************!*\
  !*** ./src/app/permissions/permissions.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvcGVybWlzc2lvbnMvcGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "geKs":
/*!************************!*\
  !*** ../edit/index.ts ***!
  \************************/
/*! exports provided: webApiAppFilesAll, webApiAppFile, webApiAppFileCreate, AssetsService, DnnBridgeService, DropzoneDraggingHelper, webApiEditRoot, EavService, EditRoutingService, webApiEntityRoot, webApiEntityList, EntityService, FileTypeService, GlobalConfigService, LoadIconsService, QueryService, FileTypeConstants, ScriptsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "1MJk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFilesAll", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiAppFilesAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFile", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiAppFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFileCreate", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiAppFileCreate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["AssetsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DnnBridgeService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["DnnBridgeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropzoneDraggingHelper", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["DropzoneDraggingHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEditRoot", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiEditRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EavService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["EavService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditRoutingService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["EditRoutingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityRoot", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiEntityRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityList", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["webApiEntityList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["EntityService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["FileTypeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["GlobalConfigService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadIconsService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["LoadIconsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["QueryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeConstants", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["FileTypeConstants"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptsLoaderService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["ScriptsLoaderService"]; });




/***/ }),

/***/ "jl54":
/*!***************************************************!*\
  !*** ./src/app/permissions/permissions.module.ts ***!
  \***************************************************/
/*! exports provided: PermissionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsModule", function() { return PermissionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/angular */ "W6oE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../content-items/services/entities.service */ "GTfO");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _ag_grid_components_permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ag-grid-components/permissions-actions/permissions-actions.component */ "HEI7");
/* harmony import */ var _permissions_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./permissions-routing.module */ "6Ilh");
/* harmony import */ var _permissions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./permissions.component */ "SST1");
/* harmony import */ var _services_metadata_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/metadata.service */ "ykZ8");
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/permissions.service */ "SNUn");


















var PermissionsModule = /** @class */ (function () {
    function PermissionsModule() {
    }
    PermissionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _permissions_component__WEBPACK_IMPORTED_MODULE_15__["PermissionsComponent"],
                _ag_grid_components_permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_13__["PermissionsActionsComponent"],
            ],
            entryComponents: [
                _permissions_component__WEBPACK_IMPORTED_MODULE_15__["PermissionsComponent"],
                _ag_grid_components_permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_13__["PermissionsActionsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _permissions_routing_module__WEBPACK_IMPORTED_MODULE_14__["PermissionsRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_12__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridModule"].withComponents([]),
                _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_11__["Context"],
                _services_permissions_service__WEBPACK_IMPORTED_MODULE_17__["PermissionsService"],
                _services_metadata_service__WEBPACK_IMPORTED_MODULE_16__["MetadataService"],
                _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_10__["EntitiesService"],
            ]
        })
    ], PermissionsModule);
    return PermissionsModule;
}());



/***/ }),

/***/ "lyDw":
/*!****************************************!*\
  !*** ../edit/shared/services/index.ts ***!
  \****************************************/
/*! exports provided: webApiAppFilesAll, webApiAppFile, webApiAppFileCreate, AssetsService, DnnBridgeService, DropzoneDraggingHelper, webApiEditRoot, EavService, EditRoutingService, webApiEntityRoot, webApiEntityList, EntityService, FileTypeService, GlobalConfigService, LoadIconsService, QueryService, FileTypeConstants, ScriptsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.service */ "6fnQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFilesAll", function() { return _assets_service__WEBPACK_IMPORTED_MODULE_0__["webApiAppFilesAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFile", function() { return _assets_service__WEBPACK_IMPORTED_MODULE_0__["webApiAppFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiAppFileCreate", function() { return _assets_service__WEBPACK_IMPORTED_MODULE_0__["webApiAppFileCreate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return _assets_service__WEBPACK_IMPORTED_MODULE_0__["AssetsService"]; });

/* harmony import */ var _dnn_bridge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dnn-bridge.service */ "iKpp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DnnBridgeService", function() { return _dnn_bridge_service__WEBPACK_IMPORTED_MODULE_1__["DnnBridgeService"]; });

/* harmony import */ var _dropzone_dragging_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropzone-dragging.helper */ "kfUh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropzoneDraggingHelper", function() { return _dropzone_dragging_helper__WEBPACK_IMPORTED_MODULE_2__["DropzoneDraggingHelper"]; });

/* harmony import */ var _eav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eav.service */ "JXuk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEditRoot", function() { return _eav_service__WEBPACK_IMPORTED_MODULE_3__["webApiEditRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EavService", function() { return _eav_service__WEBPACK_IMPORTED_MODULE_3__["EavService"]; });

/* harmony import */ var _edit_routing_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-routing.models */ "RI13");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.service */ "0adC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditRoutingService", function() { return _edit_routing_service__WEBPACK_IMPORTED_MODULE_5__["EditRoutingService"]; });

/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entity.service */ "b67o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityRoot", function() { return _entity_service__WEBPACK_IMPORTED_MODULE_6__["webApiEntityRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiEntityList", function() { return _entity_service__WEBPACK_IMPORTED_MODULE_6__["webApiEntityList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return _entity_service__WEBPACK_IMPORTED_MODULE_6__["EntityService"]; });

/* harmony import */ var _file_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-type.service */ "IMfk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeService", function() { return _file_type_service__WEBPACK_IMPORTED_MODULE_7__["FileTypeService"]; });

/* harmony import */ var _global_configuration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global-configuration.service */ "2FQU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalConfigService", function() { return _global_configuration_service__WEBPACK_IMPORTED_MODULE_8__["GlobalConfigService"]; });

/* harmony import */ var _load_icons_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./load-icons.service */ "39Ct");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadIconsService", function() { return _load_icons_service__WEBPACK_IMPORTED_MODULE_9__["LoadIconsService"]; });

/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query.service */ "gatd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return _query_service__WEBPACK_IMPORTED_MODULE_10__["QueryService"]; });

/* harmony import */ var _scripts_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts-loader.service */ "Scw0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTypeConstants", function() { return _scripts_loader_service__WEBPACK_IMPORTED_MODULE_11__["FileTypeConstants"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptsLoaderService", function() { return _scripts_loader_service__WEBPACK_IMPORTED_MODULE_11__["ScriptsLoaderService"]; });















/***/ })

}]);
//# sourceMappingURL=permissions-permissions-module.js.map