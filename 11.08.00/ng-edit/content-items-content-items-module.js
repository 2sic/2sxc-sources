(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-items-content-items-module"],{

/***/ "/Foi":
/*!******************************************************************************!*\
  !*** ./src/app/content-type-fields/services/content-types-fields.service.ts ***!
  \******************************************************************************/
/*! exports provided: webApiFieldsRoot, webApiFieldsAll, ContentTypesFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiFieldsRoot", function() { return webApiFieldsRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiFieldsAll", function() { return webApiFieldsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesFieldsService", function() { return ContentTypesFieldsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");







var webApiFieldsRoot = 'admin/field/';
var webApiFieldsAll = webApiFieldsRoot + 'all';
var ContentTypesFieldsService = /** @class */ (function () {
    function ContentTypesFieldsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentTypesFieldsService.prototype.apiUrl = function (name) {
        return this.dnnContext.$2sxc.http.apiUrl(name);
    };
    ContentTypesFieldsService.prototype.typeListRetrieve = function () {
        return this.http.get(this.apiUrl(webApiFieldsRoot + 'DataTypes'), {
            params: { appid: this.context.appId.toString() }
        });
    };
    ContentTypesFieldsService.prototype.getInputTypesList = function () {
        return this.http
            .get(this.apiUrl(webApiFieldsRoot + 'InputTypes'), { params: { appid: this.context.appId.toString() } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (inputConfigs) {
            var inputTypeOptions = inputConfigs.map(function (config) {
                var option = {
                    dataType: config.Type.substring(0, config.Type.indexOf('-')),
                    inputType: config.Type,
                    label: config.Label,
                    description: config.Description,
                };
                return option;
            });
            return inputTypeOptions;
        }));
    };
    ContentTypesFieldsService.prototype.getFields = function (contentType) {
        return this.http
            .get(this.apiUrl(webApiFieldsAll), {
            params: { appid: this.context.appId.toString(), staticName: contentType.StaticName },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) {
            var e_1, _a;
            if (fields) {
                try {
                    for (var fields_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                        var fld = fields_1_1.value;
                        if (!fld.Metadata) {
                            continue;
                        }
                        var md = fld.Metadata;
                        var allMd = md.All;
                        var typeMd = md[fld.Type];
                        var inputMd = md[fld.InputType];
                        md.merged = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, allMd), typeMd), inputMd);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return fields;
        }));
    };
    ContentTypesFieldsService.prototype.reOrder = function (idArray, contentType) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'Sort'), null, {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                order: JSON.stringify(idArray),
            },
        });
    };
    ContentTypesFieldsService.prototype.setTitle = function (item, contentType) {
        return this.http.post(this.apiUrl(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_5__["webApiTypeRoot"] + 'SetTitle'), null, {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                attributeId: item.Id.toString(),
            },
        });
    };
    ContentTypesFieldsService.prototype.rename = function (item, contentType, newName) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'Rename'), null, {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                attributeId: item.Id.toString(),
                newName: newName,
            },
        });
    };
    ContentTypesFieldsService.prototype.delete = function (item, contentType) {
        if (item.IsTitle) {
            throw new Error('Can\'t delete Title');
        }
        return this.http.delete(this.apiUrl(webApiFieldsRoot + 'Delete'), {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                attributeId: item.Id.toString(),
            },
        });
    };
    ContentTypesFieldsService.prototype.add = function (newField, contentTypeId) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'Add'), null, {
            params: {
                AppId: this.context.appId.toString(),
                ContentTypeId: contentTypeId.toString(),
                Id: newField.Id.toString(),
                Type: newField.Type,
                InputType: newField.InputType,
                StaticName: newField.StaticName,
                IsTitle: newField.IsTitle.toString(),
                Index: newField.SortOrder.toString(),
            }
        });
    };
    ContentTypesFieldsService.prototype.updateInputType = function (id, staticName, inputType) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'InputType'), null, {
            params: { appId: this.context.appId.toString(), attributeId: id.toString(), field: staticName, inputType: inputType }
        });
    };
    ContentTypesFieldsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_6__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentTypesFieldsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_6__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentTypesFieldsService);
    return ContentTypesFieldsService;
}());



/***/ }),

/***/ "0UxJ":
/*!***********************************************************************************************!*\
  !*** ./src/app/content-items/ag-grid-components/pub-meta-filter/pub-meta-filter.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PubMetaFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubMetaFilterComponent", function() { return PubMetaFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_pub_meta_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pub-meta-filter.component.html */ "J2U/");
/* harmony import */ var _pub_meta_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pub-meta-filter.component.scss */ "W5zH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var PubMetaFilterComponent = /** @class */ (function () {
    function PubMetaFilterComponent() {
        this.published = '';
        this.metadata = '';
    }
    PubMetaFilterComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    PubMetaFilterComponent.prototype.isFilterActive = function () {
        return this.published !== '' || this.metadata !== '';
    };
    PubMetaFilterComponent.prototype.doesFilterPass = function (params) {
        var publishedPassed = false;
        var metadataPassed = false;
        var value = this.params.valueGetter(params.node);
        if (this.published !== '') {
            if (value.published === null || value.published === undefined) {
                publishedPassed = false;
            }
            else {
                publishedPassed = value.published.toString() === this.published;
            }
        }
        else {
            publishedPassed = true;
        }
        if (this.metadata !== '') {
            if (value.metadata === null || value.metadata === undefined) {
                metadataPassed = false;
            }
            else {
                metadataPassed = value.metadata.toString() === this.metadata;
            }
        }
        else {
            metadataPassed = true;
        }
        return publishedPassed && metadataPassed;
    };
    PubMetaFilterComponent.prototype.getModel = function () {
        if (!this.isFilterActive()) {
            return;
        }
        return {
            filterType: 'pub-meta',
            published: this.published,
            metadata: this.metadata,
        };
    };
    PubMetaFilterComponent.prototype.setModel = function (model) {
        this.published = model ? model.published : '';
        this.metadata = model ? model.metadata : '';
    };
    PubMetaFilterComponent.prototype.afterGuiAttached = function (params) {
    };
    PubMetaFilterComponent.prototype.filterChanged = function () {
        this.params.filterChangedCallback();
    };
    PubMetaFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-pub-meta-filter',
            template: _raw_loader_pub_meta_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_pub_meta_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], PubMetaFilterComponent);
    return PubMetaFilterComponent;
}());



/***/ }),

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

/***/ "1y2D":
/*!***********************************************************************************************************!*\
  !*** ./src/app/content-items/ag-grid-components/content-items-status/content-items-status.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".meta-icon {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWl0ZW1zL2FnLWdyaWQtY29tcG9uZW50cy9jb250ZW50LWl0ZW1zLXN0YXR1cy9jb250ZW50LWl0ZW1zLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2NvbnRlbnQtaXRlbXMvYWctZ3JpZC1jb21wb25lbnRzL2NvbnRlbnQtaXRlbXMtc3RhdHVzL2NvbnRlbnQtaXRlbXMtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1ldGEtaWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "4+gj":
/*!***********************************************************************************************************!*\
  !*** ./src/app/content-items/ag-grid-components/content-items-entity/content-items-entity.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".more-entities {\n  padding: 0px 8px;\n  border-radius: 10px;\n  border: 1px solid rgba(29, 39, 61, 0.44);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWl0ZW1zL2FnLWdyaWQtY29tcG9uZW50cy9jb250ZW50LWl0ZW1zLWVudGl0eS9jb250ZW50LWl0ZW1zLWVudGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWl0ZW1zL2FnLWdyaWQtY29tcG9uZW50cy9jb250ZW50LWl0ZW1zLWVudGl0eS9jb250ZW50LWl0ZW1zLWVudGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3JlLWVudGl0aWVzIHtcclxuICBwYWRkaW5nOiAwcHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyOSwgMzksIDYxLCAwLjQ0KTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "A5w4":
/*!***************************************************************!*\
  !*** ./src/app/content-items/content-items-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ContentItemsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemsRoutingModule", function() { return ContentItemsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "it7M");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "nXrb");
/* harmony import */ var _content_item_import_content_item_import_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-item-import/content-item-import-dialog.config */ "wIMF");
/* harmony import */ var _content_items_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-items-dialog.config */ "HL+k");







var routes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _content_items_dialog_config__WEBPACK_IMPORTED_MODULE_6__["contentItemsDialog"] },
        children: [
            {
                path: 'export/:contentTypeStaticName',
                loadChildren: function () { return Promise.all(/*! import() | content-export-content-export-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("common"), __webpack_require__.e("content-export-content-export-module")]).then(__webpack_require__.bind(null, /*! ../content-export/content-export.module */ "+hKU")).then(function (m) { return m.ContentExportModule; }); }
            },
            {
                path: 'export/:contentTypeStaticName/:selectedIds',
                loadChildren: function () { return Promise.all(/*! import() | content-export-content-export-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("common"), __webpack_require__.e("content-export-content-export-module")]).then(__webpack_require__.bind(null, /*! ../content-export/content-export.module */ "+hKU")).then(function (m) { return m.ContentExportModule; }); }
            },
            { path: 'import', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _content_item_import_content_item_import_dialog_config__WEBPACK_IMPORTED_MODULE_5__["contentItemImportDialog"] } },
            {
                path: 'restapi/:contentTypeStaticName/:itemId',
                loadChildren: function () { return Promise.all(/*! import() | dev-rest-dev-rest-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("dev-rest-dev-rest-module")]).then(__webpack_require__.bind(null, /*! ../dev-rest/dev-rest.module */ "uDA9")).then(function (m) { return m.DevRestModule; }); }
            },
            {
                path: ':contentTypeStaticName/import',
                loadChildren: function () { return Promise.all(/*! import() | content-import-content-import-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("common"), __webpack_require__.e("content-import-content-import-module")]).then(__webpack_require__.bind(null, /*! ../content-import/content-import.module */ "W/vD")).then(function (m) { return m.ContentImportModule; }); },
                data: { title: 'Import Items' },
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
    },
];
var ContentItemsRoutingModule = /** @class */ (function () {
    function ContentItemsRoutingModule() {
    }
    ContentItemsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContentItemsRoutingModule);
    return ContentItemsRoutingModule;
}());



/***/ }),

/***/ "BDZ4":
/*!*********************************************************************************************************!*\
  !*** ./src/app/content-items/ag-grid-components/content-items-status/content-items-status.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ContentItemsStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemsStatusComponent", function() { return ContentItemsStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_items_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-items-status.component.html */ "IIoy");
/* harmony import */ var _content_items_status_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-items-status.component.scss */ "1y2D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var ContentItemsStatusComponent = /** @class */ (function () {
    function ContentItemsStatusComponent() {
    }
    ContentItemsStatusComponent.prototype.agInit = function (params) {
        // spm TODO: something about data.DraftEntity and data.PublishedEntity is missing. Search in eav-ui project
        this.value = params.value;
        var item = params.data;
        if (item.Metadata) {
            this.metadataTooltip = 'Metadata'
                + ("\nType: " + item.Metadata.TargetType)
                + (item.Metadata.KeyNumber ? "\nNumber: " + item.Metadata.KeyNumber : '')
                + (item.Metadata.KeyString ? "\nString: " + item.Metadata.KeyString : '')
                + (item.Metadata.KeyGuid ? "\nGuid: " + item.Metadata.KeyGuid : '');
        }
    };
    ContentItemsStatusComponent.prototype.refresh = function (params) {
        return true;
    };
    ContentItemsStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-items-status',
            template: _raw_loader_content_items_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_items_status_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ContentItemsStatusComponent);
    return ContentItemsStatusComponent;
}());



/***/ }),

/***/ "CTpJ":
/*!***********************************************************************************************************!*\
  !*** ./src/app/content-items/ag-grid-components/content-items-actions/content-items-actions.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ContentItemsActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemsActionsComponent", function() { return ContentItemsActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_items_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-items-actions.component.html */ "dpA2");
/* harmony import */ var _content_items_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-items-actions.component.scss */ "QRed");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var ContentItemsActionsComponent = /** @class */ (function () {
    function ContentItemsActionsComponent() {
    }
    ContentItemsActionsComponent.prototype.agInit = function (params) {
        this.params = params;
        this.item = params.data;
    };
    ContentItemsActionsComponent.prototype.refresh = function (params) {
        return true;
    };
    ContentItemsActionsComponent.prototype.clone = function () {
        this.params.onClone(this.item);
    };
    ContentItemsActionsComponent.prototype.export = function () {
        this.params.onExport(this.item);
    };
    ContentItemsActionsComponent.prototype.openRestApi = function () {
        this.params.onOpenRestApi(this.item);
    };
    ContentItemsActionsComponent.prototype.deleteItem = function () {
        this.params.onDelete(this.item);
    };
    ContentItemsActionsComponent.ctorParameters = function () { return []; };
    ContentItemsActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-items-actions',
            template: _raw_loader_content_items_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_items_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ContentItemsActionsComponent);
    return ContentItemsActionsComponent;
}());



/***/ }),

/***/ "DUJ2":
/*!*******************************************************!*\
  !*** ./src/app/content-items/content-items.module.ts ***!
  \*******************************************************/
/*! exports provided: ContentItemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemsModule", function() { return ContentItemsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/angular */ "W6oE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "F1o0");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "//S1");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../content-export/services/content-export.service */ "Bwh1");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _ag_grid_components_content_items_actions_content_items_actions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ag-grid-components/content-items-actions/content-items-actions.component */ "CTpJ");
/* harmony import */ var _ag_grid_components_content_items_entity_content_items_entity_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ag-grid-components/content-items-entity/content-items-entity.component */ "FOQX");
/* harmony import */ var _ag_grid_components_content_items_status_content_items_status_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ag-grid-components/content-items-status/content-items-status.component */ "BDZ4");
/* harmony import */ var _ag_grid_components_pub_meta_filter_pub_meta_filter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ag-grid-components/pub-meta-filter/pub-meta-filter.component */ "0UxJ");
/* harmony import */ var _content_item_import_content_item_import_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./content-item-import/content-item-import.component */ "K0pi");
/* harmony import */ var _content_items_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./content-items-routing.module */ "A5w4");
/* harmony import */ var _content_items_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./content-items.component */ "gur7");
/* harmony import */ var _services_content_items_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/content-items.service */ "55Ui");
/* harmony import */ var _services_entities_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/entities.service */ "GTfO");






























var ContentItemsModule = /** @class */ (function () {
    function ContentItemsModule() {
    }
    ContentItemsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _content_items_component__WEBPACK_IMPORTED_MODULE_27__["ContentItemsComponent"],
                _ag_grid_components_pub_meta_filter_pub_meta_filter_component__WEBPACK_IMPORTED_MODULE_24__["PubMetaFilterComponent"],
                _ag_grid_components_content_items_status_content_items_status_component__WEBPACK_IMPORTED_MODULE_23__["ContentItemsStatusComponent"],
                _ag_grid_components_content_items_actions_content_items_actions_component__WEBPACK_IMPORTED_MODULE_21__["ContentItemsActionsComponent"],
                _ag_grid_components_content_items_entity_content_items_entity_component__WEBPACK_IMPORTED_MODULE_22__["ContentItemsEntityComponent"],
                _content_item_import_content_item_import_component__WEBPACK_IMPORTED_MODULE_25__["ContentItemImportComponent"],
            ],
            entryComponents: [
                _content_items_component__WEBPACK_IMPORTED_MODULE_27__["ContentItemsComponent"],
                _ag_grid_components_pub_meta_filter_pub_meta_filter_component__WEBPACK_IMPORTED_MODULE_24__["PubMetaFilterComponent"],
                _ag_grid_components_content_items_status_content_items_status_component__WEBPACK_IMPORTED_MODULE_23__["ContentItemsStatusComponent"],
                _ag_grid_components_content_items_actions_content_items_actions_component__WEBPACK_IMPORTED_MODULE_21__["ContentItemsActionsComponent"],
                _ag_grid_components_content_items_entity_content_items_entity_component__WEBPACK_IMPORTED_MODULE_22__["ContentItemsEntityComponent"],
                _content_item_import_content_item_import_component__WEBPACK_IMPORTED_MODULE_25__["ContentItemImportComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _content_items_routing_module__WEBPACK_IMPORTED_MODULE_26__["ContentItemsRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_20__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridModule"].withComponents([]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_16__["EcoFabSpeedDialModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_19__["Context"],
                _services_content_items_service__WEBPACK_IMPORTED_MODULE_28__["ContentItemsService"],
                _services_entities_service__WEBPACK_IMPORTED_MODULE_29__["EntitiesService"],
                _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_18__["ContentExportService"],
                _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_17__["ContentTypesService"],
            ]
        })
    ], ContentItemsModule);
    return ContentItemsModule;
}());



/***/ }),

/***/ "FOQX":
/*!*********************************************************************************************************!*\
  !*** ./src/app/content-items/ag-grid-components/content-items-entity/content-items-entity.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ContentItemsEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemsEntityComponent", function() { return ContentItemsEntityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_items_entity_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-items-entity.component.html */ "xRcv");
/* harmony import */ var _content_items_entity_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-items-entity.component.scss */ "4+gj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var ContentItemsEntityComponent = /** @class */ (function () {
    function ContentItemsEntityComponent() {
    }
    ContentItemsEntityComponent.prototype.agInit = function (params) {
        if (!Array.isArray(params.value)) {
            return;
        }
        this.encodedValue = this.htmlEncode(params.value.join(', '));
        if (params.colDef.allowMultiValue) {
            this.entities = params.value.length;
        }
    };
    ContentItemsEntityComponent.prototype.refresh = function (params) {
        return true;
    };
    // htmlencode strings (source: https://stackoverflow.com/a/7124052)
    ContentItemsEntityComponent.prototype.htmlEncode = function (text) {
        return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };
    ContentItemsEntityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-items-entity',
            template: _raw_loader_content_items_entity_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_items_entity_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ContentItemsEntityComponent);
    return ContentItemsEntityComponent;
}());



/***/ }),

/***/ "HL+k":
/*!**************************************************************!*\
  !*** ./src/app/content-items/content-items-dialog.config.ts ***!
  \**************************************************************/
/*! exports provided: contentItemsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentItemsDialog", function() { return contentItemsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var contentItemsDialog = {
    name: 'CONTENT_ITEMS_DIALOG',
    initContext: true,
    panelSize: 'large',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ContentItemsComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./content-items.component */ "gur7"))];
                    case 1:
                        ContentItemsComponent = (_a.sent()).ContentItemsComponent;
                        return [2 /*return*/, ContentItemsComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "IIoy":
/*!****************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-items/ag-grid-components/content-items-status/content-items-status.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\">\r\n  <mat-icon *ngIf=\"value.published\" matTooltip=\"Published\">visibility</mat-icon>\r\n  <mat-icon *ngIf=\"!value.published\" matTooltip=\"Not published\">visibility_off</mat-icon>\r\n  <mat-icon class=\"meta-icon\" *ngIf=\"value.metadata\" [matTooltip]=\"metadataTooltip\">local_offer</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "J2U/":
/*!******************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-items/ag-grid-components/pub-meta-filter/pub-meta-filter.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">Published</div>\r\n<mat-radio-group [(ngModel)]=\"published\" (ngModelChange)=\"filterChanged()\">\r\n  <mat-radio-button value=\"\">All</mat-radio-button>\r\n  <mat-radio-button value=\"true\">Published</mat-radio-button>\r\n  <mat-radio-button value=\"false\">Not published</mat-radio-button>\r\n</mat-radio-group>\r\n\r\n<div class=\"title\">Metadata</div>\r\n<mat-radio-group [(ngModel)]=\"metadata\" (ngModelChange)=\"filterChanged()\">\r\n  <mat-radio-button value=\"\">All</mat-radio-button>\r\n  <mat-radio-button value=\"true\">Is metadata</mat-radio-button>\r\n  <mat-radio-button value=\"false\">Is not metadata</mat-radio-button>\r\n</mat-radio-group>\r\n");

/***/ }),

/***/ "JtNN":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-items/content-items.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appToggleDebug class=\"nav-component-wrapper\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>{{ (contentType$ | async)?.Name }} Data</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <div class=\"grid-wrapper\">\r\n    <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"items$ | async\" [modules]=\"modules\"\r\n      [gridOptions]=\"gridOptions\" (gridReady)=\"onGridReady($event)\" appDragAndDrop [allowedFileTypes]=\"'xml,json'\"\r\n      (filesDropped)=\"filesDropped($event)\">\r\n    </ag-grid-angular>\r\n\r\n    <div class=\"actions-box\">\r\n      <button mat-button matTooltip=\"Export xml list\" (click)=\"exportContent()\">\r\n        <mat-icon>cloud_download</mat-icon>\r\n        <span>Data</span>\r\n      </button>\r\n      <button mat-button matTooltip=\"Import xml list\" (click)=\"importContent()\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Data</span>\r\n      </button>\r\n      <button mat-button matTooltip=\"Import single json item\" (click)=\"importItem()\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Item</span>\r\n      </button>\r\n      <button mat-button matTooltip=\"Add metadata to entity\" (click)=\"addMetadata()\">\r\n        <mat-icon>local_offer</mat-icon>\r\n        <span>Metadata</span>\r\n      </button>\r\n      <button mat-button color=\"accent\" matTooltip=\"Print filter to console\" *ngIf=\"debugEnabled$ | async\"\r\n        (click)=\"debugFilter()\">\r\n        <mat-icon>filter_list</mat-icon>\r\n        <span>Filter</span>\r\n      </button>\r\n    </div>\r\n\r\n    <button mat-fab mat-elevation-z24 class=\"grid-fab\" matTooltip=\"Add item\" (click)=\"editItem(null)\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "K0pi":
/*!************************************************************************************!*\
  !*** ./src/app/content-items/content-item-import/content-item-import.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContentItemImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemImportComponent", function() { return ContentItemImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_item_import_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-item-import.component.html */ "hNPa");
/* harmony import */ var _content_item_import_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-item-import.component.scss */ "XgZk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _services_content_items_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/content-items.service */ "55Ui");











var ContentItemImportComponent = /** @class */ (function () {
    function ContentItemImportComponent(dialogData, dialogRef, route, contentTypesService, contentItemsService, snackBar) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.route = route;
        this.contentTypesService = contentTypesService;
        this.contentItemsService = contentItemsService;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.isImporting$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.importFile$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.importResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.isImporting$, this.importFile$, this.importResult$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), isImporting = _b[0], importFile = _b[1], importResult = _b[2];
            return ({ isImporting: isImporting, importFile: importFile, importResult: importResult });
        }));
        this.contentTypeStaticName = this.route.snapshot.parent.paramMap.get('contentTypeStaticName');
    }
    ContentItemImportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentTypesService.retrieveContentType(this.contentTypeStaticName).subscribe(function (contentType) {
            _this.contentType$.next(contentType);
        });
        if (this.dialogData.files != null) {
            this.importFile$.next(this.dialogData.files[0]);
            this.importContentItem();
        }
    };
    ContentItemImportComponent.prototype.ngOnDestroy = function () {
        this.contentType$.complete();
        this.isImporting$.complete();
        this.importFile$.complete();
        this.importResult$.complete();
    };
    ContentItemImportComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ContentItemImportComponent.prototype.filesDropped = function (files) {
        var importFile = files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
        this.importContentItem();
    };
    ContentItemImportComponent.prototype.fileChange = function (event) {
        var importFile = event.target.files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
    };
    ContentItemImportComponent.prototype.importContentItem = function () {
        var _this = this;
        this.isImporting$.next(true);
        this.contentItemsService.importItem(this.importFile$.value).subscribe({
            next: function (res) {
                _this.isImporting$.next(false);
                _this.importResult$.next({
                    Success: true,
                    Messages: [],
                });
            },
            error: function (error) {
                _this.isImporting$.next(false);
                _this.importResult$.next(null);
                _this.snackBar.open('Import failed. Please check console for more information', null, { duration: 3000 });
            }
        });
    };
    ContentItemImportComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__["ContentTypesService"] },
        { type: _services_content_items_service__WEBPACK_IMPORTED_MODULE_10__["ContentItemsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    ContentItemImportComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ContentItemImportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-item-import',
            template: _raw_loader_content_item_import_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_item_import_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__["ContentTypesService"],
            _services_content_items_service__WEBPACK_IMPORTED_MODULE_10__["ContentItemsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ContentItemImportComponent);
    return ContentItemImportComponent;
}());



/***/ }),

/***/ "OMn/":
/*!********************************************************!*\
  !*** ./src/app/content-items/content-items.helpers.ts ***!
  \********************************************************/
/*! exports provided: buildFilterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFilterModel", function() { return buildFilterModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

function buildFilterModel(urlFilters) {
    var e_1, _a;
    if (!urlFilters) {
        return;
    }
    // special decode if parameter was passed as base64 - this is necessary for strings containing the "+" character
    if (urlFilters.charAt(urlFilters.length - 1) === '=') {
        urlFilters = atob(urlFilters);
    }
    var parsed;
    try {
        parsed = JSON.parse(urlFilters);
    }
    catch (error) {
        console.error('Can\'t parse JSON with filters from url:', urlFilters);
    }
    if (!parsed) {
        return;
    }
    // filters can be published, metadata, string, number and boolean
    var filterModel = {};
    if (parsed.IsPublished || parsed.IsMetadata) {
        var filter = {
            filterType: 'pub-meta',
            published: parsed.IsPublished ? parsed.IsPublished : '',
            metadata: parsed.IsMetadata ? parsed.IsMetadata : '',
        };
        filterModel.Status = filter;
    }
    var filterKeys = Object.keys(parsed);
    try {
        for (var filterKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(filterKeys), filterKeys_1_1 = filterKeys_1.next(); !filterKeys_1_1.done; filterKeys_1_1 = filterKeys_1.next()) {
            var key = filterKeys_1_1.value;
            if (key === 'IsPublished' || key === 'IsMetadata') {
                continue;
            }
            var value = parsed[key];
            if (typeof value === typeof '') {
                var filter = { filterType: 'text', type: 'equals', filter: value };
                filterModel[key] = filter;
            }
            else if (typeof value === typeof 0) {
                var filter = { filterType: 'number', type: 'equals', filter: value, filterTo: null };
                filterModel[key] = filter;
            }
            else if (typeof value === typeof true) {
                var filter = { filterType: 'boolean', filter: value.toString() };
                filterModel[key] = filter;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (filterKeys_1_1 && !filterKeys_1_1.done && (_a = filterKeys_1.return)) _a.call(filterKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return filterModel;
}


/***/ }),

/***/ "QRed":
/*!*************************************************************************************************************!*\
  !*** ./src/app/content-items/ag-grid-components/content-items-actions/content-items-actions.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvY29udGVudC1pdGVtcy9hZy1ncmlkLWNvbXBvbmVudHMvY29udGVudC1pdGVtcy1hY3Rpb25zL2NvbnRlbnQtaXRlbXMtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

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

/***/ "S36y":
/*!**********************************************************************!*\
  !*** ./src/app/app-administration/services/content-types.service.ts ***!
  \**********************************************************************/
/*! exports provided: webApiTypeRoot, ContentTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiTypeRoot", function() { return webApiTypeRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesService", function() { return ContentTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






var webApiTypeRoot = 'admin/type/';
var ContentTypesService = /** @class */ (function () {
    function ContentTypesService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentTypesService.prototype.apiUrl = function (name) {
        return this.dnnContext.$2sxc.http.apiUrl(name);
    };
    ContentTypesService.prototype.retrieveContentType = function (staticName) {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'get'), {
            params: { appId: this.context.appId.toString(), contentTypeId: staticName }
        });
    };
    ContentTypesService.prototype.retrieveContentTypes = function (scope) {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'list'), {
            params: { appId: this.context.appId.toString(), scope: scope }
        });
    };
    ContentTypesService.prototype.getScopes = function () {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'scopes'), {
            params: { appId: this.context.appId.toString() }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (scopes) {
            var scopeOptions = Object.keys(scopes).map(function (key) { return ({ name: scopes[key], value: key }); });
            return scopeOptions;
        }));
    };
    ContentTypesService.prototype.save = function (contentType) {
        return this.http.post(this.apiUrl(webApiTypeRoot + 'save'), contentType, {
            params: { appid: this.context.appId.toString() },
        });
    };
    ContentTypesService.prototype.delete = function (contentType) {
        return this.http.delete(this.apiUrl(webApiTypeRoot + 'delete'), {
            params: { appid: this.context.appId.toString(), staticName: contentType.StaticName },
        });
    };
    ContentTypesService.prototype.import = function (files) {
        var e_1, _a;
        var formData = new FormData();
        try {
            for (var files_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                formData.append('File', file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.http.post(this.apiUrl(webApiTypeRoot + 'import'), formData, {
            params: { appId: this.context.appId.toString(), zoneId: this.context.zoneId.toString() }
        });
    };
    ContentTypesService.prototype.createGhost = function (sourceStaticName) {
        return this.http.post(this.apiUrl(webApiTypeRoot + 'addghost'), null, {
            params: { appid: this.context.appId.toString(), sourceStaticName: sourceStaticName },
        });
    };
    ContentTypesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentTypesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentTypesService);
    return ContentTypesService;
}());



/***/ }),

/***/ "W5zH":
/*!*************************************************************************************************!*\
  !*** ./src/app/content-items/ag-grid-components/pub-meta-filter/pub-meta-filter.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  padding: 12px 12px 0;\n}\n\n.mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 12px;\n  width: 160px;\n  height: 104px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWl0ZW1zL2FnLWdyaWQtY29tcG9uZW50cy9wdWItbWV0YS1maWx0ZXIvcHViLW1ldGEtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvY29udGVudC1pdGVtcy9hZy1ncmlkLWNvbXBvbmVudHMvcHViLW1ldGEtZmlsdGVyL3B1Yi1tZXRhLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgcGFkZGluZzogMTJweCAxMnB4IDA7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDEwNHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "XgZk":
/*!**************************************************************************************!*\
  !*** ./src/app/content-items/content-item-import/content-item-import.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".import-result-box {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWl0ZW1zL2NvbnRlbnQtaXRlbS1pbXBvcnQvY29udGVudC1pdGVtLWltcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2NvbnRlbnQtaXRlbXMvY29udGVudC1pdGVtLWltcG9ydC9jb250ZW50LWl0ZW0taW1wb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltcG9ydC1yZXN1bHQtYm94IHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "dpA2":
/*!******************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-items/ag-grid-components/content-items-actions/content-items-actions.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Copy\" (click)=\"clone()\">\r\n    <mat-icon>file_copy</mat-icon>\r\n  </div>\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Export\" (click)=\"export()\">\r\n    <mat-icon>cloud_download</mat-icon>\r\n  </div>\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"More\" [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_horiz</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\" class=\"grid-more-menu\">\r\n  <button mat-menu-item (click)=\"openRestApi()\">\r\n    <mat-icon>code</mat-icon>\r\n    <span>REST API</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"deleteItem()\">\r\n    <mat-icon>delete</mat-icon>\r\n    <span>Delete</span>\r\n  </button>\r\n</mat-menu>\r\n");

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

/***/ "gur7":
/*!**********************************************************!*\
  !*** ./src/app/content-items/content-items.component.ts ***!
  \**********************************************************/
/*! exports provided: ContentItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemsComponent", function() { return ContentItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_items_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-items.component.html */ "JtNN");
/* harmony import */ var _content_items_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-items.component.scss */ "w3G/");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "KLQV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../edit */ "geKs");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../content-export/services/content-export.service */ "Bwh1");
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/components/boolean-filter/boolean-filter.component */ "CeOT");
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/components/id-field/id-field.component */ "JzAw");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/constants/default-grid-options.constants */ "QjRa");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/constants/session.constants */ "0ELX");
/* harmony import */ var _shared_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/helpers/angular-console-log.helper */ "50eG");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ "uuTa");
/* harmony import */ var _ag_grid_components_content_items_actions_content_items_actions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ag-grid-components/content-items-actions/content-items-actions.component */ "CTpJ");
/* harmony import */ var _ag_grid_components_content_items_entity_content_items_entity_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ag-grid-components/content-items-entity/content-items-entity.component */ "FOQX");
/* harmony import */ var _ag_grid_components_content_items_status_content_items_status_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ag-grid-components/content-items-status/content-items-status.component */ "BDZ4");
/* harmony import */ var _ag_grid_components_pub_meta_filter_pub_meta_filter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ag-grid-components/pub-meta-filter/pub-meta-filter.component */ "0UxJ");
/* harmony import */ var _content_items_helpers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./content-items.helpers */ "OMn/");
/* harmony import */ var _services_content_items_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/content-items.service */ "55Ui");
/* harmony import */ var _services_entities_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/entities.service */ "GTfO");



























var ContentItemsComponent = /** @class */ (function () {
    function ContentItemsComponent(dialogRef, contentTypesService, router, route, contentItemsService, entitiesService, contentExportService, snackBar, globalConfigService) {
        this.dialogRef = dialogRef;
        this.contentTypesService = contentTypesService;
        this.router = router;
        this.route = route;
        this.contentItemsService = contentItemsService;
        this.entitiesService = entitiesService;
        this.contentExportService = contentExportService;
        this.snackBar = snackBar;
        this.globalConfigService = globalConfigService;
        this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.items$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.debugEnabled$ = this.globalConfigService.getDebugEnabled();
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_15__["defaultGridOptions"]), { frameworkComponents: {
                pubMetaFilterComponent: _ag_grid_components_pub_meta_filter_pub_meta_filter_component__WEBPACK_IMPORTED_MODULE_23__["PubMetaFilterComponent"],
                booleanFilterComponent: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_13__["BooleanFilterComponent"],
                idFieldComponent: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_14__["IdFieldComponent"],
                contentItemsStatusComponent: _ag_grid_components_content_items_status_content_items_status_component__WEBPACK_IMPORTED_MODULE_22__["ContentItemsStatusComponent"],
                contentItemsActionsComponent: _ag_grid_components_content_items_actions_content_items_actions_component__WEBPACK_IMPORTED_MODULE_20__["ContentItemsActionsComponent"],
                contentItemsEntityComponent: _ag_grid_components_content_items_entity_content_items_entity_component__WEBPACK_IMPORTED_MODULE_21__["ContentItemsEntityComponent"],
            } });
        this.gridApi$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
    }
    ContentItemsComponent.prototype.ngOnInit = function () {
        this.fetchContentType();
        this.fetchItems();
        this.fetchColumns();
        this.refreshOnChildClosed();
    };
    ContentItemsComponent.prototype.ngOnDestroy = function () {
        this.contentType$.complete();
        this.items$.complete();
        this.gridApi$.complete();
        this.subscription.unsubscribe();
    };
    ContentItemsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ContentItemsComponent.prototype.onGridReady = function (params) {
        this.gridApi$.next(params.api);
    };
    ContentItemsComponent.prototype.fetchContentType = function () {
        var _this = this;
        this.contentTypesService.retrieveContentType(this.contentTypeStaticName).subscribe(function (contentType) {
            _this.contentType$.next(contentType);
        });
    };
    ContentItemsComponent.prototype.fetchItems = function () {
        var _this = this;
        this.contentItemsService.getAll(this.contentTypeStaticName).subscribe(function (items) {
            _this.items$.next(items);
        });
    };
    ContentItemsComponent.prototype.fetchColumns = function () {
        var _this = this;
        this.contentItemsService.getColumns(this.contentTypeStaticName).subscribe(function (columns) {
            var columnDefs = _this.buildColumnDefs(columns);
            var filterModel = Object(_content_items_helpers__WEBPACK_IMPORTED_MODULE_24__["buildFilterModel"])(sessionStorage.getItem(_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_17__["keyFilters"]));
            if (_this.gridApi$.value) {
                _this.setColumnDefs(columnDefs, filterModel);
            }
            else {
                _this.gridApi$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (gridApi) { return gridApi != null; }), // firefox does web requests faster than drawing grid and getting gridApi
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(function (gridApi) {
                    _this.setColumnDefs(columnDefs, filterModel);
                });
            }
        });
    };
    ContentItemsComponent.prototype.setColumnDefs = function (columnDefs, filterModel) {
        this.gridApi$.value.setColumnDefs(columnDefs);
        if (filterModel) {
            Object(_shared_helpers_angular_console_log_helper__WEBPACK_IMPORTED_MODULE_18__["angularConsoleLog"])('Will try to apply filter:', filterModel);
            this.gridApi$.value.setFilterModel(filterModel);
        }
    };
    ContentItemsComponent.prototype.editItem = function (params) {
        var item = params === null || params === void 0 ? void 0 : params.data;
        var form = {
            items: [
                item == null
                    ? { ContentTypeName: this.contentTypeStaticName }
                    : { EntityId: item.Id }
            ],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_19__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    ContentItemsComponent.prototype.exportContent = function () {
        var filterModel = this.gridApi$.value.getFilterModel();
        var hasFilters = Object.keys(filterModel).length > 0;
        var ids = [];
        if (hasFilters) {
            this.gridApi$.value.forEachNodeAfterFilterAndSort(function (rowNode) {
                ids.push(rowNode.data.Id);
            });
        }
        this.router.navigate(["export/" + this.contentTypeStaticName + (ids.length > 0 ? "/" + ids : '')], { relativeTo: this.route });
    };
    ContentItemsComponent.prototype.filesDropped = function (files) {
        var importFile = files[0];
        var ext = importFile.name.substring(importFile.name.lastIndexOf('.') + 1).toLocaleLowerCase();
        switch (ext) {
            case 'xml':
                this.importContent(files);
                break;
            case 'json':
                this.importItem(files);
                break;
        }
    };
    ContentItemsComponent.prototype.importContent = function (files) {
        var dialogData = { files: files };
        this.router.navigate([this.contentTypeStaticName + "/import"], { relativeTo: this.route, state: dialogData });
    };
    ContentItemsComponent.prototype.importItem = function (files) {
        var dialogData = { files: files };
        this.router.navigate(['import'], { relativeTo: this.route, state: dialogData });
    };
    ContentItemsComponent.prototype.addMetadata = function () {
        var e_1, _a;
        if (!confirm('This is a special operation to add an item which is metadata for another item.'
            + ' If you didn\'t understand that, this is not for you :). Continue?')) {
            return;
        }
        var metadataKeys = Object.keys(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].metadata);
        var validTargetTypes = metadataKeys.map(function (metaKey) { return _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].metadata[metaKey].type; });
        var targetType = parseInt(prompt('What kind of assignment do you want?'
            + metadataKeys.map(function (metaKey) { return "\n" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].metadata[metaKey].type + ": " + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].metadata[metaKey].target; }), _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].metadata.entity.type.toString()), 10);
        if (!targetType) {
            return alert('No target type entered. Cancelled');
        }
        if (!validTargetTypes.includes(targetType)) {
            return alert('Invalid target type. Cancelled');
        }
        var key = prompt('What key do you want?');
        if (!key) {
            return alert('No key entered. Cancelled');
        }
        var keyTypeKeys = Object.keys(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].keyTypes);
        var validKeyTypes = keyTypeKeys.map(function (keyTypeKey) { return _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].keyTypes[keyTypeKey]; });
        var keyType = prompt('What key type do you want?'
            + keyTypeKeys.map(function (keyTypeKey) { return "\n" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].keyTypes[keyTypeKey]; }), _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].keyTypes.number);
        if (!keyType) {
            return alert('No key type entered. Cancelled');
        }
        if (!validKeyTypes.includes(keyType)) {
            return alert('Invalid key type. Cancelled');
        }
        if (keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].keyTypes.number && !parseInt(key, 10)) {
            return alert('Key type number and key don\'t match. Cancelled');
        }
        var target;
        try {
            for (var metadataKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(metadataKeys), metadataKeys_1_1 = metadataKeys_1.next(); !metadataKeys_1_1.done; metadataKeys_1_1 = metadataKeys_1.next()) {
                var metaKey = metadataKeys_1_1.value;
                if (targetType !== _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].metadata[metaKey].type) {
                    continue;
                }
                target = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].metadata[metaKey].target;
                break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (metadataKeys_1_1 && !metadataKeys_1_1.done && (_a = metadataKeys_1.return)) _a.call(metadataKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var form = {
            items: [{
                    ContentTypeName: this.contentTypeStaticName,
                    For: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ Target: target }, (keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].keyTypes.guid && { Guid: key })), (keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].keyTypes.number && { Number: parseInt(key, 10) })), (keyType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_16__["eavConstants"].keyTypes.string && { String: key })),
                }],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_19__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    ContentItemsComponent.prototype.debugFilter = function () {
        console.warn('Current filter:', this.gridApi$.value.getFilterModel());
        alert('Check console for filter information');
    };
    ContentItemsComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(!!this.route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () { return !!_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            _this.fetchItems();
        }));
    };
    ContentItemsComponent.prototype.buildColumnDefs = function (columns) {
        var e_2, _a;
        var columnDefs = [
            {
                headerName: 'ID', field: 'Id', width: 70, headerClass: 'dense', cellClass: 'id-action no-padding no-outline',
                cellRenderer: 'idFieldComponent', sortable: true, filter: 'agTextColumnFilter',
                cellRendererParams: {
                    tooltipGetter: function (paramsData) { return "ID: " + paramsData.Id + "\nRepoID: " + paramsData._RepositoryId + "\nGUID: " + paramsData.Guid; },
                },
            },
            {
                headerName: 'Status', field: 'Status', width: 80, headerClass: 'dense', cellClass: 'no-outline',
                filter: 'pubMetaFilterComponent', cellRenderer: 'contentItemsStatusComponent', valueGetter: this.valueGetterStatus,
            },
            {
                headerName: 'Item (Entity)', field: '_Title', flex: 2, minWidth: 250, cellClass: 'primary-action highlight',
                sortable: true, filter: 'agTextColumnFilter', onCellClicked: this.editItem.bind(this),
            },
            {
                headerName: 'Stats', headerTooltip: 'Used by others / uses others',
                field: '_Used', width: 70, headerClass: 'dense', cellClass: 'no-outline',
                sortable: true, filter: 'agTextColumnFilter', valueGetter: this.valueGetterUsage,
            },
            {
                cellClass: 'secondary-action no-padding', width: 120, cellRenderer: 'contentItemsActionsComponent', pinned: 'right',
                cellRendererParams: {
                    onClone: this.clone.bind(this),
                    onExport: this.export.bind(this),
                    onOpenRestApi: this.openRestApi.bind(this),
                    onDelete: this.delete.bind(this),
                },
            },
        ];
        try {
            for (var columns_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(columns), columns_1_1 = columns_1.next(); !columns_1_1.done; columns_1_1 = columns_1.next()) {
                var column = columns_1_1.value;
                var colDef = {
                    headerName: column.StaticName, field: column.StaticName, flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true,
                };
                switch (column.Type) {
                    case 'Entity':
                        try {
                            colDef.allowMultiValue = column.Metadata.Entity.AllowMultiValue;
                        }
                        catch (e) {
                            colDef.allowMultiValue = true;
                        }
                        colDef.cellRenderer = 'contentItemsEntityComponent';
                        colDef.valueGetter = this.valueGetterEntityField;
                        colDef.filter = 'agTextColumnFilter';
                        break;
                    case 'DateTime':
                        try {
                            colDef.useTimePicker = column.Metadata.DateTime.UseTimePicker;
                        }
                        catch (e) {
                            colDef.useTimePicker = false;
                        }
                        colDef.valueGetter = this.valueGetterDateTime;
                        colDef.filter = 'agTextColumnFilter';
                        break;
                    case 'Boolean':
                        colDef.valueGetter = this.valueGetterBoolean;
                        colDef.filter = 'booleanFilterComponent';
                        break;
                    case 'Number':
                        colDef.filter = 'agNumberColumnFilter';
                        break;
                    default:
                        colDef.filter = 'agTextColumnFilter';
                        break;
                }
                columnDefs.push(colDef);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (columns_1_1 && !columns_1_1.done && (_a = columns_1.return)) _a.call(columns_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return columnDefs;
    };
    ContentItemsComponent.prototype.clone = function (item) {
        var form = {
            items: [{ ContentTypeName: this.contentTypeStaticName, DuplicateEntity: item.Id }],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_19__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    ContentItemsComponent.prototype.export = function (item) {
        this.contentExportService.exportEntity(item.Id, this.contentTypeStaticName, true);
    };
    ContentItemsComponent.prototype.openRestApi = function (item) {
        this.router.navigate(["restapi/" + this.contentTypeStaticName + "/" + item.Id], { relativeTo: this.route });
    };
    ContentItemsComponent.prototype.delete = function (item) {
        var _this = this;
        if (!confirm("Delete '" + item._Title + "' (" + item._RepositoryId + ")?")) {
            return;
        }
        this.snackBar.open('Deleting...');
        this.entitiesService.delete(this.contentTypeStaticName, item._RepositoryId, false).subscribe({
            next: function () {
                _this.snackBar.open('Deleted', null, { duration: 2000 });
                _this.fetchItems();
            },
            error: function (err) {
                _this.snackBar.dismiss();
                if (!confirm(err.error.ExceptionMessage + "\n\nDo you want to force delete '" + item._Title + "' (" + item._RepositoryId + ")?")) {
                    return;
                }
                _this.snackBar.open('Deleting...');
                _this.entitiesService.delete(_this.contentTypeStaticName, item._RepositoryId, true).subscribe(function () {
                    _this.snackBar.open('Deleted', null, { duration: 2000 });
                    _this.fetchItems();
                });
            }
        });
    };
    ContentItemsComponent.prototype.valueGetterStatus = function (params) {
        var item = params.data;
        var published = {
            published: item.IsPublished,
            metadata: !!item.Metadata,
        };
        return published;
    };
    ContentItemsComponent.prototype.valueGetterUsage = function (params) {
        var item = params.data;
        return item._Used + " / " + item._Uses;
    };
    ContentItemsComponent.prototype.valueGetterEntityField = function (params) {
        var rawValue = params.data[params.colDef.field];
        if (rawValue.length === 0) {
            return null;
        }
        return rawValue.map(function (item) { return item.Title; });
    };
    ContentItemsComponent.prototype.valueGetterDateTime = function (params) {
        var rawValue = params.data[params.colDef.field];
        if (!rawValue) {
            return null;
        }
        // remove 'Z' and replace 'T'
        return params.colDef.useTimePicker ? rawValue.substring(0, 19).replace('T', ' ') : rawValue.substring(0, 10);
    };
    ContentItemsComponent.prototype.valueGetterBoolean = function (params) {
        var rawValue = params.data[params.colDef.field];
        if (typeof rawValue !== typeof true) {
            return null;
        }
        return rawValue.toString();
    };
    ContentItemsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__["ContentTypesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _services_content_items_service__WEBPACK_IMPORTED_MODULE_25__["ContentItemsService"] },
        { type: _services_entities_service__WEBPACK_IMPORTED_MODULE_26__["EntitiesService"] },
        { type: _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_12__["ContentExportService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _edit__WEBPACK_IMPORTED_MODULE_10__["GlobalConfigService"] }
    ]; };
    ContentItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-content-items',
            template: _raw_loader_content_items_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_items_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__["ContentTypesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _services_content_items_service__WEBPACK_IMPORTED_MODULE_25__["ContentItemsService"],
            _services_entities_service__WEBPACK_IMPORTED_MODULE_26__["EntitiesService"],
            _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_12__["ContentExportService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _edit__WEBPACK_IMPORTED_MODULE_10__["GlobalConfigService"]])
    ], ContentItemsComponent);
    return ContentItemsComponent;
}());



/***/ }),

/***/ "hNPa":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-items/content-item-import/content-item-import.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appDragAndDrop [allowedFileTypes]=\"'json'\" (filesDropped)=\"filesDropped($event)\"\r\n  *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">{{ (contentType$ | async)?.Name }} Import Single Item</div>\r\n  </div>\r\n\r\n  <mat-spinner *ngIf=\"data.isImporting\" mode=\"indeterminate\" diameter=\"20\" color=\"accent\"></mat-spinner>\r\n\r\n  <p class=\"dialog-description\">Select an item file (json) from your computer to import.</p>\r\n\r\n  <div>\r\n    <button mat-raised-button matTooltip=\"Open file browser\" [disabled]=\"data.isImporting\" (click)=\"fileInput.click()\">\r\n      <span>{{ data.importFile ? data.importFile.name : 'Select or drop file' }}</span>\r\n    </button>\r\n    <input #fileInput type=\"file\" (change)=\"fileChange($event)\" class=\"hide\" />\r\n  </div>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light import-result-box\" *ngIf=\"data.importResult\">\r\n    <div *ngIf=\"data.importResult.Success\" class=\"sxc-message sxc-message-info\">\r\n      The import has been done. See the messages below for more information.\r\n    </div>\r\n    <div *ngIf=\"!data.importResult.Success\" class=\"sxc-message sxc-message-error\">\r\n      The import failed. See the messages below for more information.\r\n    </div>\r\n    <div *ngFor=\"let message of data.importResult.Messages\" class=\"sxc-message\" [ngClass]=\"{\r\n      'sxc-message-warning': message.MessageType === 0,\r\n      'sxc-message-success': message.MessageType === 1,\r\n      'sxc-message-error': message.MessageType === 2\r\n    }\">\r\n      {{ message.Text }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <ng-container *ngIf=\"!data.importResult?.Success\">\r\n      <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\" [disabled]=\"!data.importFile || data.isImporting || data.importResult\"\r\n        (click)=\"importContentItem()\">\r\n        Import\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.importResult?.Success\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">Close</button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n");

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















/***/ }),

/***/ "w3G/":
/*!************************************************************!*\
  !*** ./src/app/content-items/content-items.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".actions-box {\n  margin-right: 66px;\n  margin-left: 8px;\n  display: flex;\n}\n.actions-box .mat-button .mat-icon {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWl0ZW1zL2NvbnRlbnQtaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtBQUNKIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWl0ZW1zL2NvbnRlbnQtaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9ucy1ib3gge1xyXG4gIG1hcmdpbi1yaWdodDogNjZweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5tYXQtYnV0dG9uIC5tYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "wIMF":
/*!****************************************************************************************!*\
  !*** ./src/app/content-items/content-item-import/content-item-import-dialog.config.ts ***!
  \****************************************************************************************/
/*! exports provided: contentItemImportDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentItemImportDialog", function() { return contentItemImportDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var contentItemImportDialog = {
    name: 'IMPORT_CONTENT_ITEM_DIALOG',
    initContext: false,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ContentItemImportComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./content-item-import.component */ "K0pi"))];
                    case 1:
                        ContentItemImportComponent = (_a.sent()).ContentItemImportComponent;
                        return [2 /*return*/, ContentItemImportComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "xRcv":
/*!****************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-items/ag-grid-components/content-items-entity/content-items-entity.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [matTooltip]=\"encodedValue\">\r\n  <span *ngIf=\"entities\" class=\"more-entities\">{{ entities }}</span>\r\n  {{ encodedValue }}\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=content-items-content-items-module.js.map