(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-type-fields-content-type-fields-module"],{

/***/ "87pQ":
/*!****************************************************************************************************!*\
  !*** ./src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditContentTypeFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContentTypeFieldsComponent", function() { return EditContentTypeFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_edit_content_type_fields_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-content-type-fields.component.html */ "lUqP");
/* harmony import */ var _edit_content_type_fields_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-content-type-fields.component.scss */ "i0G6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app-administration/constants/field-name.patterns */ "ZHmz");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/data-type.constants */ "DGvA");
/* harmony import */ var _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/input-type.constants */ "nsG0");
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../content-type-fields.helpers */ "DOM6");
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/content-types-fields.service */ "/Foi");
/* harmony import */ var _edit_content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-content-type-fields.helpers */ "T075");

















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
    EditContentTypeFieldsComponent.prototype.resetInputType = function (index) {
        this.fields[index].InputType = this.fields[index].Type.toLowerCase() + _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_13__["InputTypeConstants"].DefaultSuffix;
    };
    EditContentTypeFieldsComponent.prototype.calculateInputTypeOptions = function (index) {
        var _this = this;
        this.filteredInputTypeOptions[index] = this.inputTypeOptions
            .filter(function (option) { return option.dataType === _this.fields[index].Type.toLowerCase(); });
    };
    EditContentTypeFieldsComponent.prototype.calculateHints = function (index) {
        var _this = this;
        var selectedDataType = this.dataTypes.find(function (dataType) { return dataType.name === _this.fields[index].Type; });
        var selectedInputType = this.inputTypeOptions.find(function (inputTypeOption) { return inputTypeOption.inputType === _this.fields[index].InputType; });
        this.dataTypeHints[index] = selectedDataType ? selectedDataType.description : '';
        this.inputTypeHints[index] = selectedInputType ? selectedInputType.description : '';
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

/***/ "AUYT":
/*!************************************************************************!*\
  !*** ./src/app/content-type-fields/content-type-fields.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvY29udGVudC10eXBlLWZpZWxkcy9jb250ZW50LXR5cGUtZmllbGRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "DLmE":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-type-fields/ag-grid-components/content-type-fields-type/content-type-fields-type.component.html ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\" [matTooltip]=\"value\">\r\n  <mat-icon>{{ icon }}</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "DOM6":
/*!********************************************************************!*\
  !*** ./src/app/content-type-fields/content-type-fields.helpers.ts ***!
  \********************************************************************/
/*! exports provided: calculateTypeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTypeIcon", function() { return calculateTypeIcon; });
/* harmony import */ var _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/data-type.constants */ "DGvA");

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

/***/ "EziQ":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/content-type-fields/ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvY29udGVudC10eXBlLWZpZWxkcy9hZy1ncmlkLWNvbXBvbmVudHMvY29udGVudC10eXBlLWZpZWxkcy1pbnB1dC10eXBlL2NvbnRlbnQtdHlwZS1maWVsZHMtaW5wdXQtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "FL1d":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/content-type-fields/ag-grid-components/content-type-fields-actions/content-type-fields-actions.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvY29udGVudC10eXBlLWZpZWxkcy9hZy1ncmlkLWNvbXBvbmVudHMvY29udGVudC10eXBlLWZpZWxkcy1hY3Rpb25zL2NvbnRlbnQtdHlwZS1maWVsZHMtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "FlHa":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/content-type-fields/ag-grid-components/content-type-fields-type/content-type-fields-type.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvY29udGVudC10eXBlLWZpZWxkcy9hZy1ncmlkLWNvbXBvbmVudHMvY29udGVudC10eXBlLWZpZWxkcy10eXBlL2NvbnRlbnQtdHlwZS1maWVsZHMtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "JAFw":
/*!***************************************************************************!*\
  !*** ./src/app/content-type-fields/content-type-fields-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ContentTypeFieldsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsRoutingModule", function() { return ContentTypeFieldsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "it7M");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "nXrb");
/* harmony import */ var _content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-type-fields-dialog.config */ "sQ6O");
/* harmony import */ var _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-content-type-fields/edit-content-type-fields-dialog.config */ "q8mh");







var routes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_5__["contentTypeFieldsDialog"] },
        children: [
            { path: 'add/:contentTypeStaticName', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_6__["editContentTypeFieldsDialog"] } },
            { path: 'update/:contentTypeStaticName/:id', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _edit_content_type_fields_edit_content_type_fields_dialog_config__WEBPACK_IMPORTED_MODULE_6__["editContentTypeFieldsDialog"] } },
            {
                path: 'permissions/:type/:keyType/:key',
                loadChildren: function () { return Promise.all(/*! import() | permissions-permissions-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("common"), __webpack_require__.e("permissions-permissions-module")]).then(__webpack_require__.bind(null, /*! ../permissions/permissions.module */ "jl54")).then(function (m) { return m.PermissionsModule; }); }
            },
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "B+J5")).then(function (m) { return m.EditModule; }); }
            },
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["refreshEdit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-refresh-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-refresh-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/refresh-edit.module */ "orgq")).then(function (m) { return m.RefreshEditModule; }); }
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

/***/ "JZQz":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/content-type-fields/ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ContentTypeFieldsInputTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsInputTypeComponent", function() { return ContentTypeFieldsInputTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_type_fields_input_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields-input-type.component.html */ "aeX6");
/* harmony import */ var _content_type_fields_input_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields-input-type.component.scss */ "EziQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




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

/***/ "LW5V":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/content-type-fields/ag-grid-components/content-type-fields-title/content-type-fields-title.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ContentTypeFieldsTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsTitleComponent", function() { return ContentTypeFieldsTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_type_fields_title_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields-title.component.html */ "uf6C");
/* harmony import */ var _content_type_fields_title_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields-title.component.scss */ "nSM0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var ContentTypeFieldsTitleComponent = /** @class */ (function () {
    function ContentTypeFieldsTitleComponent() {
    }
    ContentTypeFieldsTitleComponent.prototype.agInit = function (params) {
        var value = params.value;
        this.icon = value ? 'star' : 'star_border';
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

/***/ "SUD9":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-type-fields/ag-grid-components/content-type-fields-actions/content-type-fields-actions.component.html ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Rename\" (click)=\"rename()\">\r\n    <mat-icon>settings</mat-icon>\r\n  </div>\r\n\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Permissions\" *ngIf=\"enablePermissions\"\r\n    (click)=\"openPermissions()\">\r\n    <mat-icon [matBadge]=\"field.Permissions.Count\" matBadgePosition=\"after\" matBadgeColor=\"accent\" matBadgeSize=\"small\"\r\n      *ngIf=\"field.Permissions.Count\">\r\n      person\r\n    </mat-icon>\r\n    <mat-icon *ngIf=\"!field.Permissions.Count\">person</mat-icon>\r\n  </div>\r\n  <div class=\"like-button disabled\" *ngIf=\"!enablePermissions\">\r\n    <mat-icon>person</mat-icon>\r\n  </div>\r\n\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"More\" [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_horiz</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\" class=\"grid-more-menu\">\r\n  <button mat-menu-item [disabled]=\"field.IsTitle\" (click)=\"deleteField()\">\r\n    <mat-icon>delete</mat-icon>\r\n    <span>Delete</span>\r\n  </button>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "T075":
/*!**************************************************************************************************!*\
  !*** ./src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.helpers.ts ***!
  \**************************************************************************************************/
/*! exports provided: DataType, calculateDataTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDataTypes", function() { return calculateDataTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-type-fields.helpers */ "DOM6");


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

/***/ "ZHmz":
/*!*********************************************************************!*\
  !*** ./src/app/app-administration/constants/field-name.patterns.ts ***!
  \*********************************************************************/
/*! exports provided: fieldNamePattern, fieldNameError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldNamePattern", function() { return fieldNamePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldNameError", function() { return fieldNameError; });
var fieldNamePattern = /^[A-Za-z][A-Za-z0-9-]+$/;
var fieldNameError = 'Standard letters, numbers and hyphens are allowed. Must start with a letter.';


/***/ }),

/***/ "aeX6":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-type-fields/ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component.html ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div matRipple class=\"input-component highlight\">\r\n  <div class=\"text\">{{ value }}</div>\r\n  <div class=\"like-button\">\r\n    <mat-icon>arrow_drop_down</mat-icon>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "d78f":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/content-type-fields/ag-grid-components/content-type-fields-type/content-type-fields-type.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ContentTypeFieldsTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsTypeComponent", function() { return ContentTypeFieldsTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_type_fields_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields-type.component.html */ "DLmE");
/* harmony import */ var _content_type_fields_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields-type.component.scss */ "FlHa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _content_type_fields_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content-type-fields.helpers */ "DOM6");





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



/***/ }),

/***/ "f9xf":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/content-type-fields/ag-grid-components/content-type-fields-actions/content-type-fields-actions.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ContentTypeFieldsActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsActionsComponent", function() { return ContentTypeFieldsActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_type_fields_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields-actions.component.html */ "SUD9");
/* harmony import */ var _content_type_fields_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields-actions.component.scss */ "FL1d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _constants_data_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/data-type.constants */ "DGvA");
/* harmony import */ var _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/input-type.constants */ "nsG0");






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

/***/ "i0G6":
/*!******************************************************************************************************!*\
  !*** ./src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.edit-input {\n  padding-bottom: 8px;\n  width: 30%;\n}\n\n.type-icon {\n  width: inherit;\n  height: inherit;\n  margin-right: 8px;\n  font-size: inherit;\n  vertical-align: top;\n  line-height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LXR5cGUtZmllbGRzL2VkaXQtY29udGVudC10eXBlLWZpZWxkcy9lZGl0LWNvbnRlbnQtdHlwZS1maWVsZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LXR5cGUtZmllbGRzL2VkaXQtY29udGVudC10eXBlLWZpZWxkcy9lZGl0LWNvbnRlbnQtdHlwZS1maWVsZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5lZGl0LWlucHV0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi50eXBlLWljb24ge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "lUqP":
/*!***********************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\" [ngSwitch]=\"editMode\">\r\n    <ng-container *ngSwitchCase=\"undefined\">Fields</ng-container>\r\n    <ng-container *ngSwitchCase=\"true\">Edit Field</ng-container>\r\n    <ng-container *ngSwitchCase=\"false\">Add Fields</ng-container>\r\n  </div>\r\n</div>\r\n\r\n<form #ngForm=\"ngForm\" class=\"dialog-form\" *ngIf=\"(loading$ | async) === false\" (ngSubmit)=\"save()\">\r\n  <div class=\"dialog-form-content fancy-scrollbar-light\">\r\n    <div class=\"row-container\" *ngFor=\"let field of fields; index as i\">\r\n      <div class=\"edit-input\">\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Name</mat-label>\r\n          <input matInput [pattern]=\"fieldNamePattern\" [(ngModel)]=\"field.StaticName\" [name]=\"'StaticName' + i\"\r\n            [disabled]=\"editMode\" #staticName=\"ngModel\">\r\n        </mat-form-field>\r\n        <ng-container *ngIf=\"staticName.touched && staticName.errors\">\r\n          <app-field-hint *ngIf=\"staticName.errors.pattern\" [isError]=\"true\">{{ fieldNameError }}</app-field-hint>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <div class=\"edit-input\">\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Data Type</mat-label>\r\n          <mat-select (selectionChange)=\"resetInputType(i); calculateInputTypeOptions(i); calculateHints(i)\"\r\n            [(ngModel)]=\"field.Type\" [name]=\"'Type' + i\" [disabled]=\"editMode\">\r\n            <mat-select-trigger>\r\n              <mat-icon class=\"type-icon\">{{ findIcon(field.Type) }}</mat-icon>\r\n              <span>{{ field.Type }}</span>\r\n            </mat-select-trigger>\r\n            <mat-option *ngFor=\"let dataType of dataTypes\" [value]=\"dataType.name\">\r\n              <mat-icon>{{ dataType.icon }}</mat-icon>\r\n              <span>{{ dataType.label }}</span>\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <app-field-hint>{{ dataTypeHints[i] }}</app-field-hint>\r\n      </div>\r\n\r\n      <div class=\"edit-input\">\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Input Type</mat-label>\r\n          <mat-select (selectionChange)=\"calculateHints(i)\" [(ngModel)]=\"field.InputType\" [name]=\"'InputType' + i\">\r\n            <mat-option *ngFor=\"let option of filteredInputTypeOptions[i]\" [value]=\"option.inputType\">\r\n              {{ option.label }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <app-field-hint>{{ inputTypeHints[i] }}</app-field-hint>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-form-actions\">\r\n    <button mat-raised-button type=\"button\" (click)=\"closeDialog()\">Cancel</button>\r\n    <button mat-raised-button type=\"submit\" color=\"accent\" [disabled]=\"!ngForm.form.valid || (saving$ | async)\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "nSM0":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/content-type-fields/ag-grid-components/content-type-fields-title/content-type-fields-title.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvY29udGVudC10eXBlLWZpZWxkcy9hZy1ncmlkLWNvbXBvbmVudHMvY29udGVudC10eXBlLWZpZWxkcy10aXRsZS9jb250ZW50LXR5cGUtZmllbGRzLXRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "q8mh":
/*!********************************************************************************************************!*\
  !*** ./src/app/content-type-fields/edit-content-type-fields/edit-content-type-fields-dialog.config.ts ***!
  \********************************************************************************************************/
/*! exports provided: editContentTypeFieldsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editContentTypeFieldsDialog", function() { return editContentTypeFieldsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

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
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./edit-content-type-fields.component */ "87pQ"))];
                    case 1:
                        EditContentTypeFieldsComponent = (_a.sent()).EditContentTypeFieldsComponent;
                        return [2 /*return*/, EditContentTypeFieldsComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "rCSw":
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-type-fields/content-type-fields.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-component-wrapper\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>{{ (contentType$ | async)?.Name }} Fields</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <div class=\"grid-wrapper\">\r\n    <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"fields$ | async\" [modules]=\"modules\"\r\n      [gridOptions]=\"gridOptions\" (rowDragEnter)=\"onRowDragEnter($event)\" (rowDragEnd)=\"onRowDragEnd($event)\"\r\n      (rowDragMove)=\"onRowDragMove($event)\" (gridReady)=\"onGridReady($event)\" (sortChanged)=\"onSortChanged($event)\"\r\n      (filterChanged)=\"onFilterChanged($event)\">\r\n    </ag-grid-angular>\r\n\r\n    <button mat-fab mat-elevation-z24 class=\"grid-fab\" matTooltip=\"Add fields\" (click)=\"add()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "sQ6O":
/*!**************************************************************************!*\
  !*** ./src/app/content-type-fields/content-type-fields-dialog.config.ts ***!
  \**************************************************************************/
/*! exports provided: contentTypeFieldsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentTypeFieldsDialog", function() { return contentTypeFieldsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

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
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./content-type-fields.component */ "u8xq"))];
                    case 1:
                        ContentTypeFieldsComponent = (_a.sent()).ContentTypeFieldsComponent;
                        return [2 /*return*/, ContentTypeFieldsComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "tjG3":
/*!*******************************************************************!*\
  !*** ./src/app/content-type-fields/content-type-fields.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContentTypeFieldsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsModule", function() { return ContentTypeFieldsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/angular */ "W6oE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "f3iV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-actions/content-type-fields-actions.component */ "f9xf");
/* harmony import */ var _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component */ "JZQz");
/* harmony import */ var _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-title/content-type-fields-title.component */ "LW5V");
/* harmony import */ var _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-type/content-type-fields-type.component */ "d78f");
/* harmony import */ var _content_type_fields_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./content-type-fields-routing.module */ "JAFw");
/* harmony import */ var _content_type_fields_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./content-type-fields.component */ "u8xq");
/* harmony import */ var _edit_content_type_fields_edit_content_type_fields_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-content-type-fields/edit-content-type-fields.component */ "87pQ");
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/content-types-fields.service */ "/Foi");


























var ContentTypeFieldsModule = /** @class */ (function () {
    function ContentTypeFieldsModule() {
    }
    ContentTypeFieldsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _content_type_fields_component__WEBPACK_IMPORTED_MODULE_23__["ContentTypeFieldsComponent"],
                _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_20__["ContentTypeFieldsTitleComponent"],
                _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_19__["ContentTypeFieldsInputTypeComponent"],
                _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_18__["ContentTypeFieldsActionsComponent"],
                _edit_content_type_fields_edit_content_type_fields_component__WEBPACK_IMPORTED_MODULE_24__["EditContentTypeFieldsComponent"],
                _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_21__["ContentTypeFieldsTypeComponent"],
            ],
            entryComponents: [
                _content_type_fields_component__WEBPACK_IMPORTED_MODULE_23__["ContentTypeFieldsComponent"],
                _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_20__["ContentTypeFieldsTitleComponent"],
                _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_19__["ContentTypeFieldsInputTypeComponent"],
                _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_18__["ContentTypeFieldsActionsComponent"],
                _edit_content_type_fields_edit_content_type_fields_component__WEBPACK_IMPORTED_MODULE_24__["EditContentTypeFieldsComponent"],
                _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_21__["ContentTypeFieldsTypeComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _content_type_fields_routing_module__WEBPACK_IMPORTED_MODULE_22__["ContentTypeFieldsRoutingModule"],
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
                _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_25__["ContentTypesFieldsService"],
            ]
        })
    ], ContentTypeFieldsModule);
    return ContentTypeFieldsModule;
}());



/***/ }),

/***/ "u8xq":
/*!**********************************************************************!*\
  !*** ./src/app/content-type-fields/content-type-fields.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContentTypeFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeFieldsComponent", function() { return ContentTypeFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_type_fields_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-type-fields.component.html */ "rCSw");
/* harmony import */ var _content_type_fields_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type-fields.component.scss */ "AUYT");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "KLQV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _app_administration_constants_field_name_patterns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-administration/constants/field-name.patterns */ "ZHmz");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ "QjRa");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ "uuTa");
/* harmony import */ var _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-actions/content-type-fields-actions.component */ "f9xf");
/* harmony import */ var _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-input-type/content-type-fields-input-type.component */ "JZQz");
/* harmony import */ var _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-title/content-type-fields-title.component */ "LW5V");
/* harmony import */ var _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ag-grid-components/content-type-fields-type/content-type-fields-type.component */ "d78f");
/* harmony import */ var _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./constants/input-type.constants */ "nsG0");
/* harmony import */ var _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/content-types-fields.service */ "/Foi");



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
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_12__["defaultGridOptions"]), { getRowClass: function (params) {
                var field = params.data;
                return field.InputType === _constants_input_type_constants__WEBPACK_IMPORTED_MODULE_19__["InputTypeConstants"].EmptyDefault ? 'group-row' : '';
            }, frameworkComponents: {
                contentTypeFieldsTitleComponent: _ag_grid_components_content_type_fields_title_content_type_fields_title_component__WEBPACK_IMPORTED_MODULE_17__["ContentTypeFieldsTitleComponent"],
                contentTypeFieldsTypeComponent: _ag_grid_components_content_type_fields_type_content_type_fields_type_component__WEBPACK_IMPORTED_MODULE_18__["ContentTypeFieldsTypeComponent"],
                contentTypeFieldsInputTypeComponent: _ag_grid_components_content_type_fields_input_type_content_type_fields_input_type_component__WEBPACK_IMPORTED_MODULE_16__["ContentTypeFieldsInputTypeComponent"],
                contentTypeFieldsActionsComponent: _ag_grid_components_content_type_fields_actions_content_type_fields_actions_component__WEBPACK_IMPORTED_MODULE_15__["ContentTypeFieldsActionsComponent"],
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
                    headerName: 'Notes', field: 'Metadata.All.Notes', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    width: 120, cellClass: 'secondary-action no-padding', cellRenderer: 'contentTypeFieldsActionsComponent', pinned: 'right',
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
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    ContentTypeFieldsComponent.prototype.createItemDefinition = function (field, metadataType) {
        return field.Metadata[metadataType] != null
            ? { EntityId: field.Metadata[metadataType].Id } // if defined, return the entity-number to edit
            : {
                ContentTypeName: '@' + metadataType,
                For: {
                    Target: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].metadata.attribute.target,
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
        this.router.navigate(["permissions/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].metadata.attribute.type + "/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].keyTypes.number + "/" + field.Id], { relativeTo: this.route });
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
        { type: _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_20__["ContentTypesFieldsService"] },
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
            _services_content_types_fields_service__WEBPACK_IMPORTED_MODULE_20__["ContentTypesFieldsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ContentTypeFieldsComponent);
    return ContentTypeFieldsComponent;
}());



/***/ }),

/***/ "uf6C":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-type-fields/ag-grid-components/content-type-fields-title/content-type-fields-title.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Use as title field\">\r\n    <mat-icon>{{ icon }}</mat-icon>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=content-type-fields-content-type-fields-module.js.map