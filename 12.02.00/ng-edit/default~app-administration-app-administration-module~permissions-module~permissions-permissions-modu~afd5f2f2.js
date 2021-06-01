(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~permissions-module~permissions-permissions-modu~afd5f2f2"],{

/***/ "/4PL":
/*!****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/permissions.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "7Jhs":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/permissions/permissions.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-component-wrapper\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>Permissions</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <div class=\"grid-wrapper\">\r\n    <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"permissions$ | async\" [modules]=\"modules\"\r\n      [gridOptions]=\"gridOptions\">\r\n    </ag-grid-angular>\r\n\r\n    <div class=\"grid-more-actions-box\"></div>\r\n\r\n    <button mat-fab mat-elevation-z24 class=\"grid-fab\" matTooltip=\"Create a new permission\"\r\n      (click)=\"editPermission(null)\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Bkot":
/*!*******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/permissions-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PermissionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsRoutingModule", function() { return PermissionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "EaDK");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions-dialog.config */ "IrWj");






var routes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_5__["permissionsDialog"] },
        children: [
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~5cd8229e"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~8dad88b1"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edi~24510ec4"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~replace-content-replace-content-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "32/c")).then(function (m) { return m.EditModule; }); }
            },
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["refreshEdit"],
                loadChildren: function () { return __webpack_require__.e(/*! import() | edit-refresh-edit-module */ "refresh-edit-module").then(__webpack_require__.bind(null, /*! ../../../../edit/refresh-edit.module */ "nxWM")).then(function (m) { return m.RefreshEditModule; }); }
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

/***/ "CLg8":
/*!*********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/services/permissions.service.ts ***!
  \*********************************************************************************/
/*! exports provided: PermissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsService", function() { return PermissionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content-items/services/entities.service */ "wBq4");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "qb9A");
/* harmony import */ var _metadata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata.service */ "LQlA");





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

/***/ "FDU9":
/*!*************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/ag-grid-components/permissions-actions/permissions-actions.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PermissionsActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsActionsComponent", function() { return PermissionsActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_permissions_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./permissions-actions.component.html */ "GHR+");
/* harmony import */ var _permissions_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions-actions.component.scss */ "ZoFk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




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

/***/ "GHR+":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/permissions/ag-grid-components/permissions-actions/permissions-actions.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Delete\" (click)=\"deletePermission()\">\r\n    <mat-icon>delete</mat-icon>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "IrWj":
/*!******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/permissions-dialog.config.ts ***!
  \******************************************************************************/
/*! exports provided: permissionsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permissionsDialog", function() { return permissionsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

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
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./permissions.component */ "tIKv"))];
                    case 1:
                        PermissionsComponent = (_a.sent()).PermissionsComponent;
                        return [2 /*return*/, PermissionsComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "LQlA":
/*!******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/services/metadata.service.ts ***!
  \******************************************************************************/
/*! exports provided: MetadataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataService", function() { return MetadataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");





var webApiRoot = 'admin/metadata/get';
var MetadataService = /** @class */ (function () {
    function MetadataService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    /**
     * Fetches metadata for given key in metadata content type
     * @param typeId metadataOf something. For more info checkout out eavConstants file
     * @param keyType e.g. for keyType === guid, key === contentTypeStaticName
     * @param key key of content type for which we search for permissions. Key is connected with keyType
     * @param contentTypeName name of content type where permissions are stored
     */
    MetadataService.prototype.getMetadata = function (typeId, keyType, key, contentTypeName) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiRoot), {
            params: {
                appId: this.context.appId.toString(),
                targetType: typeId.toString(),
                keyType: keyType,
                key: key,
                contentType: contentTypeName,
            },
        });
    };
    MetadataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    MetadataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], MetadataService);
    return MetadataService;
}());



/***/ }),

/***/ "ZoFk":
/*!***************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/ag-grid-components/permissions-actions/permissions-actions.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXNzaW9ucy1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "tIKv":
/*!**************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/permissions.component.ts ***!
  \**************************************************************************/
/*! exports provided: PermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsComponent", function() { return PermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_permissions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./permissions.component.html */ "7Jhs");
/* harmony import */ var _permissions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions.component.scss */ "/4PL");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "DR3G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/id-field/id-field.component */ "gyhz");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ "1HxE");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/constants/eav.constants */ "qb9A");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ "X9FW");
/* harmony import */ var _ag_grid_components_permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ag-grid-components/permissions-actions/permissions-actions.component */ "FDU9");
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/permissions.service */ "CLg8");
















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
                    sortable: true, sort: 'asc', filter: 'agTextColumnFilter', onCellClicked: this.editPermission.bind(this),
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
        var _this = this;
        var _a;
        var form;
        if (params == null) {
            var target = (_a = Object.values(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].metadata).find(function (metaValue) { return metaValue.type === _this.targetType; })) === null || _a === void 0 ? void 0 : _a.target;
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

/***/ "vhtq":
/*!***********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/permissions.module.ts ***!
  \***********************************************************************/
/*! exports provided: PermissionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsModule", function() { return PermissionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/angular */ "gwh1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../content-items/services/entities.service */ "wBq4");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _ag_grid_components_permissions_actions_permissions_actions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ag-grid-components/permissions-actions/permissions-actions.component */ "FDU9");
/* harmony import */ var _permissions_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./permissions-routing.module */ "Bkot");
/* harmony import */ var _permissions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./permissions.component */ "tIKv");
/* harmony import */ var _services_metadata_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/metadata.service */ "LQlA");
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/permissions.service */ "CLg8");


















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

/***/ "wBq4":
/*!********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-items/services/entities.service.ts ***!
  \********************************************************************************/
/*! exports provided: EntitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesService", function() { return EntitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../edit/shared/services */ "5t3I");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");






var EntitiesService = /** @class */ (function () {
    function EntitiesService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    EntitiesService.prototype.delete = function (type, id, tryForce) {
        return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_4__["webApiEntityRoot"] + 'delete'), {
            params: { contentType: type, id: id.toString(), appId: this.context.appId.toString(), force: tryForce.toString() },
        });
    };
    EntitiesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    EntitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], EntitiesService);
    return EntitiesService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-administration-app-administration-module~permissions-module~permissions-permissions-modu~afd5f2f2.js.map