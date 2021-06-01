(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-type-fields-content-type-fields-module"],{

/***/ "0C7+":
/*!***********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/content-type-fields-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ContentTypeFieldsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsRoutingModule", function() { return ContentTypeFieldsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "EaDK");
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../permissions/go-to-permissions */ "Tgur");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-type-fields-dialog.config */ "dB19");
/* harmony import */ var _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-content-type-fields/edit-content-type-fields-dialog.config */ "ko1b");








var routes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_5__["DialogEntryComponent"], data: { dialog: _content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_6__["contentTypeFieldsDialog"] },
        children: [
            { path: 'add/:contentTypeStaticName', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_5__["DialogEntryComponent"], data: { dialog: _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_7__["editContentTypeFieldsDialog"] } },
            { path: 'update/:contentTypeStaticName/:id', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_5__["DialogEntryComponent"], data: { dialog: _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_7__["editContentTypeFieldsDialog"] } },
            _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_4__["GoToPermissions"].route,
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~5cd8229e"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~8dad88b1"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edi~24510ec4"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~replace-content-replace-content-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "32/c")).then(function (m) { return m.EditModule; }); }
            },
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["refreshEdit"],
                loadChildren: function () { return __webpack_require__.e(/*! import() | edit-refresh-edit-module */ "refresh-edit-module").then(__webpack_require__.bind(null, /*! ../../../../edit/refresh-edit.module */ "nxWM")).then(function (m) { return m.RefreshEditModule; }); }
            },
        ]
    }
];
var ContentTypeFieldsRoutingModule = /** @class */ (function () {
    function ContentTypeFieldsRoutingModule() {
    }
    ContentTypeFieldsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContentTypeFieldsRoutingModule);
    return ContentTypeFieldsRoutingModule;
}());



/***/ }),

/***/ "70k1":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-special/content-type-fields-special.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\">\r\n  <mat-icon *ngIf=\"hasFormulas\" matTooltip=\"Has Formulas\">functions</mat-icon>\r\n  <mat-icon *ngIf=\"isEphemeral\" matTooltip=\"Ephemeral / Temporary, won't save\">mobiledata_off</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "7GCJ":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-title/content-type-fields-title.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Use as title field\">\r\n    <mat-icon *ngIf=\"isTitle\" svgIcon=\"star\"></mat-icon>\r\n    <mat-icon *ngIf=\"!isTitle\">star_outline</mat-icon>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "8gzK":
/*!****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/content-type-fields.helpers.ts ***!
  \****************************************************************************************/
/*! exports provided: calculateTypeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTypeIcon", function() { return calculateTypeIcon; });
/* harmony import */ var _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/data-type.constants */ "bv8H");

function calculateTypeIcon(typeName) {
    switch (typeName) {
        case _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__["DataTypeConstants"].String:
            return 'text_fields';
        case _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__["DataTypeConstants"].Entity:
            return 'share';
        case _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__["DataTypeConstants"].Boolean:
            return 'toggle_on';
        case _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__["DataTypeConstants"].Number:
            return 'dialpad';
        case _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__["DataTypeConstants"].Custom:
            return 'extension';
        case _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__["DataTypeConstants"].DateTime:
            return 'today';
        case _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__["DataTypeConstants"].Hyperlink:
            return 'link';
        case _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__["DataTypeConstants"].Empty:
            return 'crop_free';
        default:
            return 'device_unknown';
    }
}


/***/ }),

/***/ "DLvq":
/*!*************************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-special/content-type-fields-special.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ContentTypeFieldsSpecialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsSpecialComponent", function() { return ContentTypeFieldsSpecialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_type_fields_special_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields-special.component.html */ "70k1");
/* harmony import */ var _content_type_fields_special_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields-special.component.scss */ "zZXs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ContentTypeFieldsSpecialComponent = /** @class */ (function () {
    function ContentTypeFieldsSpecialComponent() {
    }
    ContentTypeFieldsSpecialComponent.prototype.agInit = function (params) {
        var field = params.data;
        this.hasFormulas = field.HasFormulas;
        this.isEphemeral = field.IsEphemeral;
    };
    ContentTypeFieldsSpecialComponent.prototype.refresh = function (params) {
        return true;
    };
    ContentTypeFieldsSpecialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-type-fields-special',
            template: _raw_loader_content_type_fields_special_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_type_fields_special_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ContentTypeFieldsSpecialComponent);
    return ContentTypeFieldsSpecialComponent;
}());



/***/ }),

/***/ "Mx5g":
/*!*********************************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LXR5cGUtZmllbGRzLWlucHV0LXR5cGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "OAPY":
/*!*****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/constants/field-name.patterns.ts ***!
  \*****************************************************************************************/
/*! exports provided: fieldNamePattern, fieldNameError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldNamePattern", function() { return fieldNamePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldNameError", function() { return fieldNameError; });
var fieldNamePattern = /^[A-Za-z][A-Za-z0-9]+$/;
var fieldNameError = 'Standard letters and numbers are allowed. Must start with a letter.';


/***/ }),

/***/ "PMR9":
/*!*********************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-title/content-type-fields-title.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ContentTypeFieldsTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsTitleComponent", function() { return ContentTypeFieldsTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_type_fields_title_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields-title.component.html */ "7GCJ");
/* harmony import */ var _content_type_fields_title_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields-title.component.scss */ "kUNG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ContentTypeFieldsTitleComponent = /** @class */ (function () {
    function ContentTypeFieldsTitleComponent() {
    }
    ContentTypeFieldsTitleComponent.prototype.agInit = function (params) {
        this.isTitle = params.value;
    };
    ContentTypeFieldsTitleComponent.prototype.refresh = function (params) {
        return true;
    };
    ContentTypeFieldsTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-type-fields-title',
            template: _raw_loader_content_type_fields_title_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_type_fields_title_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ContentTypeFieldsTitleComponent);
    return ContentTypeFieldsTitleComponent;
}());



/***/ }),

/***/ "Pjf9":
/*!******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/content-type-fields.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ContentTypeFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsComponent", function() { return ContentTypeFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_type_fields_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields.component.html */ "zY+U");
/* harmony import */ var _content_type_fields_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields.component.scss */ "cpse");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "DR3G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-administration/constants/field-name.patterns */ "OAPY");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../permissions/go-to-permissions */ "Tgur");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ "1HxE");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/constants/eav.constants */ "qb9A");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ "X9FW");
/* harmony import */ var _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-actions/content-type-fields-actions.component */ "sp8M");
/* harmony import */ var _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component */ "X0IS");
/* harmony import */ var _ag_grid_components_content_type_fields_special_content_type_fields_special_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-special/content-type-fields-special.component */ "DLvq");
/* harmony import */ var _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-title/content-type-fields-title.component */ "PMR9");
/* harmony import */ var _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-type/content-type-fields-type.component */ "zxI0");
/* harmony import */ var _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./constants/input-type.constants */ "3btq");
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/content-types-fields.service */ "spPA");



// tslint:disable-next-line:max-line-length




















var ContentTypeFieldsComponent = /** @class */ (function () {
    function ContentTypeFieldsComponent(dialogRef, route, router, contentTypesService, contentTypesFieldsService, snackBar) {
        this.dialogRef = dialogRef;
        this.route = route;
        this.router = router;
        this.contentTypesService = contentTypesService;
        this.contentTypesFieldsService = contentTypesFieldsService;
        this.snackBar = snackBar;
        this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.fields$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_13__["defaultGridOptions"]), { getRowClass: function (params) {
                var field = params.data;
                if (field.InputType === _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_21__["InputTypeConstants"].EmptyDefault) {
                    return 'group-start-row';
                }
                if (field.InputType === _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_21__["InputTypeConstants"].EmptyEnd) {
                    return 'group-end-row';
                }
                return '';
            }, frameworkComponents: {
                contentTypeFieldsTitleComponent: _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_19__["ContentTypeFieldsTitleComponent"],
                contentTypeFieldsTypeComponent: _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_20__["ContentTypeFieldsTypeComponent"],
                contentTypeFieldsInputTypeComponent: _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_17__["ContentTypeFieldsInputTypeComponent"],
                contentTypeFieldsSpecialComponent: _ag_grid_components_content_type_fields_special_content_type_fields_special_component__WEBPACK_IMPORTED_MODULE_18__["ContentTypeFieldsSpecialComponent"],
                contentTypeFieldsActionsComponent: _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_16__["ContentTypeFieldsActionsComponent"],
            }, columnDefs: [
                { rowDrag: true, width: 18, cellClass: 'no-select no-padding no-outline' },
                {
                    headerName: 'Title', field: 'IsTitle', width: 42, cellClass: 'secondary-action no-padding no-outline',
                    cellRenderer: 'contentTypeFieldsTitleComponent', onCellClicked: this.setTitle.bind(this),
                },
                {
                    headerName: 'Name', field: 'StaticName', flex: 2, minWidth: 250, cellClass: 'primary-action highlight',
                    sortable: true, filter: 'agTextColumnFilter', onCellClicked: this.editFieldMetadata.bind(this),
                },
                {
                    headerName: 'Type', field: 'Type', width: 70, headerClass: 'dense', cellClass: 'no-outline', sortable: true,
                    filter: 'agTextColumnFilter', cellRenderer: 'contentTypeFieldsTypeComponent',
                },
                {
                    headerName: 'Input', field: 'InputType', width: 160, cellClass: 'secondary-action no-padding',
                    sortable: true, filter: 'agTextColumnFilter', cellRenderer: 'contentTypeFieldsInputTypeComponent',
                    onCellClicked: this.changeInputType.bind(this), valueGetter: this.inputTypeValueGetter,
                },
                {
                    headerName: 'Label', field: 'Metadata.All.Name', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Special', width: 66, headerClass: 'dense', cellClass: 'no-outline',
                    cellRenderer: 'contentTypeFieldsSpecialComponent',
                },
                {
                    headerName: 'Notes', field: 'Metadata.All.Notes', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    width: 80, cellClass: 'secondary-action no-padding', cellRenderer: 'contentTypeFieldsActionsComponent', pinned: 'right',
                    cellRendererParams: {
                        onRename: this.rename.bind(this),
                        onDelete: this.delete.bind(this),
                        onOpenPermissions: this.openPermissions.bind(this),
                    },
                },
            ] });
        this.sortApplied = false;
        this.filterApplied = false;
        this.rowDragSuppressed = false;
        this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
    }
    ContentTypeFieldsComponent.prototype.ngOnInit = function () {
        this.fetchFields();
        this.refreshOnChildClosed();
    };
    ContentTypeFieldsComponent.prototype.ngOnDestroy = function () {
        this.contentType$.complete();
        this.fields$.complete();
        this.subscription.unsubscribe();
    };
    ContentTypeFieldsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ContentTypeFieldsComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
    };
    ContentTypeFieldsComponent.prototype.onRowDragEnter = function (event) {
        this.gridApi.setEnableCellTextSelection(false);
    };
    ContentTypeFieldsComponent.prototype.onRowDragEnd = function (event) {
        var _this = this;
        this.gridApi.setSuppressRowDrag(true);
        var idArray = this.fields$.value.map(function (field) { return field.Id; });
        this.contentTypesFieldsService.reOrder(idArray, this.contentType$.value).subscribe(function (res) {
            _this.fetchFields(function () {
                _this.gridApi.setEnableCellTextSelection(true);
                _this.gridApi.setSuppressRowDrag(false);
            });
        });
    };
    ContentTypeFieldsComponent.prototype.onRowDragMove = function (event) {
        var movingNode = event.node;
        var overNode = event.overNode;
        if (!overNode) {
            return;
        }
        var rowNeedsToMove = movingNode !== overNode;
        if (rowNeedsToMove) {
            var movingData = movingNode.data;
            var overData = overNode.data;
            var newFields = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.fields$.value);
            var fromIndex = newFields.indexOf(movingData);
            var toIndex = newFields.indexOf(overData);
            this.moveInArray(newFields, fromIndex, toIndex);
            this.fields$.next(newFields);
            this.gridApi.clearFocusedCell();
        }
    };
    ContentTypeFieldsComponent.prototype.moveInArray = function (arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
    };
    ContentTypeFieldsComponent.prototype.onSortChanged = function (params) {
        var sortModel = this.gridApi.getSortModel();
        this.sortApplied = sortModel.length > 0;
        this.suppressRowDrag();
    };
    ContentTypeFieldsComponent.prototype.onFilterChanged = function (params) {
        var filterModel = this.gridApi.getFilterModel();
        var fieldsFiltered = Object.keys(filterModel);
        this.filterApplied = fieldsFiltered.length > 0;
        this.suppressRowDrag();
    };
    ContentTypeFieldsComponent.prototype.suppressRowDrag = function () {
        var shouldSuppress = this.sortApplied || this.filterApplied;
        if (shouldSuppress && !this.rowDragSuppressed) {
            this.rowDragSuppressed = true;
            this.gridApi.setSuppressRowDrag(true);
        }
        else if (!shouldSuppress && this.rowDragSuppressed) {
            this.rowDragSuppressed = false;
            this.gridApi.setSuppressRowDrag(false);
        }
    };
    ContentTypeFieldsComponent.prototype.add = function () {
        this.router.navigate(["add/" + this.contentTypeStaticName], { relativeTo: this.route });
    };
    ContentTypeFieldsComponent.prototype.inputTypeValueGetter = function (params) {
        var field = params.data;
        var inputType = field.InputType.substring(field.InputType.indexOf('-') + 1);
        return inputType;
    };
    ContentTypeFieldsComponent.prototype.fetchFields = function (callback) {
        var _this = this;
        if (this.contentType$.value == null) {
            var contentType$ = this.contentTypesService.retrieveContentType(this.contentTypeStaticName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["share"])());
            var fields$ = contentType$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (contentType) { return _this.contentTypesFieldsService.getFields(contentType); }));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([contentType$, fields$]).subscribe(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), contentType = _b[0], fields = _b[1];
                _this.contentType$.next(contentType);
                _this.fields$.next(fields);
                if (callback != null) {
                    callback();
                }
            });
        }
        else {
            this.contentTypesFieldsService.getFields(this.contentType$.value).subscribe(function (fields) {
                _this.fields$.next(fields);
                if (callback != null) {
                    callback();
                }
            });
        }
    };
    ContentTypeFieldsComponent.prototype.editFieldMetadata = function (params) {
        var field = params.data;
        var form = {
            items: [
                this.createItemDefinition(field, 'All'),
                this.createItemDefinition(field, field.Type),
                this.createItemDefinition(field, field.InputType),
            ],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_15__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    ContentTypeFieldsComponent.prototype.createItemDefinition = function (field, metadataType) {
        return field.Metadata[metadataType] != null
            ? { EntityId: field.Metadata[metadataType].Id } // if defined, return the entity-number to edit
            : {
                ContentTypeName: '@' + metadataType,
                For: {
                    Target: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_14__["eavConstants"].metadata.attribute.target,
                    Number: field.Id,
                },
                Prefill: { Name: field.StaticName },
            };
    };
    ContentTypeFieldsComponent.prototype.setTitle = function (params) {
        var _this = this;
        var field = params.data;
        this.snackBar.open('Setting title...');
        this.contentTypesFieldsService.setTitle(field, this.contentType$.value).subscribe(function () {
            _this.snackBar.open('Title set', null, { duration: 2000 });
            _this.fetchFields();
        });
    };
    ContentTypeFieldsComponent.prototype.changeInputType = function (params) {
        var field = params.data;
        this.router.navigate(["update/" + this.contentTypeStaticName + "/" + field.Id], { relativeTo: this.route });
    };
    ContentTypeFieldsComponent.prototype.rename = function (field) {
        var _this = this;
        var newName = prompt("What new name would you like for '" + field.StaticName + "' (" + field.Id + ")?", field.StaticName);
        if (newName === null) {
            return;
        }
        newName = newName.trim().replace(/\s\s+/g, ' '); // remove multiple white spaces and tabs
        if (newName === field.StaticName) {
            return;
        }
        while (!newName.match(_app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_10__["fieldNamePattern"])) {
            newName = prompt("What new name would you like for '" + field.StaticName + "' (" + field.Id + ")?\n" + _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_10__["fieldNameError"], newName);
            if (newName === null) {
                return;
            }
            newName = newName.trim().replace(/\s\s+/g, ' '); // remove multiple white spaces and tabs
            if (newName === field.StaticName) {
                return;
            }
        }
        this.snackBar.open('Saving...');
        this.contentTypesFieldsService.rename(field, this.contentType$.value, newName).subscribe(function () {
            _this.snackBar.open('Saved', null, { duration: 2000 });
            _this.fetchFields();
        });
    };
    ContentTypeFieldsComponent.prototype.delete = function (field) {
        var _this = this;
        if (!confirm("Are you sure you want to delete '" + field.StaticName + "' (" + field.Id + ")?")) {
            return;
        }
        this.snackBar.open('Deleting...');
        this.contentTypesFieldsService.delete(field, this.contentType$.value).subscribe(function (res) {
            _this.snackBar.open('Deleted', null, { duration: 2000 });
            _this.fetchFields();
        });
    };
    ContentTypeFieldsComponent.prototype.openPermissions = function (field) {
        this.router.navigate([_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_12__["GoToPermissions"].goAttribute(field.Id)], { relativeTo: this.route });
    };
    ContentTypeFieldsComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(!!this.route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () { return !!_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            _this.fetchFields();
        }));
    };
    ContentTypeFieldsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__["ContentTypesService"] },
        { type: _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_22__["ContentTypesFieldsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    ContentTypeFieldsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-content-type-fields',
            template: _raw_loader_content_type_fields_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_type_fields_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__["ContentTypesService"],
            _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_22__["ContentTypesFieldsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ContentTypeFieldsComponent);
    return ContentTypeFieldsComponent;
}());



/***/ }),

/***/ "TceY":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\" [ngSwitch]=\"editMode\">\r\n    <ng-container *ngSwitchCase=\"undefined\">Fields</ng-container>\r\n    <ng-container *ngSwitchCase=\"true\">Edit Field</ng-container>\r\n    <ng-container *ngSwitchCase=\"false\">Add Fields</ng-container>\r\n  </div>\r\n</div>\r\n\r\n<form #ngForm=\"ngForm\" class=\"dialog-form\" *ngIf=\"(loading$ | async) === false\" (ngSubmit)=\"save()\">\r\n  <div class=\"dialog-form-content fancy-scrollbar-light\">\r\n    <div class=\"row-container\" *ngFor=\"let field of fields; index as i\">\r\n      <div class=\"edit-input\">\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Name</mat-label>\r\n          <input matInput [pattern]=\"fieldNamePattern\" [(ngModel)]=\"field.StaticName\" [name]=\"'StaticName' + i\"\r\n            [disabled]=\"editMode\" #staticName=\"ngModel\">\r\n        </mat-form-field>\r\n        <ng-container *ngIf=\"staticName.touched && staticName.errors\">\r\n          <app-field-hint *ngIf=\"staticName.errors.pattern\" [isError]=\"true\">{{ fieldNameError }}</app-field-hint>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <div class=\"edit-input\">\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Data Type</mat-label>\r\n          <mat-select (selectionChange)=\"calculateInputTypeOptions(i); resetInputType(i); calculateHints(i)\"\r\n            [(ngModel)]=\"field.Type\" [name]=\"'Type' + i\" [disabled]=\"editMode\">\r\n            <mat-select-trigger>\r\n              <mat-icon class=\"type-icon\">{{ findIcon(field.Type) }}</mat-icon>\r\n              <span>{{ field.Type }}</span>\r\n            </mat-select-trigger>\r\n            <mat-option *ngFor=\"let dataType of dataTypes\" [value]=\"dataType.name\">\r\n              <mat-icon>{{ dataType.icon }}</mat-icon>\r\n              <span>{{ dataType.label }}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <app-field-hint>{{ dataTypeHints[i] }}</app-field-hint>\r\n      </div>\r\n\r\n      <div class=\"edit-input\">\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Input Type</mat-label>\r\n          <mat-select (selectionChange)=\"calculateHints(i)\" [(ngModel)]=\"field.InputType\" [name]=\"'InputType' + i\">\r\n            <mat-option *ngFor=\"let option of filteredInputTypeOptions[i]\" [value]=\"option.inputType\">\r\n              {{ option.label }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <app-field-hint>{{ inputTypeHints[i] }}</app-field-hint>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-form-actions\">\r\n    <button mat-raised-button type=\"button\" (click)=\"closeDialog()\">Cancel</button>\r\n    <button mat-raised-button type=\"submit\" color=\"accent\" [disabled]=\"!ngForm.form.valid || (saving$ | async)\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "Tgur":
/*!**********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/permissions/go-to-permissions.ts ***!
  \**********************************************************************/
/*! exports provided: GoToPermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToPermissions", function() { return GoToPermissions; });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ "qb9A");

/**
 * Navigation system to access permissions dialogs as sub-dialogs for many use cases
 */
var GoToPermissions = {
    go: function (targetType, keyType, key) {
        return "permissions/" + targetType + "/" + keyType + "/" + key;
    },
    /** Go to edit permissions for entity */
    goEntity: function (key) {
        return this.go(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].metadata.entity.type, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].keyTypes.guid, key);
    },
    /** Go to edit permissions for content-type. For historic reasons, it's the same as Entity */
    goContentType: function (key) {
        return this.goEntity(key);
    },
    goAttribute: function (id) {
        return this.go(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].metadata.attribute.type, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].keyTypes.number, id);
    },
    goApp: function (appId) {
        return this.go(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].metadata.app.type, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__["eavConstants"].keyTypes.number, appId);
    },
    /**
     * The route definition for use in all routing components which can route to this dialog
     */
    route: {
        path: 'permissions/:type/:keyType/:key',
        loadChildren: function () { return __webpack_require__.e(/*! import() | permissions-module */ "default~app-administration-app-administration-module~permissions-module~permissions-permissions-modu~afd5f2f2").then(__webpack_require__.bind(null, /*! ./permissions.module */ "vhtq")).then(function (m) { return m.PermissionsModule; }); },
        data: { title: 'Permission' },
    },
};


/***/ }),

/***/ "X0IS":
/*!*******************************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: ContentTypeFieldsInputTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsInputTypeComponent", function() { return ContentTypeFieldsInputTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_type_fields_input_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields-input-type.component.html */ "iqPA");
/* harmony import */ var _content_type_fields_input_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields-input-type.component.scss */ "Mx5g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ContentTypeFieldsInputTypeComponent = /** @class */ (function () {
    function ContentTypeFieldsInputTypeComponent() {
    }
    ContentTypeFieldsInputTypeComponent.prototype.agInit = function (params) {
        this.value = params.value;
    };
    ContentTypeFieldsInputTypeComponent.prototype.refresh = function (params) {
        return true;
    };
    ContentTypeFieldsInputTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-type-fields-input-type',
            template: _raw_loader_content_type_fields_input_type_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_type_fields_input_type_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ContentTypeFieldsInputTypeComponent);
    return ContentTypeFieldsInputTypeComponent;
}());



/***/ }),

/***/ "XAsQ":
/*!************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: EditContentTypeFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContentTypeFieldsComponent", function() { return EditContentTypeFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_content_type_fields_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-content-type-fields.component.html */ "TceY");
/* harmony import */ var _edit_content_type_fields_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-content-type-fields.component.scss */ "rBrY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app-administration/constants/field-name.patterns */ "OAPY");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/data-type.constants */ "bv8H");
/* harmony import */ var _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/input-type.constants */ "3btq");
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../content-type-fields.helpers */ "8gzK");
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/content-types-fields.service */ "spPA");
/* harmony import */ var _edit_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-content-type-fields.helpers */ "gTA9");

















var EditContentTypeFieldsComponent = /** @class */ (function () {
    function EditContentTypeFieldsComponent(dialogRef, route, contentTypesService, contentTypesFieldsService, snackBar) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.route = route;
        this.contentTypesService = contentTypesService;
        this.contentTypesFieldsService = contentTypesFieldsService;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.fields = [];
        this.filteredInputTypeOptions = [];
        this.dataTypeHints = [];
        this.inputTypeHints = [];
        this.fieldNamePattern = _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_10__["fieldNamePattern"];
        this.fieldNameError = _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_10__["fieldNameError"];
        this.findIcon = _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_14__["calculateTypeIcon"];
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](true);
        this.saving$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](false);
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        this.dialogRef.disableClose = true;
        this.subscription.add(this.dialogRef.backdropClick().subscribe(function (event) {
            if (_this.form.dirty) {
                var confirmed = confirm('You have unsaved changes. Are you sure you want to close this dialog?');
                if (!confirmed) {
                    return;
                }
            }
            _this.closeDialog();
        }));
    }
    EditContentTypeFieldsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
        var editFieldId = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id'), 10) : null;
        this.editMode = (editFieldId !== null);
        var contentType$ = this.contentTypesService.retrieveContentType(contentTypeStaticName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["share"])());
        var fields$ = contentType$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (contentType) { return _this.contentTypesFieldsService.getFields(contentType); }));
        var dataTypes$ = this.contentTypesFieldsService.typeListRetrieve().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (rawDataTypes) { return Object(_edit_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_16__["calculateDataTypes"])(rawDataTypes); }));
        var inputTypes$ = this.contentTypesFieldsService.getInputTypesList();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([contentType$, fields$, dataTypes$, inputTypes$]).subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 4), contentType = _b[0], fields = _b[1], dataTypes = _b[2], inputTypes = _b[3];
            _this.contentType = contentType;
            var allFields = fields;
            _this.dataTypes = dataTypes;
            _this.inputTypeOptions = inputTypes;
            if (_this.editMode) {
                var editField = allFields.find(function (field) { return field.Id === editFieldId; });
                _this.fields.push(editField);
            }
            else {
                for (var i = 1; i <= 8; i++) {
                    _this.fields.push({
                        Id: 0,
                        Type: _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_12__["DataTypeConstants"].String,
                        InputType: _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_13__["InputTypeConstants"].StringDefault,
                        StaticName: '',
                        IsTitle: allFields.length === 0,
                        SortOrder: allFields.length + i,
                    });
                }
            }
            for (var i = 0; i < _this.fields.length; i++) {
                _this.calculateInputTypeOptions(i);
                _this.calculateHints(i);
            }
            _this.loading$.next(false);
        });
    };
    EditContentTypeFieldsComponent.prototype.ngOnDestroy = function () {
        this.loading$.complete();
        this.saving$.complete();
        this.subscription.unsubscribe();
    };
    EditContentTypeFieldsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditContentTypeFieldsComponent.prototype.calculateInputTypeOptions = function (index) {
        var _this = this;
        this.filteredInputTypeOptions[index] = this.inputTypeOptions
            .filter(function (option) { return option.dataType === _this.fields[index].Type.toLocaleLowerCase(); });
    };
    EditContentTypeFieldsComponent.prototype.resetInputType = function (index) {
        var defaultInputType = this.fields[index].Type.toLocaleLowerCase() + _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_13__["InputTypeConstants"].DefaultSuffix;
        var defaultExists = this.filteredInputTypeOptions[index].some(function (option) { return option.inputType === defaultInputType; });
        if (!defaultExists) {
            defaultInputType = this.filteredInputTypeOptions[index][0].inputType;
        }
        this.fields[index].InputType = defaultInputType;
    };
    EditContentTypeFieldsComponent.prototype.calculateHints = function (index) {
        var _this = this;
        var _a, _b;
        var selectedDataType = this.dataTypes.find(function (dataType) { return dataType.name === _this.fields[index].Type; });
        var selectedInputType = this.inputTypeOptions.find(function (inputTypeOption) { return inputTypeOption.inputType === _this.fields[index].InputType; });
        this.dataTypeHints[index] = (_a = selectedDataType === null || selectedDataType === void 0 ? void 0 : selectedDataType.description) !== null && _a !== void 0 ? _a : '';
        this.inputTypeHints[index] = (_b = selectedInputType === null || selectedInputType === void 0 ? void 0 : selectedInputType.description) !== null && _b !== void 0 ? _b : '';
    };
    EditContentTypeFieldsComponent.prototype.save = function () {
        var _this = this;
        this.saving$.next(true);
        this.snackBar.open('Saving...');
        if (this.editMode) {
            var field = this.fields[0];
            this.contentTypesFieldsService.updateInputType(field.Id, field.StaticName, field.InputType).subscribe(function (res) {
                _this.saving$.next(false);
                _this.snackBar.open('Saved', null, { duration: 2000 });
                _this.closeDialog();
            });
        }
        else {
            rxjs__WEBPACK_IMPORTED_MODULE_8__["of"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.fields)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (field) { return !!field.StaticName; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (field) {
                return _this.contentTypesFieldsService.add(field, _this.contentType.Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null); }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["toArray"])()).subscribe(function (responses) {
                _this.saving$.next(false);
                _this.snackBar.open('Saved', null, { duration: 2000 });
                _this.closeDialog();
            });
        }
    };
    EditContentTypeFieldsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__["ContentTypesService"] },
        { type: _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_15__["ContentTypesFieldsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    EditContentTypeFieldsComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }],
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['ngForm', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"] },] }]
    };
    EditContentTypeFieldsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-content-type-fields',
            template: _raw_loader_edit_content_type_fields_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_edit_content_type_fields_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__["ContentTypesService"],
            _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_15__["ContentTypesFieldsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], EditContentTypeFieldsComponent);
    return EditContentTypeFieldsComponent;
}());



/***/ }),

/***/ "cpse":
/*!********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/content-type-fields.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LXR5cGUtZmllbGRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "dB19":
/*!**********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/content-type-fields-dialog.config.ts ***!
  \**********************************************************************************************/
/*! exports provided: contentTypeFieldsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentTypeFieldsDialog", function() { return contentTypeFieldsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var contentTypeFieldsDialog = {
    name: 'CONTENT_TYPE_FIELDS_DIALOG',
    initContext: true,
    panelSize: 'large',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ContentTypeFieldsComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./content-type-fields.component */ "Pjf9"))];
                    case 1:
                        ContentTypeFieldsComponent = (_a.sent()).ContentTypeFieldsComponent;
                        return [2 /*return*/, ContentTypeFieldsComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "gTA9":
/*!**********************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.helpers.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: DataType, calculateDataTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDataTypes", function() { return calculateDataTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-type-fields.helpers */ "8gzK");


// tslint:disable:max-line-length
var dataTypeLabels = {
    Boolean: { label: 'Boolean (yes/no)', description: 'Yes/no or true/false values' },
    Custom: { label: 'Custom - ui-tools or custom types', description: 'Use for things like gps-pickers (which writes into multiple fields) or for custom-data which serializes something exotic into the db like an array, a custom json or anything' },
    DateTime: { label: 'Date and/or time', description: 'For date, time or combined values' },
    Empty: { label: 'Empty - for form-titles etc.', description: 'Use to structure your form' },
    Entity: { label: 'Entity (other content-items)', description: 'One or more other content-items' },
    Hyperlink: { label: 'Link / file reference', description: 'Hyperlink or reference to a picture / file' },
    Number: { label: 'Number', description: 'Any kind of number' },
    String: { label: 'Text / string', description: 'Any kind of text' },
};
// tslint:enable:max-line-length
var DataType = /** @class */ (function () {
    function DataType() {
    }
    return DataType;
}());

function calculateDataTypes(rawDataTypes) {
    var e_1, _a;
    var dataTypes = [];
    try {
        for (var rawDataTypes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(rawDataTypes), rawDataTypes_1_1 = rawDataTypes_1.next(); !rawDataTypes_1_1.done; rawDataTypes_1_1 = rawDataTypes_1.next()) {
            var rawDataType = rawDataTypes_1_1.value;
            dataTypes.push({
                name: rawDataType,
                label: dataTypeLabels[rawDataType].label,
                icon: Object(_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__["calculateTypeIcon"])(rawDataType),
                description: dataTypeLabels[rawDataType].description,
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (rawDataTypes_1_1 && !rawDataTypes_1_1.done && (_a = rawDataTypes_1.return)) _a.call(rawDataTypes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return dataTypes;
}


/***/ }),

/***/ "iqPA":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div matRipple class=\"input-component highlight\">\r\n  <div class=\"text\">{{ value }}</div>\r\n  <div class=\"like-button\">\r\n    <mat-icon>arrow_drop_down</mat-icon>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "kUNG":
/*!***********************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-title/content-type-fields-title.component.scss ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LXR5cGUtZmllbGRzLXRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "kejv":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/content-type-fields.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ContentTypeFieldsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsModule", function() { return ContentTypeFieldsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/angular */ "gwh1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-actions/content-type-fields-actions.component */ "sp8M");
/* harmony import */ var _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component */ "X0IS");
/* harmony import */ var _ag_grid_components_content_type_fields_special_content_type_fields_special_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-special/content-type-fields-special.component */ "DLvq");
/* harmony import */ var _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-title/content-type-fields-title.component */ "PMR9");
/* harmony import */ var _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-type/content-type-fields-type.component */ "zxI0");
/* harmony import */ var _content_type_fields_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./content-type-fields-routing.module */ "0C7+");
/* harmony import */ var _content_type_fields_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./content-type-fields.component */ "Pjf9");
/* harmony import */ var _edit_content_type_fields_edit_content_type_fields_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit-content-type-fields/edit-content-type-fields.component */ "XAsQ");
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/content-types-fields.service */ "spPA");



























var ContentTypeFieldsModule = /** @class */ (function () {
    function ContentTypeFieldsModule() {
    }
    ContentTypeFieldsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _content_type_fields_component__WEBPACK_IMPORTED_MODULE_24__["ContentTypeFieldsComponent"],
                _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_21__["ContentTypeFieldsTitleComponent"],
                _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_19__["ContentTypeFieldsInputTypeComponent"],
                _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_18__["ContentTypeFieldsActionsComponent"],
                _edit_content_type_fields_edit_content_type_fields_component__WEBPACK_IMPORTED_MODULE_25__["EditContentTypeFieldsComponent"],
                _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_22__["ContentTypeFieldsTypeComponent"],
                _ag_grid_components_content_type_fields_special_content_type_fields_special_component__WEBPACK_IMPORTED_MODULE_20__["ContentTypeFieldsSpecialComponent"],
            ],
            entryComponents: [
                _content_type_fields_component__WEBPACK_IMPORTED_MODULE_24__["ContentTypeFieldsComponent"],
                _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_21__["ContentTypeFieldsTitleComponent"],
                _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_19__["ContentTypeFieldsInputTypeComponent"],
                _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_18__["ContentTypeFieldsActionsComponent"],
                _edit_content_type_fields_edit_content_type_fields_component__WEBPACK_IMPORTED_MODULE_25__["EditContentTypeFieldsComponent"],
                _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_22__["ContentTypeFieldsTypeComponent"],
                _ag_grid_components_content_type_fields_special_content_type_fields_special_component__WEBPACK_IMPORTED_MODULE_20__["ContentTypeFieldsSpecialComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _content_type_fields_routing_module__WEBPACK_IMPORTED_MODULE_23__["ContentTypeFieldsRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_17__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridModule"].withComponents([]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_16__["Context"],
                _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_15__["ContentTypesService"],
                _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_26__["ContentTypesFieldsService"],
            ]
        })
    ], ContentTypeFieldsModule);
    return ContentTypeFieldsModule;
}());



/***/ }),

/***/ "ko1b":
/*!****************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields-dialog.config.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: editContentTypeFieldsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editContentTypeFieldsDialog", function() { return editContentTypeFieldsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var editContentTypeFieldsDialog = {
    name: 'EDIT_CONTENT_TYPE_FIELDS_DIALOG',
    initContext: false,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var EditContentTypeFieldsComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./edit-content-type-fields.component */ "XAsQ"))];
                    case 1:
                        EditContentTypeFieldsComponent = (_a.sent()).EditContentTypeFieldsComponent;
                        return [2 /*return*/, EditContentTypeFieldsComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "rBrY":
/*!**************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.edit-input {\n  padding-bottom: 8px;\n  width: 30%;\n}\n\n.type-icon {\n  width: inherit;\n  height: inherit;\n  margin-right: 8px;\n  font-size: inherit;\n  vertical-align: top;\n  line-height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVkaXQtY29udGVudC10eXBlLWZpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJmaWxlIjoiZWRpdC1jb250ZW50LXR5cGUtZmllbGRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZWRpdC1pbnB1dCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4udHlwZS1pY29uIHtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "s6d/":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-type/content-type-fields-type.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\" [matTooltip]=\"value\">\r\n  <mat-icon>{{ icon }}</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "sp8M":
/*!*************************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-actions/content-type-fields-actions.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ContentTypeFieldsActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsActionsComponent", function() { return ContentTypeFieldsActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_type_fields_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields-actions.component.html */ "u1yF");
/* harmony import */ var _content_type_fields_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields-actions.component.scss */ "x52D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/data-type.constants */ "bv8H");
/* harmony import */ var _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/input-type.constants */ "3btq");






var ContentTypeFieldsActionsComponent = /** @class */ (function () {
    function ContentTypeFieldsActionsComponent() {
    }
    ContentTypeFieldsActionsComponent.prototype.agInit = function (params) {
        this.params = params;
        this.field = this.params.data;
        this.enablePermissions = this.field.InputType === _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_5__["InputTypeConstants"].StringWysiwyg || this.field.Type === _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_4__["DataTypeConstants"].Hyperlink;
    };
    ContentTypeFieldsActionsComponent.prototype.refresh = function (params) {
        return true;
    };
    ContentTypeFieldsActionsComponent.prototype.rename = function () {
        this.params.onRename(this.field);
    };
    ContentTypeFieldsActionsComponent.prototype.openPermissions = function () {
        this.params.onOpenPermissions(this.field);
    };
    ContentTypeFieldsActionsComponent.prototype.deleteField = function () {
        this.params.onDelete(this.field);
    };
    ContentTypeFieldsActionsComponent.ctorParameters = function () { return []; };
    ContentTypeFieldsActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-type-fields-actions',
            template: _raw_loader_content_type_fields_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_type_fields_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ContentTypeFieldsActionsComponent);
    return ContentTypeFieldsActionsComponent;
}());



/***/ }),

/***/ "u1yF":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-actions/content-type-fields-actions.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Permissions\" *ngIf=\"enablePermissions\"\r\n    (click)=\"openPermissions()\">\r\n    <mat-icon [matBadge]=\"field.Permissions.Count\" matBadgePosition=\"after\" matBadgeColor=\"accent\" matBadgeSize=\"small\"\r\n      *ngIf=\"field.Permissions.Count\">\r\n      person\r\n    </mat-icon>\r\n    <mat-icon *ngIf=\"!field.Permissions.Count\">person</mat-icon>\r\n  </div>\r\n  <div class=\"like-button disabled\" *ngIf=\"!enablePermissions\">\r\n    <mat-icon>person</mat-icon>\r\n  </div>\r\n\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"More\" [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_horiz</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\" class=\"grid-more-menu\">\r\n  <button mat-menu-item (click)=\"rename()\">\r\n    <mat-icon>text_fields</mat-icon>\r\n    <span>Rename</span>\r\n  </button>\r\n\r\n  <button mat-menu-item [disabled]=\"field.IsTitle\" (click)=\"deleteField()\">\r\n    <mat-icon>delete</mat-icon>\r\n    <span>Delete</span>\r\n  </button>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "wu7k":
/*!*********************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-type/content-type-fields-type.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LXR5cGUtZmllbGRzLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "x52D":
/*!***************************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-actions/content-type-fields-actions.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LXR5cGUtZmllbGRzLWFjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zY+U":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/content-type-fields/content-type-fields.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-component-wrapper\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>{{ (contentType$ | async)?.Name }} Fields</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <div class=\"grid-wrapper\">\r\n    <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"fields$ | async\" [modules]=\"modules\"\r\n      [gridOptions]=\"gridOptions\" (rowDragEnter)=\"onRowDragEnter($event)\" (rowDragEnd)=\"onRowDragEnd($event)\"\r\n      (rowDragMove)=\"onRowDragMove($event)\" (gridReady)=\"onGridReady($event)\" (sortChanged)=\"onSortChanged($event)\"\r\n      (filterChanged)=\"onFilterChanged($event)\">\r\n    </ag-grid-angular>\r\n\r\n    <div class=\"grid-more-actions-box\"></div>\r\n\r\n    <button mat-fab mat-elevation-z24 class=\"grid-fab\" matTooltip=\"Add fields\" (click)=\"add()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "zZXs":
/*!***************************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-special/content-type-fields-special.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LXR5cGUtZmllbGRzLXNwZWNpYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zxI0":
/*!*******************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/ag-grid-components/content-type-fields-type/content-type-fields-type.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ContentTypeFieldsTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsTypeComponent", function() { return ContentTypeFieldsTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_type_fields_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields-type.component.html */ "s6d/");
/* harmony import */ var _content_type_fields_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields-type.component.scss */ "wu7k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content-type-fields.helpers */ "8gzK");





var ContentTypeFieldsTypeComponent = /** @class */ (function () {
    function ContentTypeFieldsTypeComponent() {
    }
    ContentTypeFieldsTypeComponent.prototype.agInit = function (params) {
        this.value = params.value;
        this.icon = Object(_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_4__["calculateTypeIcon"])(this.value);
    };
    ContentTypeFieldsTypeComponent.prototype.refresh = function (params) {
        return true;
    };
    ContentTypeFieldsTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-type-fields-type',
            template: _raw_loader_content_type_fields_type_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_type_fields_type_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ContentTypeFieldsTypeComponent);
    return ContentTypeFieldsTypeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=content-type-fields-content-type-fields-module.js.map