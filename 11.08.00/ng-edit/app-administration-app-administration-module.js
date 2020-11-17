(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-administration-app-administration-module"],{

/***/ "+IvA":
/*!*************************************************************************!*\
  !*** ./src/app/app-administration/app-administration-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AppAdministrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAdministrationRoutingModule", function() { return AppAdministrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "it7M");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "nXrb");
/* harmony import */ var _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/empty-route/empty-route.component */ "mQU2");
/* harmony import */ var _app_administration_nav_app_administration_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-administration-nav/app-administration-dialog.config */ "gNfS");
/* harmony import */ var _sub_dialogs_edit_content_type_edit_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sub-dialogs/edit-content-type/edit-content-type-dialog.config */ "qGxh");
/* harmony import */ var _sub_dialogs_export_app_parts_export_app_parts_dialog_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sub-dialogs/export-app-parts/export-app-parts-dialog.config */ "/5RG");
/* harmony import */ var _sub_dialogs_export_app_export_app_dialog_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sub-dialogs/export-app/export-app-dialog.config */ "lmLB");
/* harmony import */ var _sub_dialogs_import_app_parts_import_app_parts_dialog_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sub-dialogs/import-app-parts/import-app-parts-dialog.config */ "BPga");
/* harmony import */ var _sub_dialogs_import_content_type_import_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub-dialogs/import-content-type/import-content-type-dialog.config */ "4HdG");
/* harmony import */ var _sub_dialogs_import_query_import_query_dialog_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sub-dialogs/import-query/import-query-dialog.config */ "H3Ax");
/* harmony import */ var _sub_dialogs_import_view_import_view_dialog_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub-dialogs/import-view/import-view-dialog.config */ "A7zz");
/* harmony import */ var _sub_dialogs_views_usage_views_usage_dialog_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sub-dialogs/views-usage/views-usage-dialog.config */ "9FAV");















var appAdministrationRoutes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _app_administration_nav_app_administration_dialog_config__WEBPACK_IMPORTED_MODULE_6__["appAdministrationDialog"] },
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_5__["EmptyRouteComponent"], data: { title: 'App Home' } },
            {
                path: 'data', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_5__["EmptyRouteComponent"],
                children: [
                    {
                        path: 'import',
                        component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"],
                        data: { dialog: _sub_dialogs_import_content_type_import_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_11__["importContentTypeDialog"], title: 'Import Content Type' },
                    },
                    {
                        path: 'items/:contentTypeStaticName',
                        loadChildren: function () { return Promise.all(/*! import() | content-items-content-items-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~33e631e1"), __webpack_require__.e("common"), __webpack_require__.e("content-items-content-items-module")]).then(__webpack_require__.bind(null, /*! ../content-items/content-items.module */ "DUJ2")).then(function (m) { return m.ContentItemsModule; }); }
                    },
                    {
                        matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                        loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "B+J5")).then(function (m) { return m.EditModule; }); }
                    },
                    {
                        matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["refreshEdit"],
                        loadChildren: function () { return Promise.all(/*! import() | edit-refresh-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-refresh-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/refresh-edit.module */ "orgq")).then(function (m) { return m.RefreshEditModule; }); }
                    },
                    {
                        path: ':scope/add',
                        component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"],
                        data: { dialog: _sub_dialogs_edit_content_type_edit_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_7__["editContentTypeDialog"], title: 'Add Content Type' },
                    },
                    {
                        path: ':scope/:contentTypeStaticName/edit',
                        component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"],
                        data: { dialog: _sub_dialogs_edit_content_type_edit_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_7__["editContentTypeDialog"], title: 'Edit Content Type' },
                    },
                    {
                        path: 'restapi/:contentTypeStaticName',
                        loadChildren: function () { return Promise.all(/*! import() | dev-rest-dev-rest-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~app-administration-app-administration-module~dev-rest-dev-rest-module~item-history-item-hist~ad3a3554"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("dev-rest-dev-rest-module")]).then(__webpack_require__.bind(null, /*! ../dev-rest/dev-rest.module */ "uDA9")).then(function (m) { return m.DevRestModule; }); }
                    },
                    {
                        path: 'fields/:contentTypeStaticName',
                        loadChildren: function () { return Promise.all(/*! import() | content-type-fields-content-type-fields-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~content-type-fields-content-type-fields-module"), __webpack_require__.e("common"), __webpack_require__.e("content-type-fields-content-type-fields-module")]).then(__webpack_require__.bind(null, /*! ../content-type-fields/content-type-fields.module */ "tjG3")).then(function (m) { return m.ContentTypeFieldsModule; }); },
                        data: { title: 'Content Type Fields' },
                    },
                    {
                        path: 'export/:contentTypeStaticName',
                        loadChildren: function () { return Promise.all(/*! import() | content-export-content-export-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("common"), __webpack_require__.e("content-export-content-export-module")]).then(__webpack_require__.bind(null, /*! ../content-export/content-export.module */ "+hKU")).then(function (m) { return m.ContentExportModule; }); },
                        data: { title: 'Export Items' },
                    },
                    {
                        path: ':contentTypeStaticName/import',
                        loadChildren: function () { return Promise.all(/*! import() | content-import-content-import-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("common"), __webpack_require__.e("content-import-content-import-module")]).then(__webpack_require__.bind(null, /*! ../content-import/content-import.module */ "W/vD")).then(function (m) { return m.ContentImportModule; }); },
                        data: { title: 'Import Items' },
                    },
                    {
                        path: 'permissions/:type/:keyType/:key',
                        loadChildren: function () { return Promise.all(/*! import() | permissions-permissions-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("common"), __webpack_require__.e("permissions-permissions-module")]).then(__webpack_require__.bind(null, /*! ../permissions/permissions.module */ "jl54")).then(function (m) { return m.PermissionsModule; }); },
                        data: { title: 'Permission' },
                    },
                ],
                data: { title: 'App Data' },
            },
            {
                path: 'queries', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_5__["EmptyRouteComponent"],
                children: [
                    {
                        path: 'import',
                        component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"],
                        data: { dialog: _sub_dialogs_import_query_import_query_dialog_config__WEBPACK_IMPORTED_MODULE_12__["importQueryDialog"], title: 'Import Query' }
                    },
                    {
                        matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                        loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "B+J5")).then(function (m) { return m.EditModule; }); },
                        data: { title: 'Edit Query Name and Description', history: false },
                    },
                    {
                        path: 'permissions/:type/:keyType/:key',
                        loadChildren: function () { return Promise.all(/*! import() | permissions-permissions-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("common"), __webpack_require__.e("permissions-permissions-module")]).then(__webpack_require__.bind(null, /*! ../permissions/permissions.module */ "jl54")).then(function (m) { return m.PermissionsModule; }); },
                        data: { title: 'Query Permissions' },
                    },
                ],
                data: { title: 'App Queries' },
            },
            {
                path: 'views', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_5__["EmptyRouteComponent"],
                children: [
                    {
                        path: 'import',
                        component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"],
                        data: { dialog: _sub_dialogs_import_view_import_view_dialog_config__WEBPACK_IMPORTED_MODULE_13__["importViewDialog"], title: 'Import View' },
                    },
                    { path: 'usage/:guid', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _sub_dialogs_views_usage_views_usage_dialog_config__WEBPACK_IMPORTED_MODULE_14__["viewsUsageDialog"] } },
                    {
                        matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                        loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "B+J5")).then(function (m) { return m.EditModule; }); },
                        data: { title: 'Edit View' },
                    },
                    {
                        matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["refreshEdit"],
                        loadChildren: function () { return Promise.all(/*! import() | edit-refresh-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-refresh-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/refresh-edit.module */ "orgq")).then(function (m) { return m.RefreshEditModule; }); }
                    },
                    {
                        path: 'permissions/:type/:keyType/:key',
                        loadChildren: function () { return Promise.all(/*! import() | permissions-permissions-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("common"), __webpack_require__.e("permissions-permissions-module")]).then(__webpack_require__.bind(null, /*! ../permissions/permissions.module */ "jl54")).then(function (m) { return m.PermissionsModule; }); },
                        data: { title: 'View Permissions' },
                    },
                ],
                data: { title: 'App Views' },
            },
            { path: 'web-api', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_5__["EmptyRouteComponent"], data: { title: 'App WebApi' }, },
            {
                path: 'app', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_5__["EmptyRouteComponent"],
                children: [
                    {
                        matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                        loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "B+J5")).then(function (m) { return m.EditModule; }); },
                        data: { title: 'Edit App Properties' },
                    },
                    {
                        matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["refreshEdit"],
                        loadChildren: function () { return Promise.all(/*! import() | edit-refresh-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-refresh-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/refresh-edit.module */ "orgq")).then(function (m) { return m.RefreshEditModule; }); }
                    },
                    {
                        path: 'fields/:contentTypeStaticName',
                        loadChildren: function () { return Promise.all(/*! import() | content-type-fields-content-type-fields-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~content-type-fields-content-type-fields-module"), __webpack_require__.e("common"), __webpack_require__.e("content-type-fields-content-type-fields-module")]).then(__webpack_require__.bind(null, /*! ../content-type-fields/content-type-fields.module */ "tjG3")).then(function (m) { return m.ContentTypeFieldsModule; }); },
                        data: { title: 'Edit Fields of App Settings & Resources' },
                    },
                    {
                        path: 'permissions/:type/:keyType/:key',
                        loadChildren: function () { return Promise.all(/*! import() | permissions-permissions-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~fd907a9b"), __webpack_require__.e("common"), __webpack_require__.e("permissions-permissions-module")]).then(__webpack_require__.bind(null, /*! ../permissions/permissions.module */ "jl54")).then(function (m) { return m.PermissionsModule; }); },
                        data: { title: 'App Permission' },
                    },
                    { path: 'export', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _sub_dialogs_export_app_export_app_dialog_config__WEBPACK_IMPORTED_MODULE_9__["exportAppDialog"], title: 'Export App' } },
                    { path: 'export/parts', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _sub_dialogs_export_app_parts_export_app_parts_dialog_config__WEBPACK_IMPORTED_MODULE_8__["exportAppPartsDialog"], title: 'Export App Parts' } },
                    { path: 'import/parts', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _sub_dialogs_import_app_parts_import_app_parts_dialog_config__WEBPACK_IMPORTED_MODULE_10__["importAppPartsDialog"], title: 'Import App Parts' } },
                ],
                data: { title: 'Manage App' },
            },
        ]
    },
];
var AppAdministrationRoutingModule = /** @class */ (function () {
    function AppAdministrationRoutingModule() {
    }
    AppAdministrationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appAdministrationRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppAdministrationRoutingModule);
    return AppAdministrationRoutingModule;
}());



/***/ }),

/***/ "/5RG":
/*!***************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/export-app-parts/export-app-parts-dialog.config.ts ***!
  \***************************************************************************************************/
/*! exports provided: exportAppPartsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportAppPartsDialog", function() { return exportAppPartsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var exportAppPartsDialog = {
    name: 'EXPORT_APP_PARTS',
    initContext: false,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ExportAppPartsComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./export-app-parts.component */ "0bV3"))];
                    case 1:
                        ExportAppPartsComponent = (_a.sent()).ExportAppPartsComponent;
                        return [2 /*return*/, ExportAppPartsComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "0bV3":
/*!***********************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/export-app-parts/export-app-parts.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExportAppPartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportAppPartsComponent", function() { return ExportAppPartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_export_app_parts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./export-app-parts.component.html */ "nNlm");
/* harmony import */ var _export_app_parts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-app-parts.component.scss */ "5Gkd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/content-types.service */ "S36y");
/* harmony import */ var _services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/export-app-parts.service */ "bkzA");










var ExportAppPartsComponent = /** @class */ (function () {
    function ExportAppPartsComponent(dialogRef, exportAppPartsService, contentTypesService) {
        this.dialogRef = dialogRef;
        this.exportAppPartsService = exportAppPartsService;
        this.contentTypesService = contentTypesService;
        this.hostClass = 'dialog-component';
        this.exportScope = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__["eavConstants"].scopes.default.value;
        this.lockScope = true;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.isExporting$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.loading$, this.isExporting$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), loading = _b[0], isExporting = _b[1];
            return ({ loading: loading, isExporting: isExporting });
        }));
    }
    ExportAppPartsComponent.prototype.ngOnInit = function () {
        this.fetchScopes();
        this.fetchContentInfo();
    };
    ExportAppPartsComponent.prototype.ngOnDestroy = function () {
        this.loading$.complete();
        this.isExporting$.complete();
    };
    ExportAppPartsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ExportAppPartsComponent.prototype.exportAppParts = function () {
        this.isExporting$.next(true);
        // spm TODO: maybe optimize these functions to not loop content types and entities multiple times for no reason
        // spm TODO: figure out how to capture window loading to disable export button
        var contentTypeIds = this.selectedContentTypes().map(function (contentType) { return contentType.Id; });
        var templateIds = this.selectedTemplates().map(function (template) { return template.Id; });
        var entityIds = this.selectedEntities().map(function (entity) { return entity.Id; });
        entityIds = entityIds.concat(templateIds);
        this.exportAppPartsService.exportParts(contentTypeIds, entityIds, templateIds);
        this.isExporting$.next(false);
    };
    ExportAppPartsComponent.prototype.changeScope = function (newScope) {
        if (newScope === 'Other') {
            newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.');
            if (!newScope) {
                newScope = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__["eavConstants"].scopes.default.value;
            }
            else if (!this.scopeOptions.find(function (option) { return option.value === newScope; })) {
                var newScopeOption = {
                    name: newScope,
                    value: newScope,
                };
                this.scopeOptions.push(newScopeOption);
            }
        }
        this.exportScope = newScope;
        this.fetchContentInfo();
    };
    ExportAppPartsComponent.prototype.unlockScope = function () {
        this.lockScope = !this.lockScope;
        if (this.lockScope) {
            this.exportScope = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__["eavConstants"].scopes.default.value;
            this.fetchContentInfo();
        }
    };
    ExportAppPartsComponent.prototype.fetchScopes = function () {
        var _this = this;
        this.loading$.next(true);
        this.contentTypesService.getScopes().subscribe(function (scopes) {
            _this.scopeOptions = scopes;
            _this.loading$.next(false);
        });
    };
    ExportAppPartsComponent.prototype.fetchContentInfo = function () {
        var _this = this;
        this.loading$.next(true);
        this.exportAppPartsService.getContentInfo(this.exportScope).subscribe(function (contentInfo) {
            _this.contentInfo = contentInfo;
            _this.loading$.next(false);
        });
    };
    ExportAppPartsComponent.prototype.selectedContentTypes = function () {
        return this.contentInfo.ContentTypes.filter(function (contentType) { return contentType._export; });
    };
    ExportAppPartsComponent.prototype.selectedEntities = function () {
        var e_1, _a;
        var entities = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.contentInfo.ContentTypes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contentType = _c.value;
                entities = entities.concat(contentType.Entities.filter(function (entity) { return entity._export; }));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return entities;
    };
    ExportAppPartsComponent.prototype.selectedTemplates = function () {
        var e_2, _a;
        var templates = [];
        try {
            // The ones with...
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.contentInfo.ContentTypes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contentType = _c.value;
                templates = templates.concat(contentType.Templates.filter(function (template) { return template._export; }));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // ...and without content types
        templates = templates.concat(this.contentInfo.TemplatesWithoutContentTypes.filter(function (template) { return template._export; }));
        return templates;
    };
    ExportAppPartsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_9__["ExportAppPartsService"] },
        { type: _services_content_types_service__WEBPACK_IMPORTED_MODULE_8__["ContentTypesService"] }
    ]; };
    ExportAppPartsComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ExportAppPartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-export-app-parts',
            template: _raw_loader_export_app_parts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_export_app_parts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_9__["ExportAppPartsService"],
            _services_content_types_service__WEBPACK_IMPORTED_MODULE_8__["ContentTypesService"]])
    ], ExportAppPartsComponent);
    return ExportAppPartsComponent;
}());



/***/ }),

/***/ "1M8I":
/*!************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/queries/queries.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-wrapper mat-tab-grid-wrapper\">\r\n  <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"queries$ | async\" [modules]=\"modules\"\r\n    [gridOptions]=\"gridOptions\" appDragAndDrop [allowedFileTypes]=\"'json'\" (filesDropped)=\"importQuery($event)\">\r\n  </ag-grid-angular>\r\n\r\n  <eco-fab-speed-dial class=\"grid-fab\">\r\n    <eco-fab-speed-dial-trigger spin=\"true\">\r\n      <button mat-fab>\r\n        <mat-icon class=\"spin180\">add</mat-icon>\r\n      </button>\r\n    </eco-fab-speed-dial-trigger>\r\n\r\n    <eco-fab-speed-dial-actions>\r\n      <button mat-mini-fab matTooltip=\"Import query\" (click)=\"importQuery()\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n      </button>\r\n      <button mat-mini-fab matTooltip=\"Create a new query\" (click)=\"editQuery(null)\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </eco-fab-speed-dial-actions>\r\n  </eco-fab-speed-dial>\r\n</div>\r\n");

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

/***/ "1jVc":
/*!****************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/web-api-actions/web-api-actions.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WebApiActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebApiActionsComponent", function() { return WebApiActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_web_api_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./web-api-actions.component.html */ "pjwo");
/* harmony import */ var _web_api_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-api-actions.component.scss */ "KC2B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var WebApiActionsComponent = /** @class */ (function () {
    function WebApiActionsComponent() {
    }
    WebApiActionsComponent.prototype.agInit = function (params) {
        this.params = params;
        this.enableCode = this.params.enableCodeGetter();
    };
    WebApiActionsComponent.prototype.refresh = function (params) {
        return true;
    };
    WebApiActionsComponent.prototype.openCode = function () {
        var api = this.params.data;
        this.params.onOpenCode(api);
    };
    WebApiActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-web-api-actions',
            template: _raw_loader_web_api_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_web_api_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], WebApiActionsComponent);
    return WebApiActionsComponent;
}());



/***/ }),

/***/ "1p4O":
/*!********************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-type/views-type.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL2FnLWdyaWQtY29tcG9uZW50cy92aWV3cy10eXBlL3ZpZXdzLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "27N0":
/*!******************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/sub-dialogs/import-app-parts/import-app-parts.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appDragAndDrop [allowedFileTypes]=\"'xml'\" (filesDropped)=\"filesDropped($event)\"\r\n  *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">Import Content and Templates into this App</div>\r\n  </div>\r\n\r\n  <mat-spinner *ngIf=\"data.isImporting\" mode=\"indeterminate\" diameter=\"20\" color=\"accent\"></mat-spinner>\r\n\r\n  <p class=\"dialog-description\">\r\n    Import content and templates from a content export (zip) or partial export (xml) to this app.\r\n    The entire content of the selected file will be imported.\r\n    If you want to import an entire app, go to the <em>Apps Management</em>.\r\n    For further help visit <a href=\"https://2sxc.org/en/help?tag=import\" target=\"_blank\">2sxc Help</a>.\r\n  </p>\r\n\r\n  <div>\r\n    <button mat-raised-button matTooltip=\"Open file browser\" [disabled]=\"data.isImporting\" (click)=\"fileInput.click()\">\r\n      <span>{{ data.importFile ? data.importFile.name : 'Select or drop file' }}</span>\r\n    </button>\r\n    <input #fileInput type=\"file\" (change)=\"fileChange($event)\" class=\"hide\" />\r\n  </div>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light import-result-box\" *ngIf=\"data.importResult\">\r\n    <div *ngIf=\"data.importResult.Success\" class=\"sxc-message sxc-message-info\">\r\n      The import has been done. See the messages below for more information.\r\n    </div>\r\n    <div *ngIf=\"!data.importResult.Success\" class=\"sxc-message sxc-message-error\">\r\n      The import failed. See the messages below for more information.\r\n    </div>\r\n    <div *ngFor=\"let message of data.importResult.Messages\" class=\"sxc-message\" [ngClass]=\"{\r\n      'sxc-message-warning': message.MessageType === 0,\r\n      'sxc-message-success': message.MessageType === 1,\r\n      'sxc-message-error': message.MessageType === 2\r\n    }\">\r\n      {{ message.Text }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <ng-container *ngIf=\"!data.importResult?.Success\">\r\n      <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\" [disabled]=\"!data.importFile || data.isImporting || data.importResult\"\r\n        (click)=\"importAppParts()\">\r\n        Import\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.importResult?.Success\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">Close</button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "29VN":
/*!*****************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/data-actions/data-actions.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple *ngIf=\"!contentType.UsesSharedDef\" matTooltip=\"Metadata\"\r\n    (click)=\"createOrEditMetadata()\">\r\n    <mat-icon>edit</mat-icon>\r\n  </div>\r\n  <div class=\"like-button disabled\" *ngIf=\"contentType.UsesSharedDef\">\r\n    <mat-icon>edit</mat-icon>\r\n  </div>\r\n\r\n  <div class=\"like-button highlight\" matRipple *ngIf=\"enablePermissions\" matTooltip=\"Permissions\"\r\n    (click)=\"openPermissions()\">\r\n    <mat-icon [matBadge]=\"contentType.Permissions.Count\" matBadgePosition=\"after\" matBadgeColor=\"accent\"\r\n      matBadgeSize=\"small\" *ngIf=\"contentType.Permissions.Count\">\r\n      person\r\n    </mat-icon>\r\n    <mat-icon *ngIf=\"!contentType.Permissions.Count\">person</mat-icon>\r\n  </div>\r\n  <div class=\"like-button disabled\" *ngIf=\"!enablePermissions\">\r\n    <mat-icon>person</mat-icon>\r\n  </div>\r\n\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"More\" [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_horiz</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\" class=\"grid-more-menu\">\r\n  <button mat-menu-item (click)=\"editContentType()\">\r\n    <mat-icon>settings</mat-icon>\r\n    <span>Rename</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"openRestApi()\">\r\n    <mat-icon>code</mat-icon>\r\n    <span>REST API</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"exportType()\">\r\n    <mat-icon>cloud_download</mat-icon>\r\n    <span>Export content type</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"openDataExport()\">\r\n    <mat-icon>cloud_download</mat-icon>\r\n    <span>Export data</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"openDataImport()\">\r\n    <mat-icon>cloud_upload</mat-icon>\r\n    <span>Import data</span>\r\n  </button>\r\n  <button mat-menu-item [disabled]=\"contentType.UsesSharedDef\" (click)=\"deleteContentType()\">\r\n    <mat-icon>delete</mat-icon>\r\n    <span>Delete</span>\r\n  </button>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "4HdG":
/*!*********************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-content-type/import-content-type-dialog.config.ts ***!
  \*********************************************************************************************************/
/*! exports provided: importContentTypeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importContentTypeDialog", function() { return importContentTypeDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var importContentTypeDialog = {
    name: 'IMPORT_CONTENT_TYPE_DIALOG',
    initContext: false,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ImportContentTypeComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./import-content-type.component */ "NtNJ"))];
                    case 1:
                        ImportContentTypeComponent = (_a.sent()).ImportContentTypeComponent;
                        return [2 /*return*/, ImportContentTypeComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "4hnE":
/*!*****************************************************************!*\
  !*** ./src/app/app-administration/queries/queries.component.ts ***!
  \*****************************************************************/
/*! exports provided: QueriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueriesComponent", function() { return QueriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_queries_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./queries.component.html */ "1M8I");
/* harmony import */ var _queries_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries.component.scss */ "xnZf");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "KLQV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../content-export/services/content-export.service */ "Bwh1");
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ "JzAw");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ "QjRa");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ "uuTa");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "H0VJ");
/* harmony import */ var _ag_grid_components_queries_actions_queries_actions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ag-grid-components/queries-actions/queries-actions.component */ "eOQJ");
/* harmony import */ var _services_pipelines_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/pipelines.service */ "frVg");

















var QueriesComponent = /** @class */ (function () {
    function QueriesComponent(router, route, pipelinesService, contentExportService, snackBar, dialogService) {
        this.router = router;
        this.route = route;
        this.pipelinesService = pipelinesService;
        this.contentExportService = contentExportService;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.queries$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_11__["defaultGridOptions"]), { frameworkComponents: {
                idFieldComponent: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_10__["IdFieldComponent"],
                queriesActionsComponent: _ag_grid_components_queries_actions_queries_actions_component__WEBPACK_IMPORTED_MODULE_15__["QueriesActionsComponent"],
            }, columnDefs: [
                {
                    headerName: 'ID', field: 'Id', width: 70, headerClass: 'dense', cellClass: 'id-action no-padding no-outline',
                    cellRenderer: 'idFieldComponent', sortable: true, filter: 'agTextColumnFilter',
                    cellRendererParams: {
                        tooltipGetter: function (paramsData) { return "ID: " + paramsData.Id + "\nGUID: " + paramsData.Guid; },
                    },
                },
                {
                    headerName: 'Name', field: 'Name', flex: 2, minWidth: 250, cellClass: 'primary-action highlight', sortable: true,
                    filter: 'agTextColumnFilter', onCellClicked: this.openVisualQueryDesigner.bind(this),
                },
                {
                    headerName: 'Description', field: 'Description', flex: 2, minWidth: 250, cellClass: 'no-outline', sortable: true,
                    filter: 'agTextColumnFilter',
                },
                {
                    width: 120, cellClass: 'secondary-action no-padding', pinned: 'right',
                    cellRenderer: 'queriesActionsComponent',
                    cellRendererParams: {
                        enablePermissionsGetter: this.enablePermissionsGetter.bind(this),
                        onEditQuery: this.editQuery.bind(this),
                        onCloneQuery: this.cloneQuery.bind(this),
                        onOpenPermissions: this.openPermissions.bind(this),
                        onExportQuery: this.exportQuery.bind(this),
                        onDelete: this.deleteQuery.bind(this),
                    },
                },
            ] });
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    QueriesComponent.prototype.ngOnInit = function () {
        this.fetchQueries();
        this.refreshOnChildClosed();
    };
    QueriesComponent.prototype.ngOnDestroy = function () {
        this.queries$.complete();
        this.subscription.unsubscribe();
    };
    QueriesComponent.prototype.fetchQueries = function () {
        var _this = this;
        this.pipelinesService.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].contentTypes.query).subscribe(function (queries) {
            _this.queries$.next(queries);
        });
    };
    QueriesComponent.prototype.importQuery = function (files) {
        var dialogData = { files: files };
        this.router.navigate(['import'], { relativeTo: this.route.firstChild, state: dialogData });
    };
    QueriesComponent.prototype.editQuery = function (query) {
        var form = {
            items: [
                query == null
                    ? {
                        ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].contentTypes.query,
                        Prefill: { TestParameters: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].pipelineDesigner.testParameters }
                    }
                    : { EntityId: query.Id }
            ],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_13__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route.firstChild });
    };
    QueriesComponent.prototype.enablePermissionsGetter = function () {
        return this.enablePermissions;
    };
    QueriesComponent.prototype.openVisualQueryDesigner = function (params) {
        var query = params.data;
        this.dialogService.openQueryDesigner(query.Id);
    };
    QueriesComponent.prototype.cloneQuery = function (query) {
        var _this = this;
        this.snackBar.open('Copying...');
        this.pipelinesService.clonePipeline(query.Id).subscribe(function () {
            _this.snackBar.open('Copied', null, { duration: 2000 });
            _this.fetchQueries();
        });
    };
    QueriesComponent.prototype.openPermissions = function (query) {
        this.router.navigate(["permissions/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].metadata.entity.type + "/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].keyTypes.guid + "/" + query.Guid], { relativeTo: this.route.firstChild });
    };
    QueriesComponent.prototype.exportQuery = function (query) {
        this.contentExportService.exportEntity(query.Id, 'Query', true);
    };
    QueriesComponent.prototype.deleteQuery = function (query) {
        var _this = this;
        if (!confirm("Delete Pipeline '" + query.Name + "' (" + query.Id + ")?")) {
            return;
        }
        this.snackBar.open('Deleting...');
        this.pipelinesService.delete(query.Id).subscribe(function (res) {
            _this.snackBar.open('Deleted', null, { duration: 2000 });
            _this.fetchQueries();
        });
    };
    QueriesComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(!!this.route.snapshot.firstChild.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () { return !!_this.route.snapshot.firstChild.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            _this.fetchQueries();
        }));
    };
    QueriesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_pipelines_service__WEBPACK_IMPORTED_MODULE_16__["PipelinesService"] },
        { type: _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_9__["ContentExportService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_14__["DialogService"] }
    ]; };
    QueriesComponent.propDecorators = {
        enablePermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    QueriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-queries',
            template: _raw_loader_queries_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_queries_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_pipelines_service__WEBPACK_IMPORTED_MODULE_16__["PipelinesService"],
            _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_9__["ContentExportService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_14__["DialogService"]])
    ], QueriesComponent);
    return QueriesComponent;
}());



/***/ }),

/***/ "4rFR":
/*!***********************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-app-parts/import-app-parts.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ImportAppPartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAppPartsComponent", function() { return ImportAppPartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_import_app_parts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./import-app-parts.component.html */ "27N0");
/* harmony import */ var _import_app_parts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-app-parts.component.scss */ "R9YX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/import-app-parts.service */ "WlMA");









var ImportAppPartsComponent = /** @class */ (function () {
    function ImportAppPartsComponent(dialogData, dialogRef, importAppPartsService, snackBar) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.importAppPartsService = importAppPartsService;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.isImporting$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.importFile$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.importResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.isImporting$, this.importFile$, this.importResult$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), isImporting = _b[0], importFile = _b[1], importResult = _b[2];
            return ({ isImporting: isImporting, importFile: importFile, importResult: importResult });
        }));
    }
    ImportAppPartsComponent.prototype.ngOnInit = function () {
        if (this.dialogData.files != null) {
            this.importFile$.next(this.dialogData.files[0]);
            this.importAppParts();
        }
    };
    ImportAppPartsComponent.prototype.ngOnDestroy = function () {
        this.isImporting$.complete();
        this.importFile$.complete();
        this.importResult$.complete();
    };
    ImportAppPartsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ImportAppPartsComponent.prototype.filesDropped = function (files) {
        var importFile = files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
        this.importAppParts();
    };
    ImportAppPartsComponent.prototype.fileChange = function (event) {
        var importFile = event.target.files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
    };
    ImportAppPartsComponent.prototype.importAppParts = function () {
        var _this = this;
        this.isImporting$.next(true);
        this.importAppPartsService.importAppParts(this.importFile$.value).subscribe({
            next: function (result) {
                _this.isImporting$.next(false);
                _this.importResult$.next(result);
            },
            error: function (error) {
                _this.isImporting$.next(false);
                _this.importResult$.next(null);
                _this.snackBar.open('Import failed. Please check console for more information', null, { duration: 3000 });
            },
        });
    };
    ImportAppPartsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_8__["ImportAppPartsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    ImportAppPartsComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ImportAppPartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-import-app-parts',
            template: _raw_loader_import_app_parts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_import_app_parts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_8__["ImportAppPartsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ImportAppPartsComponent);
    return ImportAppPartsComponent;
}());



/***/ }),

/***/ "5Gkd":
/*!*************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/export-app-parts/export-app-parts.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-input {\n  padding-bottom: 8px;\n}\n\n.mat-hint {\n  font-size: 12px;\n}\n\n.content-info__title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.content-info__subtitle {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.content-info__list {\n  font-size: 14px;\n  list-style-type: none;\n}\n\n.content-info__base {\n  padding: 0;\n}\n\n.content-info__item {\n  border-top: 1px solid #DDD;\n  padding: 2px;\n}\n\n.option-box {\n  margin: 8px 0;\n}\n\n.option-box__text {\n  white-space: normal;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vc3ViLWRpYWxvZ3MvZXhwb3J0LWFwcC1wYXJ0cy9leHBvcnQtYXBwLXBhcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFLRTtFQUNFLFVBQUE7QUFISjs7QUFNRTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQU9FO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBTEoiLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9leHBvcnQtYXBwLXBhcnRzL2V4cG9ydC1hcHAtcGFydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1pbnB1dCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuLm1hdC1oaW50IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWluZm8ge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9fc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19saXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcblxyXG4gICZfX2Jhc2Uge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEREQ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG59XHJcblxyXG4ub3B0aW9uLWJveCB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuXHJcbiAgJl9fdGV4dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "6Az3":
/*!**************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-usage-id/views-usage-id.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ViewsUsageIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsUsageIdComponent", function() { return ViewsUsageIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_views_usage_id_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./views-usage-id.component.html */ "BjQm");
/* harmony import */ var _views_usage_id_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views-usage-id.component.scss */ "ci/X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/helpers/copy-to-clipboard.helper */ "c2Rc");






var ViewsUsageIdComponent = /** @class */ (function () {
    function ViewsUsageIdComponent(snackBar) {
        this.snackBar = snackBar;
    }
    ViewsUsageIdComponent.prototype.agInit = function (params) {
        this.tooltip = params.value;
        if (this.tooltip == null) {
            return;
        }
        var idPart = this.tooltip.split('\n')[0];
        this.id = idPart.split(' ')[1];
    };
    ViewsUsageIdComponent.prototype.refresh = function (params) {
        return true;
    };
    ViewsUsageIdComponent.prototype.copy = function () {
        Object(_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_5__["copyToClipboard"])(this.tooltip);
        this.snackBar.open('Copied to clipboard', null, { duration: 2000 });
    };
    ViewsUsageIdComponent.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    ViewsUsageIdComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-views-usage-id',
            template: _raw_loader_views_usage_id_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_views_usage_id_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ViewsUsageIdComponent);
    return ViewsUsageIdComponent;
}());



/***/ }),

/***/ "6c6K":
/*!*****************************************************************!*\
  !*** ./src/app/app-administration/models/content-type.model.ts ***!
  \*****************************************************************/
/*! exports provided: ContentType, ContentTypeMetadata, ContentTypeEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeMetadata", function() { return ContentTypeMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeEdit", function() { return ContentTypeEdit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var ContentType = /** @class */ (function () {
    function ContentType() {
    }
    return ContentType;
}());

var ContentTypeMetadata = /** @class */ (function () {
    function ContentTypeMetadata() {
    }
    return ContentTypeMetadata;
}());

var ContentTypeEdit = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ContentTypeEdit, _super);
    function ContentTypeEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContentTypeEdit;
}(ContentType));



/***/ }),

/***/ "6meI":
/*!****************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/views-usage/views-usage-grid.helpers.ts ***!
  \****************************************************************************************/
/*! exports provided: blockIdValueGetter, moduleIdValueGetter, moduleIdClassGetter, pageIdValueGetter, pageIdClassGetter, nameClassGetter, onNameClicked, statusCellRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockIdValueGetter", function() { return blockIdValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleIdValueGetter", function() { return moduleIdValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleIdClassGetter", function() { return moduleIdClassGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageIdValueGetter", function() { return pageIdValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageIdClassGetter", function() { return pageIdClassGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameClassGetter", function() { return nameClassGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNameClicked", function() { return onNameClicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusCellRenderer", function() { return statusCellRenderer; });
function blockIdValueGetter(params) {
    var data = params.data;
    return "ID: " + data.Block.Id + "\nGUID: " + data.Block.Guid;
}
function moduleIdValueGetter(params) {
    var data = params.data;
    if (data.Module == null) {
        return;
    }
    return "ID: " + data.Module.Id + "\nUsageId: " + data.Module.UsageId + "\nTitle: " + data.Module.Title;
}
function moduleIdClassGetter(params) {
    if (params.value == null) {
        return 'no-outline';
    }
    return 'id-action no-padding no-outline';
}
function pageIdValueGetter(params) {
    var data = params.data;
    if (data.PageId == null) {
        return;
    }
    return "ID: " + data.PageId;
}
function pageIdClassGetter(params) {
    if (params.value == null) {
        return 'no-outline';
    }
    return 'id-action no-padding no-outline';
}
function nameClassGetter(params) {
    if (params.value == null) {
        return 'no-outline';
    }
    return 'primary-action highlight';
}
function onNameClicked(params) {
    if (params.value == null) {
        return;
    }
    var data = params.data;
    window.open(data.Url, '_blank');
}
function statusCellRenderer(params) {
    var status = params.value;
    if (status == null) {
        return;
    }
    return "\n    <div style=\"height: 100%;display: flex;align-items: center;\">\n      " + (status.IsVisible ? '<span class="material-icons-outlined">visibility</span>' : '<span class="material-icons-outlined">visibility_off</span>') + "\n      " + (status.IsDeleted ? '<span style="margin-left: 8px;" class="material-icons-outlined">delete</span>' : '') + "\n    </div>\n  ";
}


/***/ }),

/***/ "7L/z":
/*!**********************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/data-actions/data-actions.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DataActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataActionsComponent", function() { return DataActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_data_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./data-actions.component.html */ "29VN");
/* harmony import */ var _data_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-actions.component.scss */ "x2Nd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var DataActionsComponent = /** @class */ (function () {
    function DataActionsComponent() {
    }
    DataActionsComponent.prototype.agInit = function (params) {
        this.params = params;
        this.contentType = this.params.data;
        var enablePermissions = this.params.enablePermissionsGetter();
        this.enablePermissions = enablePermissions && this.isGuid(this.contentType.StaticName);
    };
    DataActionsComponent.prototype.refresh = function (params) {
        return true;
    };
    DataActionsComponent.prototype.createOrEditMetadata = function () {
        this.params.onCreateOrEditMetadata(this.contentType);
    };
    DataActionsComponent.prototype.openPermissions = function () {
        this.params.onOpenPermissions(this.contentType);
    };
    DataActionsComponent.prototype.editContentType = function () {
        this.params.onEdit(this.contentType);
    };
    DataActionsComponent.prototype.openRestApi = function () {
        this.params.onOpenRestApi(this.contentType);
    };
    DataActionsComponent.prototype.exportType = function () {
        this.params.onTypeExport(this.contentType);
    };
    DataActionsComponent.prototype.openDataExport = function () {
        this.params.onOpenDataExport(this.contentType);
    };
    DataActionsComponent.prototype.openDataImport = function () {
        this.params.onOpenDataImport(this.contentType);
    };
    DataActionsComponent.prototype.deleteContentType = function () {
        this.params.onDelete(this.contentType);
    };
    DataActionsComponent.prototype.isGuid = function (txtToTest) {
        var patt = new RegExp(/[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i);
        return patt.test(txtToTest);
    };
    DataActionsComponent.ctorParameters = function () { return []; };
    DataActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-data-actions',
            template: _raw_loader_data_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_data_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DataActionsComponent);
    return DataActionsComponent;
}());



/***/ }),

/***/ "8LXB":
/*!********************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/views/views.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-wrapper mat-tab-grid-wrapper\">\r\n  <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"views$ | async\" [modules]=\"modules\" [gridOptions]=\"gridOptions\"\r\n    appDragAndDrop [allowedFileTypes]=\"'json'\" (filesDropped)=\"importView($event)\">\r\n  </ag-grid-angular>\r\n\r\n  <div class=\"more-actions-box\">\r\n    <button mat-button matTooltip=\"Configure polymorphism\" (click)=\"editPolymorphisms()\">\r\n      <img class=\"polymorph-logo\" [src]=\"polymorphLogo\">\r\n      <span>Polymorphism {{ polymorphStatus$ | async }}</span>\r\n    </button>\r\n\r\n    <button mat-button matTooltip=\"Import view\" (click)=\"importView()\">\r\n      <mat-icon>cloud_upload</mat-icon>\r\n      <span>View</span>\r\n    </button>\r\n  </div>\r\n\r\n  <button mat-fab mat-elevation-z24 class=\"grid-fab\" matTooltip=\"Create a new view\" (click)=\"editView(null)\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "9FAV":
/*!*****************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/views-usage/views-usage-dialog.config.ts ***!
  \*****************************************************************************************/
/*! exports provided: viewsUsageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewsUsageDialog", function() { return viewsUsageDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var viewsUsageDialog = {
    name: 'VIEWS_USAGE_DIALOG',
    initContext: false,
    panelSize: 'large',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ViewsUsageComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views-usage.component */ "r5Qb"))];
                    case 1:
                        ViewsUsageComponent = (_a.sent()).ViewsUsageComponent;
                        return [2 /*return*/, ViewsUsageComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "9X/D":
/*!********************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/data-items/data-items.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chip-box {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vYWctZ3JpZC1jb21wb25lbnRzL2RhdGEtaXRlbXMvZGF0YS1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL2FnLWdyaWQtY29tcG9uZW50cy9kYXRhLWl0ZW1zL2RhdGEtaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hpcC1ib3gge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "A424":
/*!******************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-type/views-type.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewsTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsTypeComponent", function() { return ViewsTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_views_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./views-type.component.html */ "IUqT");
/* harmony import */ var _views_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views-type.component.scss */ "1p4O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _views_views_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/views.helpers */ "p9sG");





var ViewsTypeComponent = /** @class */ (function () {
    function ViewsTypeComponent() {
    }
    ViewsTypeComponent.prototype.agInit = function (params) {
        this.value = params.value;
        var view = params.data;
        var type = Object(_views_views_helpers__WEBPACK_IMPORTED_MODULE_4__["calculateViewType"])(view);
        this.icon = type.icon;
    };
    ViewsTypeComponent.prototype.refresh = function (params) {
        return true;
    };
    ViewsTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-views-type',
            template: _raw_loader_views_type_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_views_type_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ViewsTypeComponent);
    return ViewsTypeComponent;
}());



/***/ }),

/***/ "A7zz":
/*!*****************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-view/import-view-dialog.config.ts ***!
  \*****************************************************************************************/
/*! exports provided: importViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importViewDialog", function() { return importViewDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var importViewDialog = {
    name: 'IMPORT_VIEW_DIALOG',
    initContext: false,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ImportViewComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./import-view.component */ "bBWv"))];
                    case 1:
                        ImportViewComponent = (_a.sent()).ImportViewComponent;
                        return [2 /*return*/, ImportViewComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "AW+H":
/*!************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/web-api/web-api.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-wrapper mat-tab-grid-wrapper\">\r\n  <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"webApis$ | async\" [modules]=\"modules\"\r\n    [gridOptions]=\"gridOptions\">\r\n  </ag-grid-angular>\r\n\r\n  <button mat-fab mat-elevation-z24 class=\"grid-fab\" matTooltip=\"Create a new controller\" (click)=\"addController()\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "AaLG":
/*!******************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/url-loader/dist/cjs.js!./src/app/app-administration/views/polymorph-logo.png ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADcCAYAAACPvGZzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFIVJREFUeNrsnVusJFUVhnftbnw2JibGhHcfNRpuE2AiIBIYZuacMzPMjCFeIBiIEYjxipAYDMIDRAlqVAKJAg4wDKCCRlSQEKPIu+HVxJiYGB9FurusXbfeXae6u6r2ba1d/5r09PV0V1Xvr/5/rbWrOknTVCAQCDohsQkQCECJQCAAJQIBKBEIBKBEIAAlAoEAlAgEoEQgEIASgQCUCASCUEyxCfpHMr0ccxMHRjp7LcFW2DK+MPcVAAJUQAkQEQAUUAJEwAkoASMCcAJKwAg4ASWARABOQAkYEfGDORooXQCZDQ4Q0m3bA05AaR9IAEgT1hjBjB5KEyABIg84YwMzaihtWVbASd/axgRmtFAOBfIjTz8hptnX++ax04DTM4xq+5pAGguYUUJpqpAXP/ukmIjiEJo/7p0CmB5grJ9PLls+MUlGCaYEkELcdtOH8ksV52UXpZbvybbO1c89uW9Quaomjg1IBeMKkNrz53/mDnH+jbcLMU+df/+AkkEOqdRRQVnAmYhD554Sh59/CnAawNgG5L4oAVRAUhgHgNIzkLoytj32ys6pHMhJqZqT7PbuCz8Xe9kFcJrB2Abktm144O5vj2a7jfLMA21Atm6cpEhrZAak2lA5oNmNk784I05nlz6DCjC+tjkf76CSfcDkrJYykkGQ2gJSf/6FIydzICdlzWEi1e3ivgL2xl+egWr2zBu7/M3YFXNUStlVIfXXKesqpajhlMlSQc/LLje9dEbc/NLTo4ezc97YBmTPXLIrmFzVUkYwGFKbQDbjzPU3rKhjBeO0srUK1uz2rS8/LW779TOjs7SDrGqLbe0bMYMpAeT2v1Ewqlwyt7BiFcbC2iaFtc3u3/GbZ0ahmsYwiv0tEMQI7evQ+Ol1J+q8UodRh7MqBKn7X/rts+LL2SVWOE1h7FPcGaNaSsYDw6ltbf7to9eeyIGblgBWt6ctapnfz1709d+dFXdll1jgHJo3mhZ3xlb4ifq8ryZAtsVSHbNBVd5PsvtJfl3dr24n9e17/nA2/5t7Du6uDEouU/a2TY0b9H6WJgr02YlzmYLHUil92hEd7B9cc7y2qtPSulbFn4lWpc2fk2WlVrO99772HCvVtJE32izujMXGRptT2lRJ/b0qq1rDWFrV3L6KMr+sLW7R29R7nfe//px44PVz5OF0AiOKO3FCGXpv99DVxwrYNOhqGOWyjynz/HIJ4/K5AugH3zgnHnqDHpw280YXxZ0xqKWMEUjbuWTzPVcmFOjAica0vESDVBSQVgpaXb73p+fFw9nFRRGEhFUNvF5QypHEd67c62RVpTbBQAdRahXcygb/8M/PB1NN1zC6VsnY1JINlCFVsu29771idwlei1WdtBWC6il6Sfk3Rfm7eu2P//KCePTNF7zB6dyqBlDJGFokUbVEXALZukdLli2RSdkmydsgomyblI/J+rn9r5VaSyUpbe7jb72Yv/+nP3r9vkFtu9jiGsb68zy3QLrs5Km2SFgoJSW7oYN/98Hd+njLVqtaKadmVfXXVlXcKidV9xNtmCg4K0BtKI6PvHGTbfUV3G1sNDmlT5VcmRcrV2FsWlXZsKqtOaYoHlsXbWD2hTMIjAItkCihpJ6Uf/XSnZXDuWRDNfVJ61IuYZxoMCcdTNQ61dwGp8+8MURxJ0a1lDEA6TuX3KeWWgVWV8JVWytWrGpXGLvCScaqBijuxFb0QUvEQtx54OgKfCZWtQ+cbRBSgDG0SnJ3Y5L7hgqhkm2f/cVLjlqzqiaqSQJGQWeiAEe1ZK2UIYFs3ZiWrSpXMCi2QDippcQGsrdj+PyFR0pVtGtV14XqY+q9zHW2NpRtpRLcij6SK5CUVHJf0ceBVW0Dcp2VtdFCsaHOaIGM0L5SjM9+7LBzGLep47p80wucRG0rJ7UkBSVHlWxbpiY0LmHcVOjxDSf1o0C4FH3YzX2lCKTLaAN8G4jr4Gy+n/VTkjAr7mwSh5DzYiWlDcEdINtqOUQZu8JpWzW5HCvJQS0l10Ef8zJ2zRtNwLQJJ8cWCGWRkGPfAL6tp4u8MTicc15fH/Wiz5QLkJxySbWsj/zkb97zRlNLOyTfRAtk5PY1RrX0qYxO8k2mtpWyWgaFMkaVbFvmNjBd540+LC33E2FRLfpMOQ3uWJWTAox9LW2MxZ1N4uGzRSJDrmjs1rWplpSsqrGlncfx9VG0sZLLoI4BTE4wdl1eFHcigXIMKqlCVWCbVVhOMK6FU1PJvz/2UH6BWjLOKWMu7ugwxhrrqskKTKjmCOxrDEBeeXCSX7YNajahFXeaEHJWTUpq6RXKmFWyzarqMMYAZttyxwQnlRYJuZYINyDbrKoOYFS2dUMLpHpMh7G6HZutdd0ikT5XJDabus2qboKVnVp2bIGsU07YWGJQxmZb+8LIXUX1HUhX1Ysp3/QdKPRYzBtt5GiUVbKvDeWab4ZWS+dQxqCSQ6xqV7WkDqaN5eMIZ8iiT1Q/hefapnK1nyFUcpOlbRaDOBeCXBR9pOsF5qqSNpWRq1q6Wi4uqhlKLYMrJTUgfaqjet9XXp3TBdLhUSAxtVBsq6V0uaDcrKprdQyhSqa21XVQb6GEKPrIkEBSUcmQMFLMUYe0QMZiaX0EWiKBYCStloEOXm5TzTGqZZKmdm0KB5WkWFXVc8uQh3e5ziX7RK2Uk6Q3IC7ijW99Y+trbOSWQZQyFJBteSNVCzk2lexiabuCETJsqKWktkA+80Zq1jm0jeUyw0iBGQJOXyrtvSXiWyU5KWPIFgkl27oJCB3G6ja1s9KZtkikzQWhpowhq6rsVIvJibAUgE0IfSqnj6KP9AmkD5XkDmOI5QzRAnEFZwwRVUuEM4xB1ZLx+VtDqKZrtTSGkoJK2j6kipJaugaT/TmDAllal3msl0KPKyDR3rAAZERnOV9XDApZCBpS9JGmHxjKpsZmVYOo5TzO0+/6Uk1XNtZ5TmlbJWOH0ZfqcyzuULe0tmIwlL5VMra8MXjuN5If53ENpwu1lC6BtKGSY7CqvtUyhuKOLTh9gknGvgJGgjCNRCVD5psmYiZdvbGJSgLG9WppCuYYVdKHpbWplk5aIkOBRIvDg9KOWCXXgeRzPm2XFgkJ+wqr6kkt5yk2pMN80xbIsi/ltlUSMA4D08S2QiXp5ZsklHLsLQ4rVnSASgJIt/lmF7XcJm5Wc8ouKom80Vwtq2MuFZhdTh2C4g6PfLO3UppOFkDeGDCgkl7zTVNovdhXwOgut9ymglBJmvnmJpGzZl/brCusqh8buxFIqCQ7S+tEKWFV/cZaNUQLJJilNYFUAsY4bOwmUKGSPCxtL/vapciD9kZ4tVypxMK2Bre0pOwrgAyjlpU6orhDw9I6VUrAyCygkqSUM4hSIm8kpJYfPoQNQjDf7BOdfuCH229NQiUji0kS5Ve17mgR/BQeAkEsppaIZ7nymQPIr0P+9JytqIs7parEsE76eg1dn0XmBOcLda1MRJobiUV5Xd1Wz820xxfZ6+ei+Lt5/ly6fF6ZkUVxPctfVzxePT8rX/9Odv373VPhcspqcCMIQooIEkOBtGpfFZiAMzyA//zgfwBm4Hh555TR31s/HUgFJldLGwuQCP9x7shJK+/TSSm7nHa9CSGUM1xALf3GmetvEGcP37CRh2BKWS2IDqO6DdX0r5Lq/gf+8V5sJNMxveG5nx06sVWcguaUUE0ayrgNXoSdePzaE/vGvD7uTca7NaVsKuI61US+aV8lN8EKteynftviR9ccd6KOzuwrLC09ldQhjqV3GSIe+eQxqzBuqtN4m9EDS+tXJdughY3tHw9+Yk989+pjG61qm2v0klN2qcBuW5i2lQGcw4FEC8RtPHDVXi8YbUWQua+AM5zFhVpuj3uv2BX3XbHnNG/0mlP2yReRb/pTSRR9tsc9B3eN88YuwmL1t0T6/nY78k33yuc6Jx1LfPPyHWOramvMOrGvQxYOltY9SLCx++Mrl+6Ir122482qdhG26ZA3dXnQM/qbblUSUcSdB44aW1UXKulMKW0s5DrlhEpCLU3iCxcfEbdfctTYqrpSycFQusotkW9uBtKWSo5VbW+96IgTGG2PR6ctEVsLi3yThwpTjZsvOCxuufCwt7zRVMimJh/SJbe02eIYW77pcqLAGFokbTsc2+PEhTCwPHHW2PJN13YzNrVU69NcJxd5Y9cx1zfdk4ZwJDYXHvmmX1BiLPr4gNF1TC2AkYQ8L2yMlhbzW2laVR8q6dW+ulYwtFDGqZa+rKpLJ2ldKfuopY95rer9OatmCJXkWPTxrYw+d/ZRniE9hhZKKNvKQS055I0mvfypzYWgopZc882QQHBQy5Dq6DMlklT2Dsg3w6skZbWkoI4uizvB7WsoICjnlRRA4FD04djiCGZf+9rYkF9qc8dg+iMyNoFEC4SOVQ2hkvlndfl9ygErkPYBhNqG9g0nNSj13DLktuAwVlykb65Oxhx0pk/faA48n9aNokqGWI51/UYK4Xuc4kdjN4DpE06qttXHNqDc4vBpW53llH1zS0onyqrA1AeJy3yTck/QR4uEWt5IJZwqJdUWSRc4fVpa6sUd2+tOeWpcaJUkY1+p9gxdWloOM2dst0i4wBhaeCTHhaagmiaDlFMLxNbycYMxpFBIbIRwcHKLIetKuapKVXAkpYXnMGHcNN/kOFFgyHJytqqhxyFaIoHyTa4zd7atI/e8MVRxJwiUManlUEvL2ep2KfrEVsQJFVOfH0Z9Xqypanbtb8Y2vzWWfiMFlcyXw8Xc1y0rTmZebPUlPPbXF0WSuBukCsxYJp1vm1Dg6oxxPsdDSCCD5JQUbewi2zGpi63906ZCEHeVXLf83K0qpbQJhZ4s5qkCM7sIu2C2WVfuJ0BuW/6x5I2+eu6S8sr52nsVSpldLxSgdlVz3cDmBue6ZY4BSGrFRShlFrMMwPmiBNOBaqr49+fen1+4qWYbjLqF5X4aTyrFHRJQUlJLBeFcLFVyvrCjmm1VyTYwqcLZBmMFZExgUotpyA+n0iKpwEuTJFNIISZCLVIi1F5DPS5lKhJ13aNEqwPZBLG6/75H/7UPAGpnHmhTx1iCokqysa+u98R1oafMLSvVrC3tYvl8zJZ2nVVdB+QY1DLEARWSy0q7/NKrPHJegqdgnJdw5vcrWBfL9slQlVwHZ0hL2xfGGBSU8k5kKhCFAmZmVe2h0npPleYGNs3trLKxaW1fc1ub/ZPqFUl32LqA6dvSbiriDBnoMbVHQh12KDmtvKu9m25dK8Wcp0tVbFPNxRrVNJ3fus7S2lbObVXVPsFNLalbbTI5ZciDoWc1jOk+OOvHsxv168pcU3++6Wj7qKTPfNPEqsYw4KkWd9gVelx/6QrEWaPgU+eRdd+yfF2jfaJPOnBxFIhN1XQJI1okkeaUoVokCqxESV1SZJKTMm+s8kqh5Zp5llm2T4SWa95ywWFrKmk73xxLiyMGlWSplC72xHlVVSzzyEo1q2prUzXr12mq6SP65puurWqMaknhnFKS60ax+aXPRVr3InPgFgWIc6FNu9PB1ItD2Y1bLzriTCWH5Ju+YeSgwJx2Epj7KoqccFZWWReLVeiaqrloUU2fQPbNN33BSBkELraVNJS+1VKvvirVnK1RzdUqbfH8HQeOBt1WbaoZWrVQ9Imo0BOq6FP0GrW5rklxX5bVHXU3L+jIvBJUPJ6kIhHhVLIKvfizrsAz5p/X46aSpKHss9FNZ5Eoiyoz6CblDJ78S1K9R6mUMhGT7OvKi62ZPKZJOXE9e+Fdl+0EW+82GPUdQ7NS6xtM/bdIqM/0oXbCcNI5pa+NVRVvZmXOWFdVF1WVNS17kcvJA3ddvhNMJZtAtllYCoeIhVZortY5irmvpnvi6ugP1W9USihLO6v+zw/lyvuSxVzX/PMC7Ve3qeO65ygcIkZVLSn+rAZ5KH38pJ5SwKRMKHMes9wxze1smWkmZR6ZT0MX4r6P73lVyb4wdoXTV4skxOFonAtMOEqktK35kSCiyB/TRbqimisHQHtsgZjC2Pa3IVXTl1pyLO6wySn7bryhe0ellLN6zqt2RMhimV9W/cn7r9ojkzcOBdN3vokWSaRK6bJFsiims+Y2ddFQzaTKL+tc061K2lZHDvkmVDJy+zrEIs0yBCdpUhZ7RHlgc5E/5ja2tLAPX3OcjVWllm9SapFQ/81UVtPsXNnY6tCraq6rsrDv6qcHya6/rwFpGxZXVnUInC4trWsFjsUao9AjRA1jro6JyFWzor9SzZjUkYKlDaWWHH5ZnB2ULlokefU1Kexr3ZMs76sPevy6E1ahoQajTzhdtUhiKiBBKUuVFPmJsIrWR92TzHuXiTVwqMPoO9+0pZYxFHfY5pSucstZNbWuOgJElC2S7MYTh05EkzdSyTfRIolUKW22SN7J3uW8Mm9UU+ny2TwZ9mePnDRWNG7qSCHfHLNKjsK+drFIs3JC+jwv8qRimpR9kRFZVd9w+myRcAKSPZS2ij7viuX0uUXxzuJXO6cGwRQrjC7yTdOiT6zWF6cDKXPKd0sbq1TznYHzWznnjaHzzb6AxWhbo4HSRtFHQfi/RVrD+eruqd5WtQ3IsYTJfNoh+WjsxaEockpTG5sfxFzmkQvRfX7rWKyqL0vbJbfsAyRHlRylfW37UmclmP/Nrt86dnqwMo4ZSBNL27VFMpb2STTV1z4tkrY9sirwvH389FbFG7NNtaGaviwrV5WMTin7fBF9v+Sx542u802bEwo4AxmVUprG2yc+1Qob8kZ/+aaNebHcgcx3SmmaRjcATGb6bAISMNqJth1dBacJlDEAGS2UJmA2z2MDIP3COXYgo4bSVDEBIx84YwJSRdQtERtfls29OQJAjl4pbasm1BOWFVASBhPB3wUBSoCJAIyAEnACSEAJOBGAEVACTsAIKAEnAjACSgAKEAElApACQkCJQCCKwImzEAhAiUAgACUCASgRCASgRCAAJQKBAJQIBKBEIBCAEoEAlAgEAlAiEAhAiUBwif8LMAC8si4r3FdHgQAAAABJRU5ErkJggg==");

/***/ }),

/***/ "AaLS":
/*!**********************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/data-fields/data-fields.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chip-box {\n  width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vYWctZ3JpZC1jb21wb25lbnRzL2RhdGEtZmllbGRzL2RhdGEtZmllbGRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vYWctZ3JpZC1jb21wb25lbnRzL2RhdGEtZmllbGRzL2RhdGEtZmllbGRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoaXAtYm94IHtcclxuICB3aWR0aDogMzJweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "AqVY":
/*!********************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/sub-dialogs/views-usage/views-usage.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-component-wrapper\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div [matTooltip]=\"viewTooltip$ | async\">View: {{ (viewUsage$ | async)?.Name }}</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <p class=\"dialog-description\">\r\n    This shows where this view is being used. Read about the\r\n    <a href=\"https://r.2sxc.org/content-in-dnn\" target=\"_blank\">connections between DNN and 2sxc Views</a>\r\n    to make good decisions if you're doing clean-up or just want to better know what this is all about.\r\n    <em>Before you get confused about some things you see here, do read the FAQ on that page.</em>\r\n  </p>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <div class=\"grid-wrapper\">\r\n    <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"data$ | async\" [modules]=\"modules\"\r\n      [gridOptions]=\"gridOptions\">\r\n    </ag-grid-angular>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "B487":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-usage-status-filter/views-usage-status-filter.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  padding: 12px 12px 0;\n}\n\n.mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 12px;\n  width: 160px;\n  height: 104px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vYWctZ3JpZC1jb21wb25lbnRzL3ZpZXdzLXVzYWdlLXN0YXR1cy1maWx0ZXIvdmlld3MtdXNhZ2Utc3RhdHVzLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hZy1ncmlkLWNvbXBvbmVudHMvdmlld3MtdXNhZ2Utc3RhdHVzLWZpbHRlci92aWV3cy11c2FnZS1zdGF0dXMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBwYWRkaW5nOiAxMnB4IDEycHggMDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "BPga":
/*!***************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-app-parts/import-app-parts-dialog.config.ts ***!
  \***************************************************************************************************/
/*! exports provided: importAppPartsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importAppPartsDialog", function() { return importAppPartsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var importAppPartsDialog = {
    name: 'IMPORT_APP_PARTS',
    initContext: false,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ImportAppPartsComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./import-app-parts.component */ "4rFR"))];
                    case 1:
                        ImportAppPartsComponent = (_a.sent()).ImportAppPartsComponent;
                        return [2 /*return*/, ImportAppPartsComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "BjQm":
/*!*********************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/views-usage-id/views-usage-id.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div matRipple class=\"id-box highlight\" [matTooltip]=\"tooltip\" *ngIf=\"id\" (click)=\"copy()\">\r\n  <span class=\"id\">{{ id }}</span>\r\n  <mat-icon class=\"icon\">file_copy</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "CjY2":
/*!********************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-show/views-show.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL2FnLWdyaWQtY29tcG9uZW50cy92aWV3cy1zaG93L3ZpZXdzLXNob3cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "FN/O":
/*!*************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/export-app/export-app.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-info__title {\n  font-size: 18px;\n  margin: 24px 0 0;\n  font-weight: bold;\n}\n.app-info__content {\n  font-size: 14px;\n}\n.app-info__content li {\n  padding: 2px 0;\n}\n.options-wrapper {\n  margin: 24px 0;\n}\n.option-box {\n  margin: 2px 0;\n}\n.option-box__text {\n  white-space: normal;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vc3ViLWRpYWxvZ3MvZXhwb3J0LWFwcC9leHBvcnQtYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBR0k7RUFDRSxjQUFBO0FBRE47QUFNQTtFQUNFLGNBQUE7QUFIRjtBQU1BO0VBQ0UsYUFBQTtBQUhGO0FBS0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFISiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL3N1Yi1kaWFsb2dzL2V4cG9ydC1hcHAvZXhwb3J0LWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaW5mbyB7XHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5vcHRpb25zLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMjRweCAwO1xyXG59XHJcblxyXG4ub3B0aW9uLWJveCB7XHJcbiAgbWFyZ2luOiAycHggMDtcclxuXHJcbiAgJl9fdGV4dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Fam9":
/*!*************************************************************!*\
  !*** ./src/app/app-administration/views/views.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsComponent", function() { return ViewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_views_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./views.component.html */ "8LXB");
/* harmony import */ var _views_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views.component.scss */ "rmZ+");
/* harmony import */ var _url_loader_polymorph_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./polymorph-logo.png */ "AaLG");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "KLQV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/boolean-filter/boolean-filter.component */ "CeOT");
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ "JzAw");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ "QjRa");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ "uuTa");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "H0VJ");
/* harmony import */ var _ag_grid_components_views_actions_views_actions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ag-grid-components/views-actions/views-actions.component */ "Spiu");
/* harmony import */ var _ag_grid_components_views_show_views_show_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ag-grid-components/views-show/views-show.component */ "RUxz");
/* harmony import */ var _ag_grid_components_views_type_views_type_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ag-grid-components/views-type/views-type.component */ "A424");
/* harmony import */ var _services_views_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/views.service */ "uzd0");
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views.helpers */ "p9sG");





















var ViewsComponent = /** @class */ (function () {
    function ViewsComponent(viewsService, router, route, snackBar, dialogService) {
        var _this = this;
        this.viewsService = viewsService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.views$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.polymorphStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.polymorphLogo = _url_loader_polymorph_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_4__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_12__["defaultGridOptions"]), { frameworkComponents: {
                idFieldComponent: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_11__["IdFieldComponent"],
                booleanFilterComponent: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_10__["BooleanFilterComponent"],
                viewsTypeComponent: _ag_grid_components_views_type_views_type_component__WEBPACK_IMPORTED_MODULE_18__["ViewsTypeComponent"],
                viewsShowComponent: _ag_grid_components_views_show_views_show_component__WEBPACK_IMPORTED_MODULE_17__["ViewsShowComponent"],
                viewsActionsComponent: _ag_grid_components_views_actions_views_actions_component__WEBPACK_IMPORTED_MODULE_16__["ViewsActionsComponent"],
            }, columnDefs: [
                {
                    headerName: 'ID', field: 'Id', width: 70, headerClass: 'dense', cellClass: 'id-action no-padding no-outline',
                    cellRenderer: 'idFieldComponent', sortable: true, filter: 'agTextColumnFilter',
                    cellRendererParams: {
                        tooltipGetter: function (paramsData) { return "ID: " + paramsData.Id + "\nGUID: " + paramsData.Guid; },
                    },
                },
                {
                    headerName: 'Show', field: 'IsHidden', width: 70, headerClass: 'dense', cellClass: 'no-outline', cellRenderer: 'viewsShowComponent',
                    sortable: true, filter: 'booleanFilterComponent', valueGetter: this.showValueGetter,
                },
                {
                    headerName: 'Name', field: 'Name', flex: 2, minWidth: 250, cellClass: 'primary-action highlight',
                    sortable: true, filter: 'agTextColumnFilter', onCellClicked: this.editView.bind(this),
                },
                {
                    headerName: 'Type', field: 'Type', width: 70, headerClass: 'dense', cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter', cellRenderer: 'viewsTypeComponent', valueGetter: this.typeValueGetter,
                },
                {
                    headerName: 'Used', field: 'Used', width: 70, headerClass: 'dense', cellClass: 'primary-action highlight',
                    sortable: true, filter: 'agNumberColumnFilter',
                    onCellClicked: function (event) { _this.openUsage(event); }
                },
                {
                    headerName: 'Url Key', field: 'ViewNameInUrl', flex: 1, minWidth: 150, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Path', field: 'TemplatePath', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Content', field: 'ContentType.Name', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Default', field: 'ContentType.DemoId', flex: 1, minWidth: 150, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter', valueGetter: this.contentDemoValueGetter,
                },
                {
                    headerName: 'Presentation', field: 'PresentationType.Name', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Default', field: 'PresentationType.DemoId', flex: 1, minWidth: 150, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter', valueGetter: this.presentationDemoValueGetter,
                },
                {
                    headerName: 'Header', field: 'ListContentType.Name', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Default', field: 'ListContentType.DemoId', flex: 1, minWidth: 150, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter', valueGetter: this.headerDemoValueGetter,
                },
                {
                    headerName: 'Header Presentation', field: 'ListPresentationType.Name', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Default', field: 'ListPresentationType.DemoId', flex: 1, minWidth: 150, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter', valueGetter: this.headerPresDemoValueGetter,
                },
                {
                    width: 120, cellClass: 'secondary-action no-padding', cellRenderer: 'viewsActionsComponent', pinned: 'right',
                    cellRendererParams: {
                        enableCodeGetter: this.enableCodeGetter.bind(this),
                        enablePermissionsGetter: this.enablePermissionsGetter.bind(this),
                        onOpenCode: this.openCode.bind(this),
                        onOpenPermissions: this.openPermissions.bind(this),
                        onClone: this.cloneView.bind(this),
                        onExport: this.exportView.bind(this),
                        onDelete: this.deleteView.bind(this),
                    },
                },
            ] });
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
    }
    ViewsComponent.prototype.ngOnInit = function () {
        this.fetchTemplates();
        this.fetchPolymorphism();
        this.refreshOnChildClosed();
    };
    ViewsComponent.prototype.ngOnDestroy = function () {
        this.views$.complete();
        this.polymorphStatus$.complete();
        this.subscription.unsubscribe();
    };
    ViewsComponent.prototype.importView = function (files) {
        var importViewData = { files: files };
        this.router.navigate(['import'], { relativeTo: this.route.firstChild, state: importViewData });
    };
    ViewsComponent.prototype.fetchTemplates = function () {
        var _this = this;
        this.viewsService.getAll().subscribe(function (views) {
            _this.views$.next(views);
        });
    };
    ViewsComponent.prototype.fetchPolymorphism = function () {
        var _this = this;
        this.viewsService.getPolymorphism().subscribe(function (polymorphism) {
            _this.polymorphism = polymorphism;
            var polymorphStatus = (polymorphism.Id === null)
                ? 'not configured'
                : (polymorphism.Resolver === null ? 'disabled' : 'using ' + polymorphism.Resolver);
            _this.polymorphStatus$.next(polymorphStatus);
        });
    };
    ViewsComponent.prototype.editView = function (params) {
        var view = params === null || params === void 0 ? void 0 : params.data;
        var form = {
            items: [
                view == null
                    ? { ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].contentTypes.template }
                    : { EntityId: view.Id }
            ],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route.firstChild });
    };
    ViewsComponent.prototype.editPolymorphisms = function () {
        if (!this.polymorphism) {
            return;
        }
        var form = {
            items: [
                !this.polymorphism.Id
                    ? { ContentTypeName: this.polymorphism.TypeName }
                    : { EntityId: this.polymorphism.Id }
            ],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route.firstChild });
    };
    ViewsComponent.prototype.showValueGetter = function (params) {
        var view = params.data;
        return !view.IsHidden;
    };
    ViewsComponent.prototype.typeValueGetter = function (params) {
        var view = params.data;
        var type = Object(_views_helpers__WEBPACK_IMPORTED_MODULE_20__["calculateViewType"])(view);
        return type.value;
    };
    ViewsComponent.prototype.enableCodeGetter = function () {
        return this.enableCode;
    };
    ViewsComponent.prototype.enablePermissionsGetter = function () {
        return this.enablePermissions;
    };
    ViewsComponent.prototype.contentDemoValueGetter = function (params) {
        var view = params.data;
        return view.ContentType.DemoId + " " + view.ContentType.DemoTitle;
    };
    ViewsComponent.prototype.presentationDemoValueGetter = function (params) {
        var view = params.data;
        return view.PresentationType.DemoId + " " + view.PresentationType.DemoTitle;
    };
    ViewsComponent.prototype.headerDemoValueGetter = function (params) {
        var view = params.data;
        return view.ListContentType.DemoId + " " + view.ListContentType.DemoTitle;
    };
    ViewsComponent.prototype.headerPresDemoValueGetter = function (params) {
        var view = params.data;
        return view.ListPresentationType.DemoId + " " + view.ListPresentationType.DemoTitle;
    };
    ViewsComponent.prototype.openUsage = function (event) {
        var view = event.data;
        this.router.navigate(["usage/" + view.Guid], { relativeTo: this.route.firstChild });
    };
    ViewsComponent.prototype.openCode = function (view) {
        this.dialogService.openCodeFile(view.TemplatePath);
    };
    ViewsComponent.prototype.openPermissions = function (view) {
        this.router.navigate(["permissions/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].metadata.entity.type + "/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].keyTypes.guid + "/" + view.Guid], { relativeTo: this.route.firstChild });
    };
    ViewsComponent.prototype.cloneView = function (view) {
        var form = {
            items: [{ ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].contentTypes.template, DuplicateEntity: view.Id }],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_14__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route.firstChild });
    };
    ViewsComponent.prototype.exportView = function (view) {
        this.viewsService.export(view.Id);
    };
    ViewsComponent.prototype.deleteView = function (view) {
        var _this = this;
        if (!confirm("Delete '" + view.Name + "' (" + view.Id + ")?")) {
            return;
        }
        this.snackBar.open('Deleting...');
        this.viewsService.delete(view.Id).subscribe(function (res) {
            _this.snackBar.open('Deleted', null, { duration: 2000 });
            _this.fetchTemplates();
        });
    };
    ViewsComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(!!this.route.snapshot.firstChild.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () { return !!_this.route.snapshot.firstChild.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            _this.fetchTemplates();
            _this.fetchPolymorphism();
        }));
    };
    ViewsComponent.ctorParameters = function () { return [
        { type: _services_views_service__WEBPACK_IMPORTED_MODULE_19__["ViewsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_15__["DialogService"] }
    ]; };
    ViewsComponent.propDecorators = {
        enableCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        enablePermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
    ViewsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-views',
            template: _raw_loader_views_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
            styles: [_views_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_views_service__WEBPACK_IMPORTED_MODULE_19__["ViewsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_15__["DialogService"]])
    ], ViewsComponent);
    return ViewsComponent;
}());



/***/ }),

/***/ "H3Ax":
/*!*******************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-query/import-query-dialog.config.ts ***!
  \*******************************************************************************************/
/*! exports provided: importQueryDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importQueryDialog", function() { return importQueryDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var importQueryDialog = {
    name: 'IMPORT_QUERY_DIALOG',
    initContext: false,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ImportQueryComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./import-query.component */ "TFsy"))];
                    case 1:
                        ImportQueryComponent = (_a.sent()).ImportQueryComponent;
                        return [2 /*return*/, ImportQueryComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "IUqT":
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/views-type/views-type.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\" [matTooltip]=\"value\">\r\n  <mat-icon>{{ icon }}</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "JLvZ":
/*!************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/sub-dialogs/import-content-type/import-content-type.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appDragAndDrop [allowedFileTypes]=\"'json'\" (filesDropped)=\"filesDropped($event)\"\r\n  *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">Import Content Types</div>\r\n  </div>\r\n\r\n  <mat-spinner *ngIf=\"data.isImporting\" mode=\"indeterminate\" diameter=\"20\" color=\"accent\"></mat-spinner>\r\n\r\n  <p class=\"dialog-description\">Select Content Type definition files (json) from your computer to import.</p>\r\n\r\n  <div>\r\n    <button mat-raised-button matTooltip=\"Open file browser\" [disabled]=\"data.isImporting\" (click)=\"fileInput.click()\">\r\n      <div *ngIf=\"!data.importFiles\">Select or drop files</div>\r\n      <ng-container *ngIf=\"data.importFiles\">\r\n        <div *ngFor=\"let file of data.importFiles\">{{ file.name }}</div>\r\n      </ng-container>\r\n    </button>\r\n    <input #fileInput type=\"file\" multiple (change)=\"filesChange($event)\" class=\"hide\" />\r\n  </div>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light import-result-box\" *ngIf=\"data.importResult\">\r\n    <div *ngIf=\"data.importResult.Success\" class=\"sxc-message sxc-message-info\">\r\n      The import has been done. See the messages below for more information.\r\n    </div>\r\n    <div *ngIf=\"!data.importResult.Success\" class=\"sxc-message sxc-message-error\">\r\n      The import failed. See the messages below for more information.\r\n    </div>\r\n    <div *ngFor=\"let message of data.importResult.Messages\" class=\"sxc-message\" [ngClass]=\"{\r\n      'sxc-message-warning': message.MessageType === 0,\r\n      'sxc-message-success': message.MessageType === 1,\r\n      'sxc-message-error': message.MessageType === 2\r\n    }\">\r\n      {{ message.Text }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <ng-container *ngIf=\"!data.importResult?.Success\">\r\n      <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\" [disabled]=\"!data.importFiles || data.isImporting || data.importResult\"\r\n        (click)=\"importContentType()\">\r\n        Import\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.importResult?.Success\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">Close</button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "JsFl":
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/data-items/data-items.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div matRipple class=\"chip-component highlight\" matTooltip=\"Add item\">\r\n  <div class=\"chip-box\">\r\n    <span class=\"chip\">{{ value }}</span>\r\n  </div>\r\n  <div class=\"like-button\">\r\n    <mat-icon>add</mat-icon>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "KC2B":
/*!******************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/web-api-actions/web-api-actions.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL2FnLWdyaWQtY29tcG9uZW50cy93ZWItYXBpLWFjdGlvbnMvd2ViLWFwaS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "KI+R":
/*!******************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/data-items/data-items.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DataItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataItemsComponent", function() { return DataItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_data_items_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./data-items.component.html */ "JsFl");
/* harmony import */ var _data_items_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-items.component.scss */ "9X/D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var DataItemsComponent = /** @class */ (function () {
    function DataItemsComponent() {
    }
    DataItemsComponent.prototype.agInit = function (params) {
        this.value = params.value;
    };
    DataItemsComponent.prototype.refresh = function (params) {
        return true;
    };
    DataItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-data-items',
            template: _raw_loader_data_items_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_data_items_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], DataItemsComponent);
    return DataItemsComponent;
}());



/***/ }),

/***/ "Kw72":
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/getting-started/getting-started.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe class=\"iframe\" [src]=\"gettingStartedUrl | safeResourceUrl\"></iframe>\r\n");

/***/ }),

/***/ "NtNJ":
/*!*****************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-content-type/import-content-type.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ImportContentTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportContentTypeComponent", function() { return ImportContentTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_import_content_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./import-content-type.component.html */ "JLvZ");
/* harmony import */ var _import_content_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-content-type.component.scss */ "qIqc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/content-types.service */ "S36y");









var ImportContentTypeComponent = /** @class */ (function () {
    function ImportContentTypeComponent(dialogData, dialogRef, contentTypesService, snackBar) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.contentTypesService = contentTypesService;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.isImporting$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.importFiles$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.importResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.isImporting$, this.importFiles$, this.importResult$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), isImporting = _b[0], importFiles = _b[1], importResult = _b[2];
            return ({ isImporting: isImporting, importFiles: importFiles, importResult: importResult });
        }));
    }
    ImportContentTypeComponent.prototype.ngOnInit = function () {
        if (this.dialogData.files != null) {
            this.importFiles$.next(this.dialogData.files);
            this.importContentType();
        }
    };
    ImportContentTypeComponent.prototype.ngOnDestroy = function () {
        this.isImporting$.complete();
        this.importFiles$.complete();
        this.importResult$.complete();
    };
    ImportContentTypeComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ImportContentTypeComponent.prototype.filesDropped = function (files) {
        this.importFiles$.next(files);
        this.importResult$.next(null);
        this.importContentType();
    };
    ImportContentTypeComponent.prototype.filesChange = function (event) {
        var fileList = event.target.files;
        var files = null;
        if (fileList.length) {
            files = [];
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < fileList.length; i++) {
                files.push(fileList[i]);
            }
        }
        this.importFiles$.next(files);
        this.importResult$.next(null);
    };
    ImportContentTypeComponent.prototype.importContentType = function () {
        var _this = this;
        this.isImporting$.next(true);
        this.contentTypesService.import(this.importFiles$.value).subscribe({
            next: function (result) {
                _this.isImporting$.next(false);
                _this.importResult$.next(result);
            },
            error: function (error) {
                _this.isImporting$.next(false);
                _this.importResult$.next(null);
                _this.snackBar.open('Import failed. Please check console for more information', null, { duration: 3000 });
            },
        });
    };
    ImportContentTypeComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_content_types_service__WEBPACK_IMPORTED_MODULE_8__["ContentTypesService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    ImportContentTypeComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ImportContentTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-import-content-type',
            template: _raw_loader_import_content_type_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_import_content_type_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_content_types_service__WEBPACK_IMPORTED_MODULE_8__["ContentTypesService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ImportContentTypeComponent);
    return ImportContentTypeComponent;
}());



/***/ }),

/***/ "OjP1":
/*!********************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/data-fields/data-fields.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DataFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFieldsComponent", function() { return DataFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_data_fields_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./data-fields.component.html */ "RX9B");
/* harmony import */ var _data_fields_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-fields.component.scss */ "AaLS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var DataFieldsComponent = /** @class */ (function () {
    function DataFieldsComponent() {
    }
    DataFieldsComponent.prototype.agInit = function (params) {
        this.contentType = params.data;
        this.value = params.value;
    };
    DataFieldsComponent.prototype.refresh = function (params) {
        return true;
    };
    DataFieldsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-data-fields',
            template: _raw_loader_data_fields_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_data_fields_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], DataFieldsComponent);
    return DataFieldsComponent;
}());



/***/ }),

/***/ "PHN+":
/*!*************************************************************************************!*\
  !*** ./src/app/app-administration/app-configuration/app-configuration.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AppConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigurationComponent", function() { return AppConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_app_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app-configuration.component.html */ "Zs9e");
/* harmony import */ var _app_configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-configuration.component.scss */ "XvYK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content-items/services/content-items.service */ "55Ui");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ "uuTa");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");
/* harmony import */ var _services_export_app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/export-app.service */ "q3Tv");
/* harmony import */ var _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/import-app-parts.service */ "WlMA");












var AppConfigurationComponent = /** @class */ (function () {
    function AppConfigurationComponent(contentItemsService, router, route, context, 
    // 2020-11-10 2dm experimental
    exportAppService, importer, snackBar) {
        this.contentItemsService = contentItemsService;
        this.router = router;
        this.route = route;
        this.context = context;
        this.exportAppService = exportAppService;
        this.importer = importer;
        this.snackBar = snackBar;
        this.eavConstants = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__["eavConstants"];
    }
    AppConfigurationComponent.prototype.ngOnInit = function () {
    };
    AppConfigurationComponent.prototype.edit = function (staticName) {
        var _this = this;
        this.contentItemsService.getAll(staticName).subscribe(function (contentItems) {
            if (contentItems.length !== 1) {
                throw new Error("Found too many settings for the type " + staticName);
            }
            var item = contentItems[0];
            var form = {
                items: [{ EntityId: item.Id }],
            };
            var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_8__["convertFormToUrl"])(form);
            _this.router.navigate(["edit/" + formUrl], { relativeTo: _this.route.firstChild });
        });
    };
    AppConfigurationComponent.prototype.config = function (staticName) {
        this.router.navigate(["fields/" + staticName], { relativeTo: this.route.firstChild });
    };
    AppConfigurationComponent.prototype.openPermissions = function () {
        this.router.navigate(["permissions/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__["eavConstants"].metadata.app.type + "/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__["eavConstants"].keyTypes.number + "/" + this.context.appId], { relativeTo: this.route.firstChild });
    };
    AppConfigurationComponent.prototype.exportApp = function () {
        this.router.navigate(["export"], { relativeTo: this.route.firstChild });
    };
    AppConfigurationComponent.prototype.exportParts = function () {
        this.router.navigate(["export/parts"], { relativeTo: this.route.firstChild });
    };
    AppConfigurationComponent.prototype.importParts = function () {
        this.router.navigate(["import/parts"], { relativeTo: this.route.firstChild });
    };
    AppConfigurationComponent.prototype.exportAppXml = function () {
        // this.isExporting$.next(true);
        this.exportAppService.exportForVersionControl(true, false).subscribe({
            next: function (res) {
                // this.isExporting$.next(false);
                alert('Done - please check your \'.data\' folder');
            },
            error: function (error) {
                // this.isExporting$.next(false);
            },
        });
    };
    // experimental
    AppConfigurationComponent.prototype.resetApp = function () {
        var _this = this;
        if (!confirm('Are you sure? All changes since then will be lost')) {
            return;
        }
        this.importer.resetApp().subscribe({
            next: function (result) {
                // this.isImporting$.next(false);
                // this.importResult$.next(result);
                _this.snackBar.open('Reset worked!', null, { duration: 3000 });
            },
            error: function (error) {
                // this.isImporting$.next(false);
                // this.importResult$.next(null);
                _this.snackBar.open('Reset failed. Please check console for more information', null, { duration: 3000 });
            },
        });
    };
    AppConfigurationComponent.ctorParameters = function () { return [
        { type: _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_6__["ContentItemsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_9__["Context"] },
        { type: _services_export_app_service__WEBPACK_IMPORTED_MODULE_10__["ExportAppService"] },
        { type: _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_11__["ImportAppPartsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    AppConfigurationComponent.propDecorators = {
        dialogSettings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    AppConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-app-configuration',
            template: _raw_loader_app_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_app_configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_6__["ContentItemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_9__["Context"],
            _services_export_app_service__WEBPACK_IMPORTED_MODULE_10__["ExportAppService"],
            _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_11__["ImportAppPartsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AppConfigurationComponent);
    return AppConfigurationComponent;
}());



/***/ }),

/***/ "PkOV":
/*!******************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/queries-actions/queries-actions.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL2FnLWdyaWQtY29tcG9uZW50cy9xdWVyaWVzLWFjdGlvbnMvcXVlcmllcy1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "QzZc":
/*!*****************************************************************!*\
  !*** ./src/app/app-administration/web-api/web-api.component.ts ***!
  \*****************************************************************/
/*! exports provided: WebApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebApiComponent", function() { return WebApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_web_api_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./web-api.component.html */ "AW+H");
/* harmony import */ var _web_api_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-api.component.scss */ "fGu5");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "KLQV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _edit_eav_material_controls_adam_sanitize_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../edit/eav-material-controls/adam/sanitize.service */ "+UDY");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ "QjRa");
/* harmony import */ var _shared_constants_file_names_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/constants/file-names.constants */ "Q+Kz");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "H0VJ");
/* harmony import */ var _ag_grid_components_web_api_actions_web_api_actions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ag-grid-components/web-api-actions/web-api-actions.component */ "1jVc");
/* harmony import */ var _services_web_apis_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/web-apis.service */ "p2eq");













var WebApiComponent = /** @class */ (function () {
    function WebApiComponent(webApisService, sanitizeService, snackBar, dialogService) {
        this.webApisService = webApisService;
        this.sanitizeService = sanitizeService;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.webApis$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__["defaultGridOptions"]), { frameworkComponents: {
                webApiActions: _ag_grid_components_web_api_actions_web_api_actions_component__WEBPACK_IMPORTED_MODULE_11__["WebApiActionsComponent"],
            }, columnDefs: [
                {
                    headerName: 'Folder', field: 'folder', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Name', field: 'name', flex: 2, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    width: 40, cellClass: 'secondary-action no-padding', cellRenderer: 'webApiActions', pinned: 'right',
                    cellRendererParams: {
                        enableCodeGetter: this.enableCodeGetter.bind(this),
                        onOpenCode: this.openCode.bind(this),
                    },
                },
            ] });
    }
    WebApiComponent.prototype.ngOnInit = function () {
        this.fetchWebApis();
    };
    WebApiComponent.prototype.ngOnDestroy = function () {
        this.webApis$.complete();
    };
    WebApiComponent.prototype.addController = function () {
        var _this = this;
        var name = prompt('Controller name:', _shared_constants_file_names_constants__WEBPACK_IMPORTED_MODULE_9__["defaultControllerName"]);
        if (name === null || name.length === 0) {
            return;
        }
        name = this.sanitizeService.sanitizePath(name);
        name = name.replace(/\s/g, ''); // remove all whitespaces
        // find name without extension
        var nameLower = name.toLocaleLowerCase();
        var extIndex = nameLower.lastIndexOf('.cs');
        if (extIndex > 0) {
            nameLower = nameLower.substring(0, extIndex);
        }
        var typeIndex = nameLower.lastIndexOf('controller');
        if (typeIndex > 0) {
            nameLower = nameLower.substring(0, typeIndex);
        }
        // uppercase first letter, take other letters as is and append extension
        name = name.charAt(0).toLocaleUpperCase() + name.substring(1, nameLower.length) + 'Controller.cs';
        this.snackBar.open('Saving...');
        this.webApisService.create(name).subscribe(function (res) {
            _this.snackBar.open('Saved', null, { duration: 2000 });
            _this.fetchWebApis();
        });
    };
    WebApiComponent.prototype.fetchWebApis = function () {
        var _this = this;
        this.webApisService.getAll().subscribe(function (paths) {
            var webApis = paths.map(function (path) {
                var splitIndex = path.lastIndexOf('/');
                var fileExtIndex = path.lastIndexOf('.');
                var folder = path.substring(0, splitIndex);
                var name = path.substring(splitIndex + 1, fileExtIndex);
                return {
                    folder: folder,
                    name: name,
                };
            });
            _this.webApis$.next(webApis);
        });
    };
    WebApiComponent.prototype.enableCodeGetter = function () {
        return this.enableCode;
    };
    WebApiComponent.prototype.openCode = function (api) {
        this.dialogService.openCodeFile(api.folder + "/" + api.name + ".cs");
    };
    WebApiComponent.ctorParameters = function () { return [
        { type: _services_web_apis_service__WEBPACK_IMPORTED_MODULE_12__["WebApisService"] },
        { type: _edit_eav_material_controls_adam_sanitize_service__WEBPACK_IMPORTED_MODULE_7__["SanitizeService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }
    ]; };
    WebApiComponent.propDecorators = {
        enableCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    WebApiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-web-api',
            template: _raw_loader_web_api_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_web_api_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_web_apis_service__WEBPACK_IMPORTED_MODULE_12__["WebApisService"],
            _edit_eav_material_controls_adam_sanitize_service__WEBPACK_IMPORTED_MODULE_7__["SanitizeService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]])
    ], WebApiComponent);
    return WebApiComponent;
}());



/***/ }),

/***/ "R9YX":
/*!*************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-app-parts/import-app-parts.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".import-result-box {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vc3ViLWRpYWxvZ3MvaW1wb3J0LWFwcC1wYXJ0cy9pbXBvcnQtYXBwLXBhcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL3N1Yi1kaWFsb2dzL2ltcG9ydC1hcHAtcGFydHMvaW1wb3J0LWFwcC1wYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbXBvcnQtcmVzdWx0LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4iXX0= */");

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

/***/ "RUxz":
/*!******************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-show/views-show.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewsShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsShowComponent", function() { return ViewsShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_views_show_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./views-show.component.html */ "r1R9");
/* harmony import */ var _views_show_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views-show.component.scss */ "CjY2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var ViewsShowComponent = /** @class */ (function () {
    function ViewsShowComponent() {
    }
    ViewsShowComponent.prototype.agInit = function (params) {
        this.value = params.value;
    };
    ViewsShowComponent.prototype.refresh = function (params) {
        return true;
    };
    ViewsShowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-views-show',
            template: _raw_loader_views_show_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_views_show_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ViewsShowComponent);
    return ViewsShowComponent;
}());



/***/ }),

/***/ "RX9B":
/*!***************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/data-fields/data-fields.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div matRipple class=\"chip-component highlight\" matTooltip=\"Edit fields\" *ngIf=\"!contentType.UsesSharedDef\">\r\n  <div class=\"chip-box\">\r\n    <span class=\"chip\">{{ value }}</span>\r\n  </div>\r\n  <div class=\"like-button\">\r\n    <mat-icon>dns</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"chip-component disabled\" *ngIf=\"contentType.UsesSharedDef\"\r\n  matTooltip=\"This content-type shares the definition of #{{ contentType.SharedDefId }} so you can't edit it here. Read 2sxc.org/help?tag=shared-types\">\r\n  <div class=\"chip-box\">\r\n    <span class=\"chip\">{{ value }}</span>\r\n  </div>\r\n  <div class=\"like-button disabled\">\r\n    <mat-icon>share</mat-icon>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "RsRu":
/*!***********************************************************************************!*\
  !*** ./src/app/app-administration/getting-started/getting-started.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iframe {\n  border: none;\n  width: 100%;\n  height: calc(100vh - 209px);\n}\n@media (max-width: 600px) {\n  .iframe {\n    height: calc(100vh - 161px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUNFO0VBTEY7SUFNSSwyQkFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwOXB4KTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjFweCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ScqU":
/*!***************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/views-usage/views-usage.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL3N1Yi1kaWFsb2dzL3ZpZXdzLXVzYWdlL3ZpZXdzLXVzYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Spiu":
/*!************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-actions/views-actions.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ViewsActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsActionsComponent", function() { return ViewsActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_views_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./views-actions.component.html */ "cmN1");
/* harmony import */ var _views_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views-actions.component.scss */ "V+Uf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var ViewsActionsComponent = /** @class */ (function () {
    function ViewsActionsComponent() {
    }
    ViewsActionsComponent.prototype.agInit = function (params) {
        this.params = params;
        this.view = this.params.data;
        this.enableCode = this.params.enableCodeGetter();
        this.enablePermissions = this.params.enablePermissionsGetter();
    };
    ViewsActionsComponent.prototype.refresh = function (params) {
        return true;
    };
    ViewsActionsComponent.prototype.openCode = function () {
        this.params.onOpenCode(this.view);
    };
    ViewsActionsComponent.prototype.openPermissions = function () {
        this.params.onOpenPermissions(this.view);
    };
    ViewsActionsComponent.prototype.cloneView = function () {
        this.params.onClone(this.view);
    };
    ViewsActionsComponent.prototype.exportView = function () {
        this.params.onExport(this.view);
    };
    ViewsActionsComponent.prototype.deleteView = function () {
        this.params.onDelete(this.view);
    };
    ViewsActionsComponent.ctorParameters = function () { return []; };
    ViewsActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-views-actions',
            template: _raw_loader_views_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_views_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ViewsActionsComponent);
    return ViewsActionsComponent;
}());



/***/ }),

/***/ "TFsy":
/*!***************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-query/import-query.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ImportQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportQueryComponent", function() { return ImportQueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_import_query_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./import-query.component.html */ "xCXf");
/* harmony import */ var _import_query_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-query.component.scss */ "dqGB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_pipelines_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/pipelines.service */ "frVg");









var ImportQueryComponent = /** @class */ (function () {
    function ImportQueryComponent(dialogData, dialogRef, pipelinesService, snackBar) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.pipelinesService = pipelinesService;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.isImporting$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.importFile$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.importResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.isImporting$, this.importFile$, this.importResult$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), isImporting = _b[0], importFile = _b[1], importResult = _b[2];
            return ({ isImporting: isImporting, importFile: importFile, importResult: importResult });
        }));
    }
    ImportQueryComponent.prototype.ngOnInit = function () {
        if (this.dialogData.files != null) {
            this.importFile$.next(this.dialogData.files[0]);
            this.importQuery();
        }
    };
    ImportQueryComponent.prototype.ngOnDestroy = function () {
        this.isImporting$.complete();
        this.importFile$.complete();
        this.importResult$.complete();
    };
    ImportQueryComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ImportQueryComponent.prototype.filesDropped = function (files) {
        var importFile = files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
        this.importQuery();
    };
    ImportQueryComponent.prototype.fileChange = function (event) {
        var importFile = event.target.files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
    };
    ImportQueryComponent.prototype.importQuery = function () {
        var _this = this;
        this.isImporting$.next(true);
        this.pipelinesService.importQuery(this.importFile$.value).subscribe({
            next: function (result) {
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
            },
        });
    };
    ImportQueryComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_pipelines_service__WEBPACK_IMPORTED_MODULE_8__["PipelinesService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    ImportQueryComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ImportQueryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-import-query',
            template: _raw_loader_import_query_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_import_query_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_pipelines_service__WEBPACK_IMPORTED_MODULE_8__["PipelinesService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ImportQueryComponent);
    return ImportQueryComponent;
}());



/***/ }),

/***/ "TpWb":
/*!********************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/sub-dialogs/import-view/import-view.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appDragAndDrop [allowedFileTypes]=\"'json'\" (filesDropped)=\"filesDropped($event)\"\r\n  *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">Import View</div>\r\n  </div>\r\n\r\n  <mat-spinner *ngIf=\"data.isImporting\" mode=\"indeterminate\" diameter=\"20\" color=\"accent\"></mat-spinner>\r\n\r\n  <p class=\"dialog-description\">Select a view file (json) from your computer to import.</p>\r\n\r\n  <div>\r\n    <button mat-raised-button matTooltip=\"Open file browser\" [disabled]=\"data.isImporting\" (click)=\"fileInput.click()\">\r\n      <span>{{ data.importFile ? data.importFile.name : 'Select or drop file' }}</span>\r\n    </button>\r\n    <input #fileInput type=\"file\" (change)=\"fileChange($event)\" class=\"hide\" />\r\n  </div>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light import-result-box\" *ngIf=\"data.importResult\">\r\n    <div *ngIf=\"data.importResult.Success\" class=\"sxc-message sxc-message-info\">\r\n      The import has been done. See the messages below for more information.\r\n    </div>\r\n    <div *ngIf=\"!data.importResult.Success\" class=\"sxc-message sxc-message-error\">\r\n      The import failed. See the messages below for more information.\r\n    </div>\r\n    <div *ngFor=\"let message of data.importResult.Messages\" class=\"sxc-message\" [ngClass]=\"{\r\n      'sxc-message-warning': message.MessageType === 0,\r\n      'sxc-message-success': message.MessageType === 1,\r\n      'sxc-message-error': message.MessageType === 2\r\n    }\">\r\n      {{ message.Text }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <ng-container *ngIf=\"!data.importResult?.Success\">\r\n      <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\" [disabled]=\"!data.importFile || data.isImporting || data.importResult\"\r\n        (click)=\"importView()\">\r\n        Import\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.importResult?.Success\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">Close</button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "V+Uf":
/*!**************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-actions/views-actions.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL2FnLWdyaWQtY29tcG9uZW50cy92aWV3cy1hY3Rpb25zL3ZpZXdzLWFjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "VaIl":
/*!******************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/data/data.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-wrapper mat-tab-grid-wrapper\">\r\n  <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"contentTypes$ | async\" [modules]=\"modules\"\r\n    [gridOptions]=\"gridOptions\" appDragAndDrop [allowedFileTypes]=\"'xml,json'\" (filesDropped)=\"filesDropped($event)\">\r\n  </ag-grid-angular>\r\n\r\n  <div class=\"scope-box\">\r\n    <mat-form-field appearance=\"standard\" color=\"accent\" class=\"scope-box__dropdown\">\r\n      <mat-select [ngModel]=\"scope\" name=\"Scope\" (ngModelChange)=\"changeScope($event)\">\r\n        <mat-option *ngFor=\"let scopeOption of (scopeOptions$ | async)\" [value]=\"scopeOption.value\">\r\n          {{ 'Scope: ' + scopeOption.name }}\r\n        </mat-option>\r\n        <mat-option value=\"Other\">Scope: Other...</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <button mat-button matTooltip=\"Import content type\" (click)=\"importType()\">\r\n      <mat-icon>cloud_upload</mat-icon>\r\n      <span>Content Type</span>\r\n    </button>\r\n\r\n    <button mat-button color=\"accent\" matTooltip=\"Create a ghost content type\" *ngIf=\"debugEnabled$ | async\"\r\n      (click)=\"createGhost()\">\r\n      <mat-icon>share</mat-icon>\r\n      <span>Ghost</span>\r\n    </button>\r\n  </div>\r\n\r\n  <button mat-fab mat-elevation-z24 class=\"grid-fab\" matTooltip=\"Create a new content type\"\r\n    (click)=\"editContentType(null)\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "WlMA":
/*!*************************************************************************!*\
  !*** ./src/app/app-administration/services/import-app-parts.service.ts ***!
  \*************************************************************************/
/*! exports provided: webApiAppPartsRoot, ImportAppPartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiAppPartsRoot", function() { return webApiAppPartsRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAppPartsService", function() { return ImportAppPartsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ "ZEis");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






var webApiAppPartsRoot = 'admin/appParts/';
var ImportAppPartsService = /** @class */ (function () {
    function ImportAppPartsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ImportAppPartsService.prototype.importAppParts = function (file) {
        var formData = new FormData();
        formData.append('File', file);
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiAppPartsRoot + 'Import'), formData, {
            params: { appId: this.context.appId.toString(), zoneId: this.context.zoneId.toString() }
        });
    };
    /**
     * Reset the app back to the state it was in the last xml export
     */
    ImportAppPartsService.prototype.resetApp = function () {
        var ctx = this.context;
        var url = this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + ("Reset?zoneid=" + ctx.zoneId + "&appid=" + ctx.appId));
        return this.http.post(url, {});
    };
    ImportAppPartsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ImportAppPartsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ImportAppPartsService);
    return ImportAppPartsService;
}());



/***/ }),

/***/ "XvYK":
/*!***************************************************************************************!*\
  !*** ./src/app/app-administration/app-configuration/app-configuration.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL2FwcC1jb25maWd1cmF0aW9uL2FwcC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "XySb":
/*!***********************************************************************************************!*\
  !*** ./src/app/app-administration/app-administration-nav/app-administration-nav.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AppAdministrationNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAdministrationNavComponent", function() { return AppAdministrationNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_app_administration_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app-administration-nav.component.html */ "j/A1");
/* harmony import */ var _app_administration_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-administration-nav.component.scss */ "dv9T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/app-dialog-config.service */ "KoVM");









var AppAdministrationNavComponent = /** @class */ (function () {
    function AppAdministrationNavComponent(dialogRef, appDialogConfigService, router, route) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.appDialogConfigService = appDialogConfigService;
        this.router = router;
        this.route = route;
        this.dialogSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.tabs$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.tabIndex$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.tabs$,
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function () { return _this.route.snapshot.firstChild.url[0].path; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this.route.snapshot.firstChild.url[0].path))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), tabs = _b[0], path = _b[1];
            if (tabs == null) {
                return;
            }
            var tabIndex = tabs.indexOf(path);
            return tabIndex;
        }));
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.dialogSettings$, this.tabIndex$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), dialogSettings = _b[0], tabIndex = _b[1];
            return ({ dialogSettings: dialogSettings, tabIndex: tabIndex });
        }));
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    AppAdministrationNavComponent.prototype.ngOnInit = function () {
        this.fetchDialogSettings();
        this.refreshOnChildClosed();
    };
    AppAdministrationNavComponent.prototype.ngOnDestroy = function () {
        this.dialogSettings$.complete();
        this.tabs$.complete();
        this.subscription.unsubscribe();
    };
    AppAdministrationNavComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AppAdministrationNavComponent.prototype.changeTab = function (event) {
        var path = this.tabs$.value[event.index];
        this.router.navigate([path], { relativeTo: this.route });
    };
    AppAdministrationNavComponent.prototype.fetchDialogSettings = function () {
        var _this = this;
        this.appDialogConfigService.getDialogSettings().subscribe(function (dialogSettings) {
            _this.dialogSettings$.next(dialogSettings);
            var tabs = ['home', 'data', 'queries', 'views', 'web-api', 'app']; // tabs order has to match template
            if (!dialogSettings.Context.Enable.Query) {
                tabs = tabs.filter(function (tab) { return tab !== 'queries' && tab !== 'web-api'; });
            }
            _this.tabs$.next(tabs);
        });
    };
    AppAdministrationNavComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(!!this.route.snapshot.firstChild.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function () { return !!_this.route.snapshot.firstChild.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            _this.fetchDialogSettings();
        }));
    };
    AppAdministrationNavComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_8__["AppDialogConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AppAdministrationNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-app-administration-nav',
            template: _raw_loader_app_administration_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_app_administration_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_8__["AppDialogConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AppAdministrationNavComponent);
    return AppAdministrationNavComponent;
}());



/***/ }),

/***/ "Y2qJ":
/*!***********************************************************************!*\
  !*** ./src/app/app-administration/constants/content-type.patterns.ts ***!
  \***********************************************************************/
/*! exports provided: contentTypeNamePattern, contentTypeNameError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentTypeNamePattern", function() { return contentTypeNamePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentTypeNameError", function() { return contentTypeNameError; });
/**
 * The pattern determines what content-type names are allowed.
 * Basically it's A-Z and numbers after the first digit.
 * But there are two exceptions:
 *  - types describing an input-type begin with an `@` and can also contain `-` chars
 *  - types beginning with an `|` are very old type names for data-sources, they can contain anything!
 */
var contentTypeNamePattern = /(^[A-Za-z][A-Za-z0-9]+$)|(^@[A-Za-z][A-Za-z0-9-]*$)/;
var contentTypeNameError = 'Standard letters and numbers are allowed. Must start with a letter.';
// 2020-04-29 2dm - temporarily used this pattern while renaming unique named types containing '|' chars
// export const contentTypeNamePattern = /(^[A-Za-z][A-Za-z0-9]+$)|(^@[A-Za-z][A-Za-z0-9-]*$)|(^\|.*$)/;


/***/ }),

/***/ "YJat":
/*!******************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/sub-dialogs/export-app/export-app.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">Export app</div>\r\n  </div>\r\n\r\n  <mat-spinner *ngIf=\"data.isExporting\" mode=\"indeterminate\" diameter=\"20\" color=\"accent\"></mat-spinner>\r\n\r\n  <p class=\"dialog-description\">\r\n    Pack the entire app to a <em>zip</em> folder which can be imported again to another site.\r\n    For further help visit <a href=\"https://2sxc.org/en/help?tag=export-app\" target=\"_blank\">2sxc Help</a>.\r\n  </p>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light\" *ngIf=\"data.appInfo\">\r\n    <p class=\"app-info__title\">Specs</p>\r\n    <ul class=\"app-info__content\">\r\n      <li>Name: {{ data.appInfo.Name }}</li>\r\n      <li>Guid: {{ data.appInfo.Guid }}</li>\r\n      <li>Version: {{ data.appInfo.Version }}</li>\r\n    </ul>\r\n\r\n    <p class=\"app-info__title\">Contains</p>\r\n    <ul class=\"app-info__content\">\r\n      <li>{{ data.appInfo.EntitiesCount }} entities</li>\r\n      <li>{{ data.appInfo.LanguagesCount }} languages</li>\r\n      <li>\r\n        {{ data.appInfo.TemplatesCount }} templates (Token: {{ data.appInfo.HasTokenTemplates }}, Razor:\r\n        {{ data.appInfo.HasRazorTemplates }})\r\n      </li>\r\n      <li>{{ data.appInfo.TransferableFilesCount }} files to export</li>\r\n      <li>{{ data.appInfo.FilesCount }} files in the app folder totally</li>\r\n    </ul>\r\n\r\n    <div class=\"options-wrapper\">\r\n      <div class=\"option-box\">\r\n        <mat-checkbox [(ngModel)]=\"includeContentGroups\" [disabled]=\"resetAppGuid || data.isExporting\">\r\n          <span class=\"option-box__text\">\r\n            Include all content-groups to re-import the app in an exact copy of this site.\r\n            Only select this option when you copy an entire DNN site.\r\n          </span>\r\n        </mat-checkbox>\r\n      </div>\r\n      <div class=\"option-box\">\r\n        <mat-checkbox [(ngModel)]=\"resetAppGuid\" [disabled]=\"includeContentGroups || data.isExporting\">\r\n          <span class=\"option-box__text\">\r\n            Reset the app GUID to zero. You only need this option for special tutorial apps,\r\n            and usually must not select it.\r\n          </span>\r\n        </mat-checkbox>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <button mat-raised-button [disabled]=\"data.isExporting\" (click)=\"closeDialog()\">\r\n      Cancel\r\n    </button>\r\n    <button mat-raised-button [disabled]=\"data.isExporting\" (click)=\"exportGit()\">\r\n      Export Data for Github versioning\r\n    </button>\r\n    <button mat-raised-button color=\"accent\" [disabled]=\"data.isExporting\" (click)=\"exportApp()\">\r\n      Export App\r\n    </button>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "YLeX":
/*!*************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/edit-content-type/edit-content-type.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditContentTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContentTypeComponent", function() { return EditContentTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_edit_content_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-content-type.component.html */ "fo4y");
/* harmony import */ var _edit_content_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-content-type.component.scss */ "zhbw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _constants_content_type_patterns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/content-type.patterns */ "Y2qJ");
/* harmony import */ var _models_content_type_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/content-type.model */ "6c6K");
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/content-types.service */ "S36y");













var EditContentTypeComponent = /** @class */ (function () {
    function EditContentTypeComponent(dialogRef, route, contentTypesService, snackBar) {
        this.dialogRef = dialogRef;
        this.route = route;
        this.contentTypesService = contentTypesService;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
        this.contentTypeNamePattern = _constants_content_type_patterns__WEBPACK_IMPORTED_MODULE_10__["contentTypeNamePattern"];
        this.contentTypeNameError = _constants_content_type_patterns__WEBPACK_IMPORTED_MODULE_10__["contentTypeNameError"];
        this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.lockScope$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](true);
        this.scopeOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.disableAnimation$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](true);
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.contentType$, this.lockScope$, this.scopeOptions$, this.disableAnimation$, this.loading$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 5), contentType = _b[0], lockScope = _b[1], scopeOptions = _b[2], disableAnimation = _b[3], loading = _b[4];
            return ({ contentType: contentType, lockScope: lockScope, scopeOptions: scopeOptions, disableAnimation: disableAnimation, loading: loading });
        }));
        this.scope = this.route.snapshot.paramMap.get('scope');
    }
    EditContentTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contentType$ = this.contentTypeStaticName
            ? this.contentTypesService.retrieveContentType(this.contentTypeStaticName)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (contentType) {
                var contentTypeEdit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, contentType), { ChangeStaticName: false, NewStaticName: contentType.StaticName });
                return contentTypeEdit;
            }))
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (new _models_content_type_model__WEBPACK_IMPORTED_MODULE_11__["ContentTypeEdit"]())), { StaticName: '', Name: '', Description: '', Scope: this.scope, ChangeStaticName: false, NewStaticName: '' }));
        var scopes$ = this.contentTypesService.getScopes();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([contentType$, scopes$]).subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), contentType = _b[0], scopes = _b[1];
            _this.contentType$.next(contentType);
            _this.scopeOptions$.next(scopes);
        });
    };
    EditContentTypeComponent.prototype.ngOnDestroy = function () {
        this.contentType$.complete();
        this.lockScope$.complete();
        this.scopeOptions$.complete();
        this.disableAnimation$.complete();
        this.loading$.complete();
    };
    // workaround for angular component issue #13870
    EditContentTypeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // timeout required to avoid the dreaded 'ExpressionChangedAfterItHasBeenCheckedError'
        setTimeout(function () { return _this.disableAnimation$.next(false); });
    };
    EditContentTypeComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    EditContentTypeComponent.prototype.changeContentTypeName = function (newName) {
        this.contentType$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.contentType$.value), { Name: newName }));
    };
    EditContentTypeComponent.prototype.changeScope = function (newScope) {
        if (newScope === 'Other') {
            newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.');
            if (!newScope) {
                newScope = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_9__["eavConstants"].scopes.default.value;
            }
            else if (!this.scopeOptions$.value.find(function (option) { return option.value === newScope; })) {
                var newScopeOption = {
                    name: newScope,
                    value: newScope,
                };
                this.scopeOptions$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.scopeOptions$.value, [newScopeOption]));
            }
        }
        this.contentType$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.contentType$.value), { Scope: newScope }));
    };
    EditContentTypeComponent.prototype.unlockScope = function () {
        this.lockScope$.next(!this.lockScope$.value);
        if (this.lockScope$) {
            this.contentType$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.contentType$.value), { Scope: this.scope }));
        }
    };
    EditContentTypeComponent.prototype.save = function () {
        var _this = this;
        this.loading$.next(true);
        this.snackBar.open('Saving...');
        this.contentTypesService.save(this.contentType$.value).subscribe(function (result) {
            _this.loading$.next(false);
            _this.snackBar.open('Saved', null, { duration: 2000 });
            _this.closeDialog();
        });
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };
    EditContentTypeComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_content_types_service__WEBPACK_IMPORTED_MODULE_12__["ContentTypesService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    EditContentTypeComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    EditContentTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-content-type',
            template: _raw_loader_edit_content_type_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_edit_content_type_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_content_types_service__WEBPACK_IMPORTED_MODULE_12__["ContentTypesService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], EditContentTypeComponent);
    return EditContentTypeComponent;
}());



/***/ }),

/***/ "Zs9e":
/*!********************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/app-configuration/app-configuration.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cards-box\">\r\n  <mat-card class=\"mat-elevation-z2\">\r\n    <mat-card-header>\r\n      <mat-card-title>App Settings</mat-card-title>\r\n      <div class=\"actions-box\">\r\n        <button mat-icon-button matTooltip=\"Edit app settings\" (click)=\"edit(eavConstants.contentTypes.settings)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button matTooltip=\"Configure app settings\"\r\n          (click)=\"config(eavConstants.contentTypes.settings)\">\r\n          <mat-icon>dns</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      Settings are configurations used by the app - like SQL-connection strings, default \"items-to-show\" numbers and\r\n      things like that. They can also be multi-language, so that a setting (like default RSS-Feed) could be different in\r\n      each language.\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"mat-elevation-z2\">\r\n    <mat-card-header>\r\n      <mat-card-title>App Resources</mat-card-title>\r\n      <div class=\"actions-box\">\r\n        <button mat-icon-button matTooltip=\"Edit app resources\" (click)=\"edit(eavConstants.contentTypes.resources)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button matTooltip=\"Configure app resources\"\r\n          (click)=\"config(eavConstants.contentTypes.resources)\">\r\n          <mat-icon>dns</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      Resources are used for labels and things like that in the App. They are usually needed to create multi-lingual\r\n      views and such, and should not be used for App-Settings.\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n<div class=\"cards-box\">\r\n  <mat-card class=\"mat-elevation-z2\">\r\n    <mat-card-header>\r\n      <mat-card-title>App Package Definition</mat-card-title>\r\n      <div class=\"actions-box\">\r\n        <button mat-icon-button matTooltip=\"Edit app definition\" (click)=\"edit(eavConstants.scopes.app.value)\">\r\n          <mat-icon>redeem</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      The app-package definition is important when exporting/importing this app.\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"mat-elevation-z2\">\r\n    <mat-card-header>\r\n      <mat-card-title>App Permissions</mat-card-title>\r\n      <div class=\"actions-box\">\r\n        <button mat-icon-button matTooltip=\"Edit permissions\" [disabled]=\"!dialogSettings.Context.Enable.AppPermissions\"\r\n          (click)=\"openPermissions()\">\r\n          <mat-icon [matBadge]=\"dialogSettings.Context.App.Permissions.Count\" matBadgePosition=\"after\"\r\n            matBadgeColor=\"accent\" matBadgeSize=\"small\" *ngIf=\"dialogSettings.Context.App.Permissions.Count\">\r\n            person\r\n          </mat-icon>\r\n          <mat-icon *ngIf=\"!dialogSettings.Context.App.Permissions.Count\">person</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      Permissions give access to people to the entire app (all content-types / data), so use with care.\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n<div class=\"cards-box\">\r\n  <mat-card class=\"mat-elevation-z2\">\r\n    <mat-card-header>\r\n      <mat-card-title>Export this entire App</mat-card-title>\r\n      <div class=\"actions-box\">\r\n        <button mat-icon-button matTooltip=\"Export\" (click)=\"exportApp()\">\r\n          <mat-icon>cloud_download</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      Create an app-package (zip) which can be installed in another portal.\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"mat-elevation-z2\">\r\n    <mat-card-header>\r\n      <mat-card-title>Export or Import parts of this App</mat-card-title>\r\n      <div class=\"actions-box\">\r\n        <button mat-icon-button matTooltip=\"Export\" (click)=\"exportParts()\">\r\n          <mat-icon>cloud_download</mat-icon>\r\n        </button>\r\n        <button mat-icon-button matTooltip=\"Import\" (click)=\"importParts()\">\r\n          <mat-icon>cloud_upload</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      Create an xml containing parts of the app, e.g. content and templates.\r\n      Import parts from such an xml into this app.\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n\r\n<!-- experimental -->\r\n<div class=\"cards-box\">\r\n  <mat-card class=\"mat-elevation-z2\">\r\n    <mat-card-header>\r\n      <mat-card-title>Experimental: App State Versioning</mat-card-title>\r\n      <div class=\"actions-box\">\r\n        <mat-icon>history_toggle_off</mat-icon>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      Reset all app data to the state stored in the .data/app.xml.\r\n      <button mat-button matTooltip=\"Save State to app.xml for github versioning\" (click)=\"exportAppXml()\">\r\n        <mat-icon>save_alt</mat-icon>\r\n        <span> Save state</span>\r\n      </button>\r\n      <button mat-button matTooltip=\"Reset App\" (click)=\"resetApp()\">\r\n        <mat-icon>restore</mat-icon>\r\n        <span> Restore state</span>\r\n      </button>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "bBWv":
/*!*************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-view/import-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ImportViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportViewComponent", function() { return ImportViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_import_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./import-view.component.html */ "TpWb");
/* harmony import */ var _import_view_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-view.component.scss */ "mDlR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_views_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/views.service */ "uzd0");









var ImportViewComponent = /** @class */ (function () {
    function ImportViewComponent(dialogData, dialogRef, viewsService, snackBar) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.viewsService = viewsService;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.isImporting$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.importFile$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.importResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.isImporting$, this.importFile$, this.importResult$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), isImporting = _b[0], importFile = _b[1], importResult = _b[2];
            return ({ isImporting: isImporting, importFile: importFile, importResult: importResult });
        }));
    }
    ImportViewComponent.prototype.ngOnInit = function () {
        if (this.dialogData.files != null) {
            this.importFile$.next(this.dialogData.files[0]);
            this.importView();
        }
    };
    ImportViewComponent.prototype.ngOnDestroy = function () {
        this.isImporting$.complete();
        this.importFile$.complete();
        this.importResult$.complete();
    };
    ImportViewComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ImportViewComponent.prototype.filesDropped = function (files) {
        var importFile = files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
        this.importView();
    };
    ImportViewComponent.prototype.fileChange = function (event) {
        var importFile = event.target.files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
    };
    ImportViewComponent.prototype.importView = function () {
        var _this = this;
        this.isImporting$.next(true);
        this.viewsService.import(this.importFile$.value).subscribe({
            next: function (result) {
                _this.isImporting$.next(false);
                _this.importResult$.next(result);
            },
            error: function (error) {
                _this.isImporting$.next(false);
                _this.importResult$.next(null);
                _this.snackBar.open('Import failed. Please check console for more information', null, { duration: 3000 });
            },
        });
    };
    ImportViewComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_views_service__WEBPACK_IMPORTED_MODULE_8__["ViewsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    ImportViewComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ImportViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-import-view',
            template: _raw_loader_import_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_import_view_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_views_service__WEBPACK_IMPORTED_MODULE_8__["ViewsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ImportViewComponent);
    return ImportViewComponent;
}());



/***/ }),

/***/ "bkzA":
/*!*************************************************************************!*\
  !*** ./src/app/app-administration/services/export-app-parts.service.ts ***!
  \*************************************************************************/
/*! exports provided: ExportAppPartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportAppPartsService", function() { return ExportAppPartsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");
/* harmony import */ var _import_app_parts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import-app-parts.service */ "WlMA");






var ExportAppPartsService = /** @class */ (function () {
    function ExportAppPartsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ExportAppPartsService.prototype.getContentInfo = function (scope) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_parts_service__WEBPACK_IMPORTED_MODULE_5__["webApiAppPartsRoot"] + 'Get'), {
            params: { appid: this.context.appId.toString(), zoneId: this.context.zoneId.toString(), scope: scope },
        });
    };
    ExportAppPartsService.prototype.exportParts = function (contentTypeIds, entityIds, templateIds) {
        var url = this.dnnContext.$2sxc.http.apiUrl(_import_app_parts_service__WEBPACK_IMPORTED_MODULE_5__["webApiAppPartsRoot"] + 'Export')
            + '?appId=' + this.context.appId.toString()
            + '&zoneId=' + this.context.zoneId.toString()
            + '&contentTypeIdsString=' + contentTypeIds.join(';')
            + '&entityIdsString=' + entityIds.join(';')
            + '&templateIdsString=' + templateIds.join(';');
        window.open(url, '_blank', '');
    };
    ExportAppPartsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ExportAppPartsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ExportAppPartsService);
    return ExportAppPartsService;
}());



/***/ }),

/***/ "ci/X":
/*!****************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-usage-id/views-usage-id.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".id-box {\n  padding: 0 8px;\n  text-align: end;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.id-box .id {\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.id-box:hover {\n  text-decoration: none;\n}\n.id-box:hover .id {\n  display: none;\n}\n.id-box:not(:hover) .icon {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vYWctZ3JpZC1jb21wb25lbnRzL3ZpZXdzLXVzYWdlLWlkL3ZpZXdzLXVzYWdlLWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtBQUFOO0FBS0k7RUFDRSxhQUFBO0FBSE4iLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hZy1ncmlkLWNvbXBvbmVudHMvdmlld3MtdXNhZ2UtaWQvdmlld3MtdXNhZ2UtaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWQtYm94IHtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAuaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgLmlkIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6bm90KDpob3Zlcikge1xyXG4gICAgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "cmN1":
/*!*******************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/views-actions/views-actions.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple *ngIf=\"enableCode\" matTooltip=\"Code\" (click)=\"openCode()\">\r\n    <mat-icon>code</mat-icon>\r\n  </div>\r\n  <div class=\"like-button disabled\" *ngIf=\"!enableCode\">\r\n    <mat-icon>code</mat-icon>\r\n  </div>\r\n\r\n  <div class=\"like-button highlight\" matRipple *ngIf=\"enablePermissions\" matTooltip=\"Permissions\"\r\n    (click)=\"openPermissions()\">\r\n    <mat-icon [matBadge]=\"view.Permissions.Count\" matBadgePosition=\"after\" matBadgeColor=\"accent\" matBadgeSize=\"small\"\r\n      *ngIf=\"view.Permissions.Count\">\r\n      person\r\n    </mat-icon>\r\n    <mat-icon *ngIf=\"!view.Permissions.Count\">person</mat-icon>\r\n  </div>\r\n  <div class=\"like-button disabled\" *ngIf=\"!enablePermissions\">\r\n    <mat-icon>person</mat-icon>\r\n  </div>\r\n\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"More\" [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_horiz</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\" class=\"grid-more-menu\">\r\n  <button mat-menu-item (click)=\"cloneView()\">\r\n    <mat-icon>file_copy</mat-icon>\r\n    <span>Copy</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"exportView()\">\r\n    <mat-icon>cloud_download</mat-icon>\r\n    <span>Export</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"deleteView()\">\r\n    <mat-icon>delete</mat-icon>\r\n    <span>Delete</span>\r\n  </button>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "dUHD":
/*!***********************************************************!*\
  !*** ./src/app/app-administration/data/data.component.ts ***!
  \***********************************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_data_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./data.component.html */ "VaIl");
/* harmony import */ var _data_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.component.scss */ "v8Jz");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "KLQV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _edit_shared_services_global_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../edit/shared/services/global-configuration.service */ "2FQU");
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../content-export/services/content-export.service */ "Bwh1");
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ "JzAw");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ "QjRa");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ "YW/4");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ "uuTa");
/* harmony import */ var _ag_grid_components_data_actions_data_actions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ag-grid-components/data-actions/data-actions.component */ "7L/z");
/* harmony import */ var _ag_grid_components_data_fields_data_fields_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ag-grid-components/data-fields/data-fields.component */ "OjP1");
/* harmony import */ var _ag_grid_components_data_items_data_items_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ag-grid-components/data-items/data-items.component */ "KI+R");
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/content-types.service */ "S36y");




















var DataComponent = /** @class */ (function () {
    function DataComponent(router, route, contentTypesService, globalConfigService, snackBar, contentExportService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.contentTypesService = contentTypesService;
        this.globalConfigService = globalConfigService;
        this.snackBar = snackBar;
        this.contentExportService = contentExportService;
        this.contentTypes$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.scope = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].scopes.default.value;
        this.defaultScope = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].scopes.default.value;
        this.scopeOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        this.debugEnabled$ = this.globalConfigService.getDebugEnabled();
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_12__["defaultGridOptions"]), { frameworkComponents: {
                idFieldComponent: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_11__["IdFieldComponent"],
                dataItemsComponent: _ag_grid_components_data_items_data_items_component__WEBPACK_IMPORTED_MODULE_18__["DataItemsComponent"],
                dataFieldsComponent: _ag_grid_components_data_fields_data_fields_component__WEBPACK_IMPORTED_MODULE_17__["DataFieldsComponent"],
                dataActionsComponent: _ag_grid_components_data_actions_data_actions_component__WEBPACK_IMPORTED_MODULE_16__["DataActionsComponent"],
            }, columnDefs: [
                {
                    headerName: 'ID', field: 'Id', width: 70, headerClass: 'dense', cellClass: 'id-action no-padding no-outline',
                    cellRenderer: 'idFieldComponent', sortable: true, filter: 'agTextColumnFilter',
                    cellRendererParams: {
                        tooltipGetter: function (paramsData) { return "ID: " + paramsData.Id + "\nGUID: " + paramsData.StaticName; },
                    },
                },
                {
                    headerName: 'Content Type', field: 'Label', flex: 3, minWidth: 250, cellClass: 'primary-action highlight', sort: 'asc',
                    sortable: true, filter: 'agTextColumnFilter', onCellClicked: this.showContentItems.bind(this),
                },
                {
                    headerName: 'Items', field: 'Items', width: 102, headerClass: 'dense', cellClass: 'secondary-action no-padding',
                    sortable: true, filter: 'agNumberColumnFilter', cellRenderer: 'dataItemsComponent', onCellClicked: this.addItem.bind(this),
                },
                {
                    headerName: 'Fields', field: 'Fields', width: 94, headerClass: 'dense', cellClass: 'secondary-action no-padding',
                    sortable: true, filter: 'agNumberColumnFilter', cellRenderer: 'dataFieldsComponent', onCellClicked: this.editFields.bind(this),
                },
                {
                    headerName: 'Name', field: 'Name', flex: 1, minWidth: 100, cellClass: this.nameCellClassGetter.bind(this),
                    sortable: true, filter: 'agTextColumnFilter',
                    onCellClicked: function (event) { _this.editContentType(event.data); },
                },
                {
                    headerName: 'Description', field: 'Metadata.Description', flex: 3, minWidth: 250, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter',
                },
                {
                    width: 120, cellClass: 'secondary-action no-padding', cellRenderer: 'dataActionsComponent', pinned: 'right',
                    cellRendererParams: {
                        enablePermissionsGetter: this.enablePermissionsGetter.bind(this),
                        onCreateOrEditMetadata: this.createOrEditMetadata.bind(this),
                        onOpenPermissions: this.openPermissions.bind(this),
                        onEdit: this.editContentType.bind(this),
                        onOpenRestApi: this.openRestApi.bind(this),
                        onTypeExport: this.exportType.bind(this),
                        onOpenDataExport: this.openDataExport.bind(this),
                        onOpenDataImport: this.openDataImport.bind(this),
                        onDelete: this.deleteContentType.bind(this),
                    },
                },
            ] });
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    DataComponent.prototype.ngOnInit = function () {
        this.fetchContentTypes();
        this.fetchScopes();
        this.refreshOnChildClosed();
    };
    DataComponent.prototype.ngOnDestroy = function () {
        this.contentTypes$.complete();
        this.scopeOptions$.complete();
        this.subscription.unsubscribe();
    };
    DataComponent.prototype.filesDropped = function (files) {
        var _this = this;
        var importFile = files[0];
        var ext = importFile.name.substring(importFile.name.lastIndexOf('.') + 1).toLocaleLowerCase();
        switch (ext) {
            case 'xml':
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(Object(_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_14__["toString"])(files[0])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (fileString) {
                    var contentTypeName = fileString.split('<Entity Type="')[1].split('"')[0];
                    var contentType = _this.contentTypes$.value.find(function (ct) { return ct.Name === contentTypeName; });
                    if (contentType == null) {
                        var message = "Cannot find Content Type named '" + contentTypeName + "'. Please open Content Type Import dialog manually.";
                        _this.snackBar.open(message, null, { duration: 5000 });
                        return;
                    }
                    _this.openDataImport(contentType, files);
                });
                break;
            case 'json':
                this.importType(files);
                break;
        }
    };
    DataComponent.prototype.importType = function (files) {
        var importContentTypeData = { files: files };
        this.router.navigate(['import'], { relativeTo: this.route.firstChild, state: importContentTypeData });
    };
    DataComponent.prototype.showContentItems = function (params) {
        var contentType = params.data;
        this.router.navigate(["items/" + contentType.StaticName], { relativeTo: this.route.firstChild });
    };
    DataComponent.prototype.editContentType = function (contentType) {
        if (!contentType) {
            this.router.navigate([this.scope + "/add"], { relativeTo: this.route.firstChild });
        }
        else {
            if (contentType.UsesSharedDef) {
                return;
            }
            this.router.navigate([this.scope + "/" + contentType.StaticName + "/edit"], { relativeTo: this.route.firstChild });
        }
    };
    DataComponent.prototype.fetchContentTypes = function () {
        var _this = this;
        this.contentTypesService.retrieveContentTypes(this.scope).subscribe(function (contentTypes) {
            _this.contentTypes$.next(contentTypes);
            if (_this.scope !== _this.defaultScope) {
                var message = 'Warning! You are in a special scope. Changing things here could easily break functionality';
                _this.snackBar.open(message, null, { duration: 2000 });
            }
        });
    };
    DataComponent.prototype.fetchScopes = function () {
        var _this = this;
        this.contentTypesService.getScopes().subscribe(function (scopes) {
            _this.scopeOptions$.next(scopes);
        });
    };
    DataComponent.prototype.createGhost = function () {
        var _this = this;
        var sourceName = window.prompt('To create a ghost content-type enter source static name / id - this is a very advanced operation - read more about it on 2sxc.org/help?tag=ghost');
        if (!sourceName) {
            return;
        }
        this.snackBar.open('Saving...');
        this.contentTypesService.createGhost(sourceName).subscribe(function (res) {
            _this.snackBar.open('Saved', null, { duration: 2000 });
            _this.fetchContentTypes();
        });
    };
    DataComponent.prototype.changeScope = function (newScope) {
        if (newScope === 'Other') {
            newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.');
            if (!newScope) {
                newScope = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].scopes.default.value;
            }
            else if (!this.scopeOptions$.value.find(function (option) { return option.value === newScope; })) {
                var newScopeOption = {
                    name: newScope,
                    value: newScope,
                };
                this.scopeOptions$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.scopeOptions$.value, [newScopeOption]));
            }
        }
        this.scope = newScope;
        this.fetchContentTypes();
    };
    DataComponent.prototype.enablePermissionsGetter = function () {
        return this.enablePermissions;
    };
    DataComponent.prototype.nameCellClassGetter = function (params) {
        var contentType = params.data;
        if (contentType.UsesSharedDef) {
            return 'disabled';
        }
        else {
            return 'primary-action highlight';
        }
    };
    DataComponent.prototype.addItem = function (params) {
        var contentType = params.data;
        var form = {
            items: [{ ContentTypeName: contentType.StaticName }],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_15__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route.firstChild });
    };
    DataComponent.prototype.editFields = function (params) {
        var contentType = params.data;
        if (contentType.UsesSharedDef) {
            return;
        }
        this.router.navigate(["fields/" + contentType.StaticName], { relativeTo: this.route.firstChild });
    };
    DataComponent.prototype.createOrEditMetadata = function (contentType) {
        var form = {
            items: [
                !contentType.Metadata
                    ? {
                        ContentTypeName: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].contentTypes.contentType,
                        For: {
                            Target: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].metadata.contentType.target,
                            String: contentType.StaticName,
                        },
                        Prefill: { Label: contentType.Name, Description: contentType.Description },
                    }
                    : { EntityId: contentType.Metadata.Id }
            ],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_15__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route.firstChild });
    };
    DataComponent.prototype.openRestApi = function (contentType) {
        this.router.navigate(["restapi/" + contentType.StaticName], { relativeTo: this.route.firstChild });
    };
    DataComponent.prototype.exportType = function (contentType) {
        this.contentExportService.exportJson(contentType.StaticName);
    };
    DataComponent.prototype.openDataExport = function (contentType) {
        this.router.navigate(["export/" + contentType.StaticName], { relativeTo: this.route.firstChild });
    };
    DataComponent.prototype.openDataImport = function (contentType, files) {
        var contentImportData = { files: files };
        this.router.navigate([contentType.StaticName + "/import"], { relativeTo: this.route.firstChild, state: contentImportData });
    };
    DataComponent.prototype.openPermissions = function (contentType) {
        this.router.navigate(["permissions/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].metadata.entity.type + "/" + _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_13__["eavConstants"].keyTypes.guid + "/" + contentType.StaticName], { relativeTo: this.route.firstChild });
    };
    DataComponent.prototype.deleteContentType = function (contentType) {
        var _this = this;
        if (!confirm("Are you sure you want to delete '" + contentType.Name + "' (" + contentType.Id + ")?")) {
            return;
        }
        this.snackBar.open('Deleting...');
        this.contentTypesService.delete(contentType).subscribe(function (result) {
            _this.snackBar.open('Deleted', null, { duration: 2000 });
            _this.fetchContentTypes();
        });
    };
    DataComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(!!this.route.snapshot.firstChild.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () { return !!_this.route.snapshot.firstChild.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            _this.fetchContentTypes();
        }));
    };
    DataComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_content_types_service__WEBPACK_IMPORTED_MODULE_19__["ContentTypesService"] },
        { type: _edit_shared_services_global_configuration_service__WEBPACK_IMPORTED_MODULE_9__["GlobalConfigService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_10__["ContentExportService"] }
    ]; };
    DataComponent.propDecorators = {
        enablePermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    DataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-data',
            template: _raw_loader_data_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_data_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_content_types_service__WEBPACK_IMPORTED_MODULE_19__["ContentTypesService"],
            _edit_shared_services_global_configuration_service__WEBPACK_IMPORTED_MODULE_9__["GlobalConfigService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_10__["ContentExportService"]])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "dqGB":
/*!*****************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-query/import-query.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".import-result-box {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vc3ViLWRpYWxvZ3MvaW1wb3J0LXF1ZXJ5L2ltcG9ydC1xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9pbXBvcnQtcXVlcnkvaW1wb3J0LXF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltcG9ydC1yZXN1bHQtYm94IHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "dv9T":
/*!*************************************************************************************************!*\
  !*** ./src/app/app-administration/app-administration-nav/app-administration-nav.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL2FwcC1hZG1pbmlzdHJhdGlvbi1uYXYvYXBwLWFkbWluaXN0cmF0aW9uLW5hdi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "eOQJ":
/*!****************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/queries-actions/queries-actions.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: QueriesActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueriesActionsComponent", function() { return QueriesActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_queries_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./queries-actions.component.html */ "kUgN");
/* harmony import */ var _queries_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries-actions.component.scss */ "PkOV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var QueriesActionsComponent = /** @class */ (function () {
    function QueriesActionsComponent() {
    }
    QueriesActionsComponent.prototype.agInit = function (params) {
        this.params = params;
        this.query = this.params.data;
        this.enablePermissions = this.params.enablePermissionsGetter();
    };
    QueriesActionsComponent.prototype.refresh = function (params) {
        return true;
    };
    QueriesActionsComponent.prototype.editQuery = function () {
        this.params.onEditQuery(this.query);
    };
    QueriesActionsComponent.prototype.openPermissions = function () {
        this.params.onOpenPermissions(this.query);
    };
    QueriesActionsComponent.prototype.cloneQuery = function () {
        this.params.onCloneQuery(this.query);
    };
    QueriesActionsComponent.prototype.exportQuery = function () {
        this.params.onExportQuery(this.query);
    };
    QueriesActionsComponent.prototype.deleteQuery = function () {
        this.params.onDelete(this.query);
    };
    QueriesActionsComponent.ctorParameters = function () { return []; };
    QueriesActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-queries-actions',
            template: _raw_loader_queries_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_queries_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], QueriesActionsComponent);
    return QueriesActionsComponent;
}());



/***/ }),

/***/ "fGu5":
/*!*******************************************************************!*\
  !*** ./src/app/app-administration/web-api/web-api.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL3dlYi1hcGkvd2ViLWFwaS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "fo4y":
/*!********************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/sub-dialogs/edit-content-type/edit-content-type.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">{{ contentTypeStaticName ? 'Edit Content Type' : 'New Content Type' }}</div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <form class=\"dialog-form\" *ngIf=\"data.contentType\" #ngForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n    <div class=\"dialog-form-content fancy-scrollbar-light\">\r\n      <div class=\"edit-input\">\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Name</mat-label>\r\n          <input matInput type=\"text\" required [pattern]=\"contentTypeNamePattern\" [ngModel]=\"data.contentType.Name\"\r\n            (ngModelChange)=\"changeContentTypeName($event)\" name=\"Name\" #name=\"ngModel\">\r\n        </mat-form-field>\r\n        <ng-container *ngIf=\"name.touched && name.errors\">\r\n          <app-field-hint *ngIf=\"name.errors.required\" [isError]=\"true\">This field is required</app-field-hint>\r\n          <app-field-hint *ngIf=\"name.errors.pattern\" [isError]=\"true\">{{ contentTypeNameError }}</app-field-hint>\r\n        </ng-container>\r\n      </div>\r\n      <mat-accordion [@.disabled]=\"data.disableAnimation\">\r\n        <mat-expansion-panel expanded=\"false\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Advanced</mat-panel-title>\r\n            <mat-panel-description></mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n\r\n          <div class=\"edit-input\">\r\n            <mat-form-field appearance=\"standard\" color=\"accent\">\r\n              <mat-label>Scope</mat-label>\r\n              <mat-select [ngModel]=\"data.contentType.Scope\" name=\"Scope\" (ngModelChange)=\"changeScope($event)\"\r\n                [disabled]=\"data.lockScope\">\r\n                <mat-option *ngFor=\"let scopeOption of data.scopeOptions\" [value]=\"scopeOption.value\">\r\n                  {{ scopeOption.name }}\r\n                </mat-option>\r\n                <mat-option value=\"Other\">Other...</mat-option>\r\n              </mat-select>\r\n              <button mat-icon-button type=\"button\" matSuffix [matTooltip]=\"data.lockScope ? 'Unlock' : 'Lock'\">\r\n                <mat-icon appClickStopPropagation (click)=\"unlockScope()\">\r\n                  {{ data.lockScope ? 'lock' : 'lock_open' }}\r\n                </mat-icon>\r\n              </button>\r\n            </mat-form-field>\r\n            <app-field-hint>\r\n              The scope should almost never be changed -\r\n              <a href=\"https://2sxc.org/help?tag=scope\" target=\"_blank\" appClickStopPropagation>see help</a>\r\n            </app-field-hint>\r\n          </div>\r\n\r\n          <div class=\"edit-input\">\r\n            <mat-form-field appearance=\"standard\" color=\"accent\">\r\n              <mat-label>Static Name</mat-label>\r\n              <input matInput type=\"text\" [ngModel]=\"data.contentType.StaticName\" name=\"StaticName\" disabled>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div *ngIf=\"data.contentType.SharedDefId\" class=\"edit-input\">\r\n            <h3>Shared Content Type (Ghost)</h3>\r\n            <p>Note: this can't be edited in the UI, for now if you really know what you're doing, do it in the DB</p>\r\n            <p>Uses Type Definition of: {{ data.contentType.SharedDefId }}</p>\r\n          </div>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <div class=\"dialog-form-actions\">\r\n      <button mat-raised-button type=\"button\" (click)=\"closeDialog()\">Cancel</button>\r\n      <button mat-raised-button type=\"submit\" color=\"accent\" [disabled]=\"!ngForm.form.valid || data.loading\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </form>\r\n</ng-container>\r\n");

/***/ }),

/***/ "gNfS":
/*!***********************************************************************************************!*\
  !*** ./src/app/app-administration/app-administration-nav/app-administration-dialog.config.ts ***!
  \***********************************************************************************************/
/*! exports provided: appAdministrationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appAdministrationDialog", function() { return appAdministrationDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var appAdministrationDialog = {
    name: 'APP_ADMINISTRATION_DIALOG',
    initContext: true,
    panelSize: 'large',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var AppAdministrationNavComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-administration-nav.component */ "XySb"))];
                    case 1:
                        AppAdministrationNavComponent = (_a.sent()).AppAdministrationNavComponent;
                        return [2 /*return*/, AppAdministrationNavComponent];
                }
            });
        });
    }
};


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

/***/ "i2HA":
/*!*****************************************************************!*\
  !*** ./src/app/app-administration/app-administration.module.ts ***!
  \*****************************************************************/
/*! exports provided: AppAdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAdministrationModule", function() { return AppAdministrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/angular */ "W6oE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ "f3iV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Meci");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "+Tre");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "F1o0");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "//S1");
/* harmony import */ var _edit_eav_material_controls_adam_sanitize_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../edit/eav-material-controls/adam/sanitize.service */ "+UDY");
/* harmony import */ var _apps_management_services_apps_list_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../apps-management/services/apps-list.service */ "2aC0");
/* harmony import */ var _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../content-export/services/content-export.service */ "Bwh1");
/* harmony import */ var _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../content-items/services/content-items.service */ "55Ui");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/services/dialog.service */ "H0VJ");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _ag_grid_components_data_actions_data_actions_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ag-grid-components/data-actions/data-actions.component */ "7L/z");
/* harmony import */ var _ag_grid_components_data_fields_data_fields_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ag-grid-components/data-fields/data-fields.component */ "OjP1");
/* harmony import */ var _ag_grid_components_data_items_data_items_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ag-grid-components/data-items/data-items.component */ "KI+R");
/* harmony import */ var _ag_grid_components_queries_actions_queries_actions_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ag-grid-components/queries-actions/queries-actions.component */ "eOQJ");
/* harmony import */ var _ag_grid_components_views_actions_views_actions_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ag-grid-components/views-actions/views-actions.component */ "Spiu");
/* harmony import */ var _ag_grid_components_views_show_views_show_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ag-grid-components/views-show/views-show.component */ "RUxz");
/* harmony import */ var _ag_grid_components_views_type_views_type_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ag-grid-components/views-type/views-type.component */ "A424");
/* harmony import */ var _ag_grid_components_views_usage_id_views_usage_id_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ag-grid-components/views-usage-id/views-usage-id.component */ "6Az3");
/* harmony import */ var _ag_grid_components_views_usage_status_filter_views_usage_status_filter_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ag-grid-components/views-usage-status-filter/views-usage-status-filter.component */ "rejv");
/* harmony import */ var _ag_grid_components_web_api_actions_web_api_actions_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ag-grid-components/web-api-actions/web-api-actions.component */ "1jVc");
/* harmony import */ var _app_administration_nav_app_administration_nav_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./app-administration-nav/app-administration-nav.component */ "XySb");
/* harmony import */ var _app_administration_routing_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./app-administration-routing.module */ "+IvA");
/* harmony import */ var _app_configuration_app_configuration_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./app-configuration/app-configuration.component */ "PHN+");
/* harmony import */ var _data_data_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./data/data.component */ "dUHD");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "sG3L");
/* harmony import */ var _queries_queries_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./queries/queries.component */ "4hnE");
/* harmony import */ var _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/app-dialog-config.service */ "KoVM");
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/content-types.service */ "S36y");
/* harmony import */ var _services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/export-app-parts.service */ "bkzA");
/* harmony import */ var _services_export_app_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/export-app.service */ "q3Tv");
/* harmony import */ var _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/import-app-parts.service */ "WlMA");
/* harmony import */ var _services_pipelines_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/pipelines.service */ "frVg");
/* harmony import */ var _services_views_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/views.service */ "uzd0");
/* harmony import */ var _services_web_apis_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/web-apis.service */ "p2eq");
/* harmony import */ var _sub_dialogs_edit_content_type_edit_content_type_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./sub-dialogs/edit-content-type/edit-content-type.component */ "YLeX");
/* harmony import */ var _sub_dialogs_export_app_parts_export_app_parts_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./sub-dialogs/export-app-parts/export-app-parts.component */ "0bV3");
/* harmony import */ var _sub_dialogs_export_app_export_app_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./sub-dialogs/export-app/export-app.component */ "qtGM");
/* harmony import */ var _sub_dialogs_import_app_parts_import_app_parts_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./sub-dialogs/import-app-parts/import-app-parts.component */ "4rFR");
/* harmony import */ var _sub_dialogs_import_content_type_import_content_type_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./sub-dialogs/import-content-type/import-content-type.component */ "NtNJ");
/* harmony import */ var _sub_dialogs_import_query_import_query_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./sub-dialogs/import-query/import-query.component */ "TFsy");
/* harmony import */ var _sub_dialogs_import_view_import_view_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./sub-dialogs/import-view/import-view.component */ "bBWv");
/* harmony import */ var _sub_dialogs_views_usage_views_usage_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./sub-dialogs/views-usage/views-usage.component */ "r5Qb");
/* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./views/views.component */ "Fam9");
/* harmony import */ var _web_api_web_api_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./web-api/web-api.component */ "QzZc");































































var AppAdministrationModule = /** @class */ (function () {
    function AppAdministrationModule() {
    }
    AppAdministrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_43__["GettingStartedComponent"],
                _app_administration_nav_app_administration_nav_component__WEBPACK_IMPORTED_MODULE_39__["AppAdministrationNavComponent"],
                _data_data_component__WEBPACK_IMPORTED_MODULE_42__["DataComponent"],
                _queries_queries_component__WEBPACK_IMPORTED_MODULE_44__["QueriesComponent"],
                _views_views_component__WEBPACK_IMPORTED_MODULE_61__["ViewsComponent"],
                _web_api_web_api_component__WEBPACK_IMPORTED_MODULE_62__["WebApiComponent"],
                _app_configuration_app_configuration_component__WEBPACK_IMPORTED_MODULE_41__["AppConfigurationComponent"],
                _ag_grid_components_data_items_data_items_component__WEBPACK_IMPORTED_MODULE_31__["DataItemsComponent"],
                _ag_grid_components_data_fields_data_fields_component__WEBPACK_IMPORTED_MODULE_30__["DataFieldsComponent"],
                _ag_grid_components_data_actions_data_actions_component__WEBPACK_IMPORTED_MODULE_29__["DataActionsComponent"],
                _ag_grid_components_queries_actions_queries_actions_component__WEBPACK_IMPORTED_MODULE_32__["QueriesActionsComponent"],
                _ag_grid_components_views_type_views_type_component__WEBPACK_IMPORTED_MODULE_35__["ViewsTypeComponent"],
                _ag_grid_components_views_show_views_show_component__WEBPACK_IMPORTED_MODULE_34__["ViewsShowComponent"],
                _ag_grid_components_views_actions_views_actions_component__WEBPACK_IMPORTED_MODULE_33__["ViewsActionsComponent"],
                _sub_dialogs_edit_content_type_edit_content_type_component__WEBPACK_IMPORTED_MODULE_53__["EditContentTypeComponent"],
                _sub_dialogs_import_query_import_query_component__WEBPACK_IMPORTED_MODULE_58__["ImportQueryComponent"],
                _sub_dialogs_export_app_export_app_component__WEBPACK_IMPORTED_MODULE_55__["ExportAppComponent"],
                _sub_dialogs_export_app_parts_export_app_parts_component__WEBPACK_IMPORTED_MODULE_54__["ExportAppPartsComponent"],
                _sub_dialogs_import_app_parts_import_app_parts_component__WEBPACK_IMPORTED_MODULE_56__["ImportAppPartsComponent"],
                _ag_grid_components_web_api_actions_web_api_actions_component__WEBPACK_IMPORTED_MODULE_38__["WebApiActionsComponent"],
                _sub_dialogs_views_usage_views_usage_component__WEBPACK_IMPORTED_MODULE_60__["ViewsUsageComponent"],
                _ag_grid_components_views_usage_id_views_usage_id_component__WEBPACK_IMPORTED_MODULE_36__["ViewsUsageIdComponent"],
                _ag_grid_components_views_usage_status_filter_views_usage_status_filter_component__WEBPACK_IMPORTED_MODULE_37__["ViewsUsageStatusFilterComponent"],
                _sub_dialogs_import_content_type_import_content_type_component__WEBPACK_IMPORTED_MODULE_57__["ImportContentTypeComponent"],
                _sub_dialogs_import_view_import_view_component__WEBPACK_IMPORTED_MODULE_59__["ImportViewComponent"],
            ],
            entryComponents: [
                _app_administration_nav_app_administration_nav_component__WEBPACK_IMPORTED_MODULE_39__["AppAdministrationNavComponent"],
                _ag_grid_components_data_items_data_items_component__WEBPACK_IMPORTED_MODULE_31__["DataItemsComponent"],
                _ag_grid_components_data_fields_data_fields_component__WEBPACK_IMPORTED_MODULE_30__["DataFieldsComponent"],
                _ag_grid_components_data_actions_data_actions_component__WEBPACK_IMPORTED_MODULE_29__["DataActionsComponent"],
                _ag_grid_components_queries_actions_queries_actions_component__WEBPACK_IMPORTED_MODULE_32__["QueriesActionsComponent"],
                _ag_grid_components_views_type_views_type_component__WEBPACK_IMPORTED_MODULE_35__["ViewsTypeComponent"],
                _ag_grid_components_views_show_views_show_component__WEBPACK_IMPORTED_MODULE_34__["ViewsShowComponent"],
                _ag_grid_components_views_actions_views_actions_component__WEBPACK_IMPORTED_MODULE_33__["ViewsActionsComponent"],
                _sub_dialogs_edit_content_type_edit_content_type_component__WEBPACK_IMPORTED_MODULE_53__["EditContentTypeComponent"],
                _sub_dialogs_import_query_import_query_component__WEBPACK_IMPORTED_MODULE_58__["ImportQueryComponent"],
                _sub_dialogs_export_app_export_app_component__WEBPACK_IMPORTED_MODULE_55__["ExportAppComponent"],
                _sub_dialogs_export_app_parts_export_app_parts_component__WEBPACK_IMPORTED_MODULE_54__["ExportAppPartsComponent"],
                _sub_dialogs_import_app_parts_import_app_parts_component__WEBPACK_IMPORTED_MODULE_56__["ImportAppPartsComponent"],
                _ag_grid_components_web_api_actions_web_api_actions_component__WEBPACK_IMPORTED_MODULE_38__["WebApiActionsComponent"],
                _sub_dialogs_views_usage_views_usage_component__WEBPACK_IMPORTED_MODULE_60__["ViewsUsageComponent"],
                _ag_grid_components_views_usage_id_views_usage_id_component__WEBPACK_IMPORTED_MODULE_36__["ViewsUsageIdComponent"],
                _ag_grid_components_views_usage_status_filter_views_usage_status_filter_component__WEBPACK_IMPORTED_MODULE_37__["ViewsUsageStatusFilterComponent"],
                _sub_dialogs_import_content_type_import_content_type_component__WEBPACK_IMPORTED_MODULE_57__["ImportContentTypeComponent"],
                _sub_dialogs_import_view_import_view_component__WEBPACK_IMPORTED_MODULE_59__["ImportViewComponent"],
            ],
            imports: [
                _app_administration_routing_module__WEBPACK_IMPORTED_MODULE_40__["AppAdministrationRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_28__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
                _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridModule"].withComponents([]),
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_21__["EcoFabSpeedDialModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_26__["Context"],
                _services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_45__["AppDialogConfigService"],
                _services_content_types_service__WEBPACK_IMPORTED_MODULE_46__["ContentTypesService"],
                _services_pipelines_service__WEBPACK_IMPORTED_MODULE_50__["PipelinesService"],
                _services_views_service__WEBPACK_IMPORTED_MODULE_51__["ViewsService"],
                _content_export_services_content_export_service__WEBPACK_IMPORTED_MODULE_24__["ContentExportService"],
                _services_web_apis_service__WEBPACK_IMPORTED_MODULE_52__["WebApisService"],
                _content_items_services_content_items_service__WEBPACK_IMPORTED_MODULE_25__["ContentItemsService"],
                _services_export_app_service__WEBPACK_IMPORTED_MODULE_48__["ExportAppService"],
                _services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_47__["ExportAppPartsService"],
                _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_49__["ImportAppPartsService"],
                _edit_eav_material_controls_adam_sanitize_service__WEBPACK_IMPORTED_MODULE_22__["SanitizeService"],
                _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_27__["DialogService"],
                _apps_management_services_apps_list_service__WEBPACK_IMPORTED_MODULE_23__["AppsListService"],
            ]
        })
    ], AppAdministrationModule);
    return AppAdministrationModule;
}());



/***/ }),

/***/ "j/A1":
/*!******************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/app-administration-nav/app-administration-nav.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-component-wrapper\" appToggleDebug *ngIf=\"(templateVars$ | async) as data\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>{{ data.dialogSettings?.Context.App.Name }} Admin</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <!-- spm NOTE: we use mat-tab-group because mat-tab-nav-bar doesn't have animations and doesn't look pretty -->\r\n  <mat-tab-group dynamicHeight color=\"accent\" *ngIf=\"data.dialogSettings && data.tabIndex != null\"\r\n    (selectedTabChange)=\"changeTab($event)\" [selectedIndex]=\"data.tabIndex\">\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"App Info\">\r\n        <mat-icon>info</mat-icon>\r\n        <span>Info</span>\r\n      </div>\r\n      <app-getting-started *matTabContent [gettingStartedUrl]=\"data.dialogSettings.Context.App.GettingStartedUrl\">\r\n      </app-getting-started>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Data / Content\">\r\n        <mat-icon>menu</mat-icon>\r\n        <span>Data</span>\r\n      </div>\r\n      <app-data *matTabContent [enablePermissions]=\"data.dialogSettings.Context.Enable.AppPermissions\"></app-data>\r\n    </mat-tab>\r\n\r\n    <mat-tab *ngIf=\"data.dialogSettings.Context.Enable.Query\">\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Queries / Visual Query Designer\">\r\n        <mat-icon>filter_list</mat-icon>\r\n        <span>Queries</span>\r\n      </div>\r\n      <app-queries *matTabContent [enablePermissions]=\"data.dialogSettings.Context.Enable.AppPermissions\">\r\n      </app-queries>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Views / Templates\">\r\n        <mat-icon>layers</mat-icon>\r\n        <span>Views</span>\r\n      </div>\r\n      <app-views *matTabContent [enableCode]=\"data.dialogSettings.Context.Enable.CodeEditor\"\r\n        [enablePermissions]=\"data.dialogSettings.Context.Enable.AppPermissions\">\r\n      </app-views>\r\n    </mat-tab>\r\n\r\n    <mat-tab *ngIf=\"data.dialogSettings.Context.Enable.Query\">\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"WebApi\">\r\n        <mat-icon>offline_bolt</mat-icon>\r\n        <span>WebApi</span>\r\n      </div>\r\n      <app-web-api *matTabContent [enableCode]=\"data.dialogSettings.Context.Enable.CodeEditor\">\r\n      </app-web-api>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"App Settings\">\r\n        <mat-icon>settings_applications</mat-icon>\r\n        <span>App</span>\r\n      </div>\r\n      <app-app-configuration *matTabContent [dialogSettings]=\"data.dialogSettings\">\r\n      </app-app-configuration>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n");

/***/ }),

/***/ "kUgN":
/*!***********************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/queries-actions/queries-actions.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Edit\" (click)=\"editQuery()\">\r\n    <mat-icon>edit</mat-icon>\r\n  </div>\r\n\r\n  <div class=\"like-button highlight\" matRipple *ngIf=\"enablePermissions\" matTooltip=\"Permissions\"\r\n    (click)=\"openPermissions()\">\r\n    <mat-icon [matBadge]=\"query._Permissions.Count\" matBadgePosition=\"after\" matBadgeColor=\"accent\" matBadgeSize=\"small\"\r\n      *ngIf=\"query._Permissions.Count\">\r\n      person\r\n    </mat-icon>\r\n    <mat-icon *ngIf=\"!query._Permissions.Count\">person</mat-icon>\r\n  </div>\r\n  <div class=\"like-button disabled\" *ngIf=\"!enablePermissions\">\r\n    <mat-icon>person</mat-icon>\r\n  </div>\r\n\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"More\" [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_horiz</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\" class=\"grid-more-menu\">\r\n  <button mat-menu-item (click)=\"cloneQuery()\">\r\n    <mat-icon>file_copy</mat-icon>\r\n    <span>Copy</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"exportQuery()\">\r\n    <mat-icon>cloud_download</mat-icon>\r\n    <span>Export</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"deleteQuery()\">\r\n    <mat-icon>delete</mat-icon>\r\n    <span>Delete</span>\r\n  </button>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "lmLB":
/*!***************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/export-app/export-app-dialog.config.ts ***!
  \***************************************************************************************/
/*! exports provided: exportAppDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportAppDialog", function() { return exportAppDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var exportAppDialog = {
    name: 'EXPORT_APP',
    initContext: false,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ExportAppComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./export-app.component */ "qtGM"))];
                    case 1:
                        ExportAppComponent = (_a.sent()).ExportAppComponent;
                        return [2 /*return*/, ExportAppComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "loIv":
/*!***********************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/views-usage/views-usage.helpers.ts ***!
  \***********************************************************************************/
/*! exports provided: buildData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildData", function() { return buildData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

function buildData(viewUsage) {
    var e_1, _a, e_2, _b;
    var data = [];
    try {
        for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(viewUsage.Blocks), _d = _c.next(); !_d.done; _d = _c.next()) {
            var block = _d.value;
            if (block.Modules.length === 0) {
                data.push({
                    Block: { Id: block.Id, Guid: block.Guid },
                });
            }
            try {
                for (var _e = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(block.Modules)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var module_1 = _f.value;
                    data.push({
                        Block: { Id: block.Id, Guid: block.Guid },
                        Module: module_1,
                        PageId: module_1.Page.Id,
                        Name: module_1.Page.Name,
                        Url: module_1.Page.Url,
                        Language: module_1.Page.CultureCode,
                        Status: { IsVisible: module_1.Page.Visible, IsDeleted: module_1.IsDeleted },
                    });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return data;
}


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

/***/ "mDlR":
/*!***************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-view/import-view.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".import-result-box {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vc3ViLWRpYWxvZ3MvaW1wb3J0LXZpZXcvaW1wb3J0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vc3ViLWRpYWxvZ3MvaW1wb3J0LXZpZXcvaW1wb3J0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1wb3J0LXJlc3VsdC1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "nNlm":
/*!******************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/sub-dialogs/export-app-parts/export-app-parts.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">Export Content and Templates from this App</div>\r\n  </div>\r\n\r\n  <p class=\"dialog-description\">\r\n    This is an advanced feature to export parts of the app.\r\n    The export will create an xml file which can be imported into another site or app.\r\n    To export the entire content of the app (for example when duplicating the entire site), go to the app export.\r\n    For further help visit <a href=\"https://2sxc.org/en/help?tag=export\" target=\"_blank\">2sxc Help</a>.\r\n  </p>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light\">\r\n    <div class=\"edit-input\">\r\n      <mat-form-field appearance=\"standard\" color=\"accent\">\r\n        <mat-label>Scope</mat-label>\r\n        <mat-select [ngModel]=\"exportScope\" name=\"Scope\" [disabled]=\"lockScope\" (ngModelChange)=\"changeScope($event)\">\r\n          <mat-option *ngFor=\"let scopeOption of scopeOptions\" [value]=\"scopeOption.value\">\r\n            {{ scopeOption.name }}\r\n          </mat-option>\r\n          <mat-option value=\"Other\">Other...</mat-option>\r\n        </mat-select>\r\n        <button mat-icon-button type=\"button\" matSuffix [matTooltip]=\"lockScope ? 'Unlock' : 'Lock'\">\r\n          <mat-icon appClickStopPropagation (click)=\"unlockScope()\">\r\n            {{ lockScope ? 'lock' : 'lock_open' }}\r\n          </mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n      <app-field-hint>\r\n        The scope should almost never be changed -\r\n        <a appClickStopPropagation href=\"https://2sxc.org/help?tag=scope\" target=\"_blank\">see help</a>\r\n      </app-field-hint>\r\n    </div>\r\n\r\n    <div *ngIf=\"contentInfo\">\r\n      <ul class=\"content-info__list content-info__base\">\r\n        <p class=\"content-info__title\">Content Types</p>\r\n        <li class=\"content-info__item\" *ngFor=\"let contentType of contentInfo.ContentTypes\">\r\n          <div class=\"option-box\">\r\n            <mat-checkbox [(ngModel)]=\"contentType._export\">\r\n              <span class=\"option-box__text\">{{ contentType.Name }} ({{ contentType.Id }})</span>\r\n            </mat-checkbox>\r\n          </div>\r\n\r\n          <ul class=\"content-info__list\" *ngIf=\"contentType.Templates.length > 0\">\r\n            <p class=\"content-info__subtitle\">Templates</p>\r\n            <li class=\"content-info__item\" *ngFor=\"let template of contentType.Templates\">\r\n              <div class=\"option-box\">\r\n                <mat-checkbox [(ngModel)]=\"template._export\">\r\n                  <span class=\"option-box__text\">{{ template.Name }} ({{ template.Id }})</span>\r\n                </mat-checkbox>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n\r\n          <ul class=\"content-info__list\" *ngIf=\"contentType.Entities.length > 0\">\r\n            <p class=\"content-info__subtitle\">Entities</p>\r\n            <li class=\"content-info__item\" *ngFor=\"let entity of contentType.Entities\">\r\n              <div class=\"option-box\">\r\n                <mat-checkbox [(ngModel)]=\"entity._export\">\r\n                  <span class=\"option-box__text\">{{ entity.Title }} ({{ entity.Id }})</span>\r\n                </mat-checkbox>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"content-info__list content-info__base\">\r\n        <p class=\"content-info__title\">Templates Without Content Types</p>\r\n        <li class=\"content-info__item\" *ngFor=\"let template of contentInfo.TemplatesWithoutContentTypes\">\r\n          <div class=\"option-box\">\r\n            <mat-checkbox [(ngModel)]=\"template._export\">\r\n              <span class=\"option-box__text\">{{ template.Name }} ({{ template.Id }})</span>\r\n            </mat-checkbox>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <button mat-raised-button [disabled]=\"data.loading || data.isExporting\" (click)=\"closeDialog()\">\r\n      Cancel\r\n    </button>\r\n    <button mat-raised-button color=\"accent\" [disabled]=\"data.loading || data.isExporting\" (click)=\"exportAppParts()\">\r\n      Export\r\n    </button>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "p2eq":
/*!*****************************************************************!*\
  !*** ./src/app/app-administration/services/web-apis.service.ts ***!
  \*****************************************************************/
/*! exports provided: WebApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebApisService", function() { return WebApisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var projects_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/edit */ "geKs");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






var WebApisService = /** @class */ (function () {
    function WebApisService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    WebApisService.prototype.getAll = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(projects_edit__WEBPACK_IMPORTED_MODULE_4__["webApiAppFilesAll"]), {
            params: { appId: this.context.appId.toString(), path: '', mask: '*Controller.cs', withSubfolders: 'true' },
        });
    };
    WebApisService.prototype.create = function (name) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(projects_edit__WEBPACK_IMPORTED_MODULE_4__["webApiAppFileCreate"]), {}, {
            params: { appId: this.context.appId.toString(), global: 'false', path: "api/" + name },
        });
    };
    WebApisService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    WebApisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], WebApisService);
    return WebApisService;
}());



/***/ }),

/***/ "p9sG":
/*!***********************************************************!*\
  !*** ./src/app/app-administration/views/views.helpers.ts ***!
  \***********************************************************/
/*! exports provided: calculateViewType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateViewType", function() { return calculateViewType; });
function calculateViewType(view) {
    var value = '';
    var icon = '';
    if (view.HasQuery) {
        value = 'Data (from query)';
        icon = 'filter_list';
    }
    else if (view.List) {
        value = 'Items (list)';
        icon = 'format_list_numbered';
    }
    else if (!view.ContentType && !view.HasQuery) {
        value = 'Code';
        icon = 'check_box_outline_blank';
    }
    else if (!view.List) {
        value = 'Item (one)';
        icon = 'looks_one';
    }
    return { value: value, icon: icon };
}


/***/ }),

/***/ "pjwo":
/*!***********************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/web-api-actions/web-api-actions.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple *ngIf=\"enableCode\" matTooltip=\"Code\" (click)=\"openCode()\">\r\n    <mat-icon>code</mat-icon>\r\n  </div>\r\n  <div class=\"like-button disabled\" *ngIf=\"!enableCode\">\r\n    <mat-icon>code</mat-icon>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "q3Tv":
/*!*******************************************************************!*\
  !*** ./src/app/app-administration/services/export-app.service.ts ***!
  \*******************************************************************/
/*! exports provided: ExportAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportAppService", function() { return ExportAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../import-app/services/import-app.service */ "ZEis");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






var ExportAppService = /** @class */ (function () {
    function ExportAppService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ExportAppService.prototype.getAppInfo = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'Statistics'), {
            params: { appid: this.context.appId.toString(), zoneId: this.context.zoneId.toString() },
        });
    };
    ExportAppService.prototype.exportApp = function (includeContentGroups, resetAppGuid) {
        var url = this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'Export')
            + '?appId=' + this.context.appId
            + '&zoneId=' + this.context.zoneId
            + '&includeContentGroups=' + includeContentGroups
            + '&resetAppGuid=' + resetAppGuid;
        window.open(url, '_blank', '');
    };
    ExportAppService.prototype.exportForVersionControl = function (includeContentGroups, resetAppGuid) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_import_app_services_import_app_service__WEBPACK_IMPORTED_MODULE_4__["webApiAppRoot"] + 'SaveData'), {
            params: {
                appid: this.context.appId.toString(),
                zoneId: this.context.zoneId.toString(),
                includeContentGroups: includeContentGroups.toString(),
                resetAppGuid: resetAppGuid.toString(),
            },
        });
    };
    ExportAppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ExportAppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ExportAppService);
    return ExportAppService;
}());



/***/ }),

/***/ "qGxh":
/*!*****************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/edit-content-type/edit-content-type-dialog.config.ts ***!
  \*****************************************************************************************************/
/*! exports provided: editContentTypeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editContentTypeDialog", function() { return editContentTypeDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var editContentTypeDialog = {
    name: 'EDIT_CONTENT_TYPE_DIALOG',
    initContext: false,
    panelSize: 'small',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var EditContentTypeComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./edit-content-type.component */ "YLeX"))];
                    case 1:
                        EditContentTypeComponent = (_a.sent()).EditContentTypeComponent;
                        return [2 /*return*/, EditContentTypeComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "qIqc":
/*!*******************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/import-content-type/import-content-type.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".import-result-box {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vc3ViLWRpYWxvZ3MvaW1wb3J0LWNvbnRlbnQtdHlwZS9pbXBvcnQtY29udGVudC10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL3N1Yi1kaWFsb2dzL2ltcG9ydC1jb250ZW50LXR5cGUvaW1wb3J0LWNvbnRlbnQtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbXBvcnQtcmVzdWx0LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "qtGM":
/*!***********************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/export-app/export-app.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExportAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportAppComponent", function() { return ExportAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_export_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./export-app.component.html */ "YJat");
/* harmony import */ var _export_app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-app.component.scss */ "FN/O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_export_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/export-app.service */ "q3Tv");








var ExportAppComponent = /** @class */ (function () {
    function ExportAppComponent(dialogRef, exportAppService, zone) {
        this.dialogRef = dialogRef;
        this.exportAppService = exportAppService;
        this.zone = zone;
        this.hostClass = 'dialog-component';
        this.includeContentGroups = false;
        this.resetAppGuid = false;
        this.appInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.isExporting$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.appInfo$, this.isExporting$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), appInfo = _b[0], isExporting = _b[1];
            return ({ appInfo: appInfo, isExporting: isExporting });
        }));
    }
    ExportAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exportAppService.getAppInfo().subscribe(function (appInfo) {
            _this.appInfo$.next(appInfo);
        });
    };
    ExportAppComponent.prototype.ngOnDestroy = function () {
        this.appInfo$.complete();
        this.isExporting$.complete();
    };
    ExportAppComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ExportAppComponent.prototype.exportApp = function () {
        this.isExporting$.next(true);
        this.exportAppService.exportApp(this.includeContentGroups, this.resetAppGuid);
        this.isExporting$.next(false);
    };
    ExportAppComponent.prototype.exportGit = function () {
        var _this = this;
        this.isExporting$.next(true);
        this.exportAppService.exportForVersionControl(this.includeContentGroups, this.resetAppGuid).subscribe({
            next: function (res) {
                _this.isExporting$.next(false);
                alert('Done - please check your \'.data\' folder');
            },
            error: function (error) {
                _this.isExporting$.next(false);
            },
        });
    };
    ExportAppComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_export_app_service__WEBPACK_IMPORTED_MODULE_7__["ExportAppService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
    ]; };
    ExportAppComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ExportAppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-export-app',
            template: _raw_loader_export_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_export_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _services_export_app_service__WEBPACK_IMPORTED_MODULE_7__["ExportAppService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
    ], ExportAppComponent);
    return ExportAppComponent;
}());



/***/ }),

/***/ "r1R9":
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/views-show/views-show.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\">\r\n  <mat-icon *ngIf=\"value\">visibility</mat-icon>\r\n  <mat-icon *ngIf=\"!value\">visibility_off</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "r5Qb":
/*!*************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/views-usage/views-usage.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewsUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsUsageComponent", function() { return ViewsUsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_views_usage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./views-usage.component.html */ "AqVY");
/* harmony import */ var _views_usage_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views-usage.component.scss */ "ScqU");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "KLQV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ "QjRa");
/* harmony import */ var _ag_grid_components_views_usage_id_views_usage_id_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ag-grid-components/views-usage-id/views-usage-id.component */ "6Az3");
/* harmony import */ var _ag_grid_components_views_usage_status_filter_views_usage_status_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ag-grid-components/views-usage-status-filter/views-usage-status-filter.component */ "rejv");
/* harmony import */ var _services_views_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/views.service */ "uzd0");
/* harmony import */ var _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views-usage-grid.helpers */ "6meI");
/* harmony import */ var _views_usage_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views-usage.helpers */ "loIv");












// tslint:disable-next-line:max-line-length


var ViewsUsageComponent = /** @class */ (function () {
    function ViewsUsageComponent(dialogRef, route, viewsService) {
        this.dialogRef = dialogRef;
        this.route = route;
        this.viewsService = viewsService;
        this.viewUsage$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.viewTooltip$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__["defaultGridOptions"]), { frameworkComponents: {
                viewsUsageIdComponent: _ag_grid_components_views_usage_id_views_usage_id_component__WEBPACK_IMPORTED_MODULE_9__["ViewsUsageIdComponent"],
                viewsUsageStatusFilterComponent: _ag_grid_components_views_usage_status_filter_views_usage_status_filter_component__WEBPACK_IMPORTED_MODULE_10__["ViewsUsageStatusFilterComponent"],
            }, columnDefs: [
                {
                    headerName: 'Block', field: 'Block', width: 70, headerClass: 'dense', cellClass: 'id-action no-padding no-outline',
                    cellRenderer: 'viewsUsageIdComponent', sortable: true, filter: 'agTextColumnFilter', valueGetter: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_12__["blockIdValueGetter"],
                },
                {
                    headerName: 'Module', field: 'Module', width: 76, headerClass: 'dense', cellRenderer: 'viewsUsageIdComponent',
                    sortable: true, filter: 'agTextColumnFilter', valueGetter: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_12__["moduleIdValueGetter"], cellClass: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_12__["moduleIdClassGetter"],
                },
                {
                    headerName: 'Page', field: 'PageId', width: 70, headerClass: 'dense', cellRenderer: 'viewsUsageIdComponent',
                    sortable: true, filter: 'agTextColumnFilter', valueGetter: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_12__["pageIdValueGetter"], cellClass: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_12__["pageIdClassGetter"],
                },
                {
                    headerName: 'Name', field: 'Name', flex: 2, minWidth: 250, sortable: true, filter: 'agTextColumnFilter',
                    cellClass: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_12__["nameClassGetter"], onCellClicked: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_12__["onNameClicked"],
                },
                { headerName: 'Language', field: 'Language', width: 90, cellClass: 'no-outline', sortable: true, filter: 'agTextColumnFilter' },
                {
                    headerName: 'Status', field: 'Status', width: 80, cellClass: 'icon no-outline', filter: 'viewsUsageStatusFilterComponent',
                    cellRenderer: _views_usage_grid_helpers__WEBPACK_IMPORTED_MODULE_12__["statusCellRenderer"],
                },
            ] });
    }
    ViewsUsageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var viewGuid = this.route.snapshot.paramMap.get('guid');
        this.viewsService.getUsage(viewGuid).subscribe(function (viewUsages) {
            var viewUsage = viewUsages[0];
            _this.viewUsage$.next(viewUsage);
            var viewTooltip = "ID: " + viewUsage.Id + "\nGUID: " + viewUsage.Guid;
            _this.viewTooltip$.next(viewTooltip);
            var data = Object(_views_usage_helpers__WEBPACK_IMPORTED_MODULE_13__["buildData"])(viewUsage);
            _this.data$.next(data);
        });
    };
    ViewsUsageComponent.prototype.ngOnDestroy = function () {
        this.viewUsage$.complete();
        this.viewTooltip$.complete();
        this.data$.complete();
    };
    ViewsUsageComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ViewsUsageComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_views_service__WEBPACK_IMPORTED_MODULE_11__["ViewsService"] }
    ]; };
    ViewsUsageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-views-usage',
            template: _raw_loader_views_usage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_views_usage_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_views_service__WEBPACK_IMPORTED_MODULE_11__["ViewsService"]])
    ], ViewsUsageComponent);
    return ViewsUsageComponent;
}());



/***/ }),

/***/ "rejv":
/*!************************************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/views-usage-status-filter/views-usage-status-filter.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ViewsUsageStatusFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsUsageStatusFilterComponent", function() { return ViewsUsageStatusFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_views_usage_status_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./views-usage-status-filter.component.html */ "x6ps");
/* harmony import */ var _views_usage_status_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views-usage-status-filter.component.scss */ "B487");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var ViewsUsageStatusFilterComponent = /** @class */ (function () {
    function ViewsUsageStatusFilterComponent() {
        this.isVisible = '';
        this.isDeleted = '';
    }
    ViewsUsageStatusFilterComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    ViewsUsageStatusFilterComponent.prototype.isFilterActive = function () {
        return this.isVisible !== '' || this.isDeleted !== '';
    };
    ViewsUsageStatusFilterComponent.prototype.doesFilterPass = function (params) {
        var visiblePassed = false;
        var deletedPassed = false;
        var value = this.params.valueGetter(params.node);
        if (value == null) {
            return false;
        }
        if (this.isVisible !== '') {
            visiblePassed = (value.IsVisible == null) ? false : value.IsVisible.toString() === this.isVisible;
        }
        else {
            visiblePassed = true;
        }
        if (this.isDeleted !== '') {
            deletedPassed = (value.IsDeleted == null) ? false : value.IsDeleted.toString() === this.isDeleted;
        }
        else {
            deletedPassed = true;
        }
        return visiblePassed && deletedPassed;
    };
    ViewsUsageStatusFilterComponent.prototype.getModel = function () {
        if (!this.isFilterActive()) {
            return;
        }
        return {
            filterType: 'views-usage-status',
            isVisible: this.isVisible,
            isDeleted: this.isDeleted,
        };
    };
    ViewsUsageStatusFilterComponent.prototype.setModel = function (model) {
        this.isVisible = model ? model.isVisible : '';
        this.isDeleted = model ? model.isDeleted : '';
    };
    ViewsUsageStatusFilterComponent.prototype.afterGuiAttached = function (params) {
    };
    ViewsUsageStatusFilterComponent.prototype.filterChanged = function () {
        this.params.filterChangedCallback();
    };
    ViewsUsageStatusFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-views-usage-status-filter',
            template: _raw_loader_views_usage_status_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_views_usage_status_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ViewsUsageStatusFilterComponent);
    return ViewsUsageStatusFilterComponent;
}());



/***/ }),

/***/ "rmZ+":
/*!***************************************************************!*\
  !*** ./src/app/app-administration/views/views.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".more-actions-box {\n  margin-right: 66px;\n  display: flex;\n  align-items: flex-end;\n}\n.more-actions-box .mat-button .polymorph-logo {\n  width: 24px;\n  height: 24px;\n  margin-right: 4px;\n}\n.more-actions-box .mat-button .mat-icon {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vdmlld3Mvdmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQU47QUFHSTtFQUNFLGlCQUFBO0FBRE4iLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi92aWV3cy92aWV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3JlLWFjdGlvbnMtYm94IHtcclxuICBtYXJnaW4tcmlnaHQ6IDY2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gIC5tYXQtYnV0dG9uIHtcclxuICAgIC5wb2x5bW9ycGgtbG9nbyB7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "sG3L":
/*!*********************************************************************************!*\
  !*** ./src/app/app-administration/getting-started/getting-started.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_getting_started_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./getting-started.component.html */ "Kw72");
/* harmony import */ var _getting_started_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getting-started.component.scss */ "RsRu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");




var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
    };
    GettingStartedComponent.ctorParameters = function () { return []; };
    GettingStartedComponent.propDecorators = {
        gettingStartedUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    GettingStartedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-getting-started',
            template: _raw_loader_getting_started_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_getting_started_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "uzd0":
/*!**************************************************************!*\
  !*** ./src/app/app-administration/services/views.service.ts ***!
  \**************************************************************/
/*! exports provided: ViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsService", function() { return ViewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");





var webApiViewRoot = 'admin/view/';
var webApiViews = webApiViewRoot + 'all';
var webApiViewDelete = webApiViewRoot + 'delete';
var webApiViewImport = webApiViewRoot + 'import';
var webApiViewPolymorph = webApiViewRoot + 'polymorphism';
var webApiViewUsage = webApiViewRoot + 'usage';
var ViewsService = /** @class */ (function () {
    function ViewsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ViewsService.prototype.getAll = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViews), {
            params: { appId: this.context.appId.toString() }
        });
    };
    ViewsService.prototype.delete = function (id) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViewDelete), {
            params: { appId: this.context.appId.toString(), Id: id.toString() },
        });
    };
    ViewsService.prototype.import = function (file) {
        var formData = new FormData();
        formData.append('File', file);
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiViewImport), formData, {
            params: { appId: this.context.appId.toString(), zoneId: this.context.zoneId.toString() }
        });
    };
    ViewsService.prototype.export = function (id) {
        var url = this.dnnContext.$2sxc.http.apiUrl(webApiViewRoot + 'json')
            + '?appId=' + this.context.appId
            + '&viewId=' + id;
        window.open(url, '_blank', '');
    };
    ViewsService.prototype.getPolymorphism = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViewPolymorph), {
            params: { appId: this.context.appId.toString() }
        });
    };
    ViewsService.prototype.getUsage = function (guid) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiViewUsage), {
            params: { appId: this.context.appId.toString(), guid: guid }
        });
    };
    ViewsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ViewsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ViewsService);
    return ViewsService;
}());



/***/ }),

/***/ "v8Jz":
/*!*************************************************************!*\
  !*** ./src/app/app-administration/data/data.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scope-box {\n  margin-right: 66px;\n  margin-left: 8px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n}\n.scope-box__dropdown {\n  width: 200px;\n  margin-top: -14px;\n  font-size: 14px;\n  height: auto;\n}\n.scope-box .mat-button .mat-icon {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vZGF0YS9kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFHSTtFQUNFLGlCQUFBO0FBRE4iLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9kYXRhL2RhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcGUtYm94IHtcclxuICBtYXJnaW4tcmlnaHQ6IDY2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmX19kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uIHtcclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "x2Nd":
/*!************************************************************************************************!*\
  !*** ./src/app/app-administration/ag-grid-components/data-actions/data-actions.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL2FnLWdyaWQtY29tcG9uZW50cy9kYXRhLWFjdGlvbnMvZGF0YS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "x6ps":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/ag-grid-components/views-usage-status-filter/views-usage-status-filter.component.html ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title\">Visible</div>\r\n<mat-radio-group [(ngModel)]=\"isVisible\" (ngModelChange)=\"filterChanged()\">\r\n  <mat-radio-button value=\"\">All</mat-radio-button>\r\n  <mat-radio-button value=\"true\">Visible</mat-radio-button>\r\n  <mat-radio-button value=\"false\">Hidden</mat-radio-button>\r\n</mat-radio-group>\r\n\r\n<div class=\"title\">Deleted</div>\r\n<mat-radio-group [(ngModel)]=\"isDeleted\" (ngModelChange)=\"filterChanged()\">\r\n  <mat-radio-button value=\"\">All</mat-radio-button>\r\n  <mat-radio-button value=\"true\">Is deleted</mat-radio-button>\r\n  <mat-radio-button value=\"false\">Is not deleted</mat-radio-button>\r\n</mat-radio-group>\r\n");

/***/ }),

/***/ "xCXf":
/*!**********************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/app-administration/sub-dialogs/import-query/import-query.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appDragAndDrop [allowedFileTypes]=\"'json'\" (filesDropped)=\"filesDropped($event)\"\r\n  *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">Import Query</div>\r\n  </div>\r\n\r\n  <mat-spinner *ngIf=\"data.isImporting\" mode=\"indeterminate\" diameter=\"20\" color=\"accent\"></mat-spinner>\r\n\r\n  <p class=\"dialog-description\">Select a query file (json) from your computer to import.</p>\r\n\r\n  <div>\r\n    <button mat-raised-button matTooltip=\"Open file browser\" [disabled]=\"data.isImporting\" (click)=\"fileInput.click()\">\r\n      <span>{{ data.importFile ? data.importFile.name : 'Select or drop file' }}</span>\r\n    </button>\r\n    <input #fileInput type=\"file\" (change)=\"fileChange($event)\" class=\"hide\" />\r\n  </div>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light import-result-box\" *ngIf=\"data.importResult\">\r\n    <div *ngIf=\"data.importResult.Success\" class=\"sxc-message sxc-message-info\">\r\n      The import has been done. See the messages below for more information.\r\n    </div>\r\n    <div *ngIf=\"!data.importResult.Success\" class=\"sxc-message sxc-message-error\">\r\n      The import failed. See the messages below for more information.\r\n    </div>\r\n    <div *ngFor=\"let message of data.importResult.Messages\" class=\"sxc-message\" [ngClass]=\"{\r\n      'sxc-message-warning': message.MessageType === 0,\r\n      'sxc-message-success': message.MessageType === 1,\r\n      'sxc-message-error': message.MessageType === 2\r\n    }\">\r\n      {{ message.Text }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <ng-container *ngIf=\"!data.importResult?.Success\">\r\n      <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\" [disabled]=\"!data.importFile || data.isImporting || data.importResult\"\r\n        (click)=\"importQuery()\">\r\n        Import\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.importResult?.Success\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">Close</button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "xnZf":
/*!*******************************************************************!*\
  !*** ./src/app/app-administration/queries/queries.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvYXBwLWFkbWluaXN0cmF0aW9uL3F1ZXJpZXMvcXVlcmllcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zhbw":
/*!***************************************************************************************************!*\
  !*** ./src/app/app-administration/sub-dialogs/edit-content-type/edit-content-type.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-input {\n  padding-bottom: 8px;\n}\n\n.mat-hint {\n  font-size: 12px;\n}\n\n.mat-accordion {\n  padding-bottom: 8px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9hcHAtYWRtaW5pc3RyYXRpb24vc3ViLWRpYWxvZ3MvZWRpdC1jb250ZW50LXR5cGUvZWRpdC1jb250ZW50LXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9zdWItZGlhbG9ncy9lZGl0LWNvbnRlbnQtdHlwZS9lZGl0LWNvbnRlbnQtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWlucHV0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ubWF0LWhpbnQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm1hdC1hY2NvcmRpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=app-administration-app-administration-module.js.map