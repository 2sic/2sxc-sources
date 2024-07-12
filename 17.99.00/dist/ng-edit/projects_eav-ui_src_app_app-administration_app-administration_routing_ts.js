"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_app-administration_app-administration_routing_ts"],{

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
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_components_nav-item-list_nav-item-list_component_ts-no-dac92e"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-admin-main.component */ 18830));
      return AppAdminMainComponent;
    })();
  }
};

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
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata */ 65217);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _app_admin_main_app_admin_main_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-admin-main/app-admin-main.dialog-config */ 13428);
/* harmony import */ var _sub_dialogs_analyze_settings_analyze_settings_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-dialogs/analyze-settings/analyze-settings-dialog.config */ 92525);
/* harmony import */ var _sub_dialogs_analyze_settings_settings_item_details_settings_item_details_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub-dialogs/analyze-settings/settings-item-details/settings-item-details.config */ 29555);
/* harmony import */ var _sub_dialogs_edit_content_type_edit_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sub-dialogs/edit-content-type/edit-content-type-dialog.config */ 92567);
/* harmony import */ var _sub_dialogs_export_app_parts_export_app_parts_dialog_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sub-dialogs/export-app-parts/export-app-parts-dialog.config */ 49239);
/* harmony import */ var _sub_dialogs_export_app_export_app_dialog_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sub-dialogs/export-app/export-app-dialog.config */ 78425);
/* harmony import */ var _sub_dialogs_import_app_parts_import_app_parts_dialog_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sub-dialogs/import-app-parts/import-app-parts-dialog.config */ 80665);
/* harmony import */ var _sub_dialogs_import_content_type_import_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub-dialogs/import-content-type/import-content-type-dialog.config */ 45795);
/* harmony import */ var _sub_dialogs_import_query_import_query_dialog_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sub-dialogs/import-query/import-query-dialog.config */ 12541);
/* harmony import */ var _sub_dialogs_import_view_import_view_dialog_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub-dialogs/import-view/import-view-dialog.config */ 61311);
/* harmony import */ var _sub_dialogs_language_permissions_language_permissions_dialog_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sub-dialogs/language-permissions/language-permissions-dialog.config */ 81999);
/* harmony import */ var _sub_dialogs_views_usage_views_usage_dialog_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sub-dialogs/views-usage/views-usage-dialog.config */ 63991);
/* harmony import */ var _copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./copilot/go-to-copilot */ 85898);
/* harmony import */ var _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./copilot/copilot-specs */ 97214);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);



















const appAdministrationRoutes = [{
  path: '',
  // experimental 2dm
  // ...DialogEntryComponent.routeFor(appAdministrationDialog),
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
  data: {
    dialog: _app_admin_main_app_admin_main_dialog_config__WEBPACK_IMPORTED_MODULE_4__.appAdministrationDialog
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
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_data_data_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./data/data.component */ 9756)).then(mod => mod.DataComponent),
    children: [{
      path: 'import',
      // experimental 2dm
      // ...DialogEntryComponent.routeFor(importContentTypeDialog, { title: 'Import Content Type' }),
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_import_content_type_import_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_11__.importContentTypeDialog,
        title: 'Import Content Type'
      }
    }, {
      path: 'items/:contentTypeStaticName',
      loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../content-items/content-items.routing */ 30200)).then(m => m.contentItemsRoutes)
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_18__.EditRoutesSubItems, {
      path: 'add',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_edit_content_type_edit_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_7__.editContentTypeDialog,
        title: 'Add Content Type'
      }
    }, {
      path: ':contentTypeStaticName/edit',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_edit_content_type_edit_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_7__.editContentTypeDialog,
        title: 'Edit Content Type'
      }
    }, ..._metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getRoutes(), _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.route, {
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
    }, _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route],
    data: {
      title: 'App Data',
      breadcrumb: "Data"
    }
  }, {
    path: `data-${_copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_16__.GoToCopilot.route}`,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./copilot/page/copilot-page.component */ 79630)).then(mod => mod.CopilotPageComponent),
    data: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_17__.CopilotSpecs.data
  }, {
    path: _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeData,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_data-rest-api_data-rest-api_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./data-rest-api/data-rest-api.component */ 9086)).then(mod => mod.DataRestApiComponent),
    data: {
      title: 'Rest-Api Data',
      breadcrumb: 'Rest-Api Data'
    },
    children: [{
      path: `:${_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramTypeName}`,
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_dev-rest_data_data_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dev-rest/data/data.component */ 32292)).then(mod => mod.DevRestDataComponent),
      data: {
        breadcrumb: 'Rest-Api Data'
      },
      children: [_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route]
    }]
  }, {
    path: 'queries',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_queries_queries_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./queries/queries.component */ 83242)).then(mod => mod.QueriesComponent),
    children: [{
      path: 'import',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_import_query_import_query_dialog_config__WEBPACK_IMPORTED_MODULE_12__.importQueryDialog,
        title: 'Import Query'
      }
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_18__.EditRoutesSubItemsNoHistory, ..._metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getRoutes(), {
      ..._permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route,
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
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_queries-rest-api_queries-rest-api_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./queries-rest-api/queries-rest-api.component */ 73960)).then(mod => mod.QueriesRestApiComponent),
    data: {
      title: 'Rest-Api Queries',
      breadcrumb: 'Rest-Api Queries'
    },
    children: [{
      path: `:${_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramQuery}`,
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_dev-rest_query_query_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dev-rest/query/query.component */ 99774)).then(mod => mod.DevRestQueryComponent),
      data: {
        breadcrumb: 'Rest-Api Queries'
      },
      children: [_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route]
    }]
  }, {
    path: 'views',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_views_views_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/views.component */ 16278)).then(mod => mod.ViewsComponent),
    children: [{
      path: 'import',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_import_view_import_view_dialog_config__WEBPACK_IMPORTED_MODULE_13__.importViewDialog,
        title: 'Import View'
      }
    }, {
      path: 'usage/:guid',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_views_usage_views_usage_dialog_config__WEBPACK_IMPORTED_MODULE_15__.viewsUsageDialog
      }
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_18__.EditRoutesSubItems, {
      ..._permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route,
      data: {
        title: 'View Permissions'
      }
    }, ..._metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getRoutes()],
    data: {
      title: 'App Views',
      breadcrumb: "Views"
    }
  }, {
    path: `views-${_copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_16__.GoToCopilot.route}`,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./copilot/page/copilot-page.component */ 79630)).then(mod => mod.CopilotPageComponent),
    data: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_17__.CopilotSpecs.views
  }, {
    path: 'web-api',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_create-file-dialog_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_web-api_web-api_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./web-api/web-api.component */ 61278)).then(mod => mod.WebApiComponent),
    data: {
      title: 'App WebApi',
      breadcrumb: "WebApi"
    },
    children: [_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.route]
  }, {
    path: `web-api-${_copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_16__.GoToCopilot.route}`,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./copilot/page/copilot-page.component */ 79630)).then(mod => mod.CopilotPageComponent),
    data: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_17__.CopilotSpecs.webApi
  }, {
    path: _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeWebApi,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_web-api-rest-api_web-api-rest-api_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./web-api-rest-api/web-api-rest-api.component */ 79262)).then(mod => mod.WebApiRestApiComponent),
    data: {
      title: 'Rest-Api Web Api',
      breadcrumb: 'Rest-Api Web Api'
    },
    children: [{
      path: `:${_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramApiPath}`,
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("projects_eav-ui_src_app_dev-rest_api_api_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dev-rest/api/api.component */ 42438)).then(mod => mod.DevRestApiComponent),
      data: {
        breadcrumb: 'Rest-Api Web Api'
      },
      children: [_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route]
    }]
  }, {
    path: 'app',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_app-configuration_app-configuration_component_ts-p-970788")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-configuration/app-configuration.component */ 72898)).then(mod => mod.AppConfigurationComponent),
    data: {
      title: 'Manage App',
      breadcrumb: "Manage App"
    },
    children: [..._metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getRoutes(),
    // Edit App Properties / Settings / Resources
    ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_18__.EditRoutesSubItems, {
      path: 'fields/:contentTypeStaticName',
      loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../content-type-fields/content-type-fields.routing */ 6708)).then(m => m.contentTypeFieldsRoutes),
      data: {
        title: 'Edit Fields of App Settings & Resources'
      }
    }, {
      path: 'language-permissions',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_language_permissions_language_permissions_dialog_config__WEBPACK_IMPORTED_MODULE_14__.languagePermissionsDialog,
        title: 'Language Permissions'
      },
      children: [{
        ..._permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route,
        data: {
          title: 'Language Permissions'
        }
      }]
    }, {
      ..._permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route,
      data: {
        title: 'App Permissions'
      }
    }, {
      path: 'analyze/:part',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_analyze_settings_analyze_settings_dialog_config__WEBPACK_IMPORTED_MODULE_5__.analyzeSettingsDialog,
        title: 'Analyze Settings / Resources'
      },
      children: [{
        path: 'details/:view/:settingsItemKey',
        component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
        data: {
          dialog: _sub_dialogs_analyze_settings_settings_item_details_settings_item_details_config__WEBPACK_IMPORTED_MODULE_6__.settingsItemDetailsDialog,
          title: 'Settings / Resources Item Details'
        }
      }]
    }]
  }, {
    path: 'sync',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_sync-configuration_sync-configuration_component_ts-0e6134")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sync-configuration/sync-configuration.component */ 46364)).then(mod => mod.SyncConfigurationComponent),
    data: {
      title: 'Sync',
      breadcrumb: "Sync"
    },
    children: [..._metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getRoutes(), {
      path: 'export',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_export_app_export_app_dialog_config__WEBPACK_IMPORTED_MODULE_9__.exportAppDialog,
        title: 'Export App'
      }
    }, {
      path: 'export/parts',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_export_app_parts_export_app_parts_dialog_config__WEBPACK_IMPORTED_MODULE_8__.exportAppPartsDialog,
        title: 'Export App Parts'
      }
    }, {
      path: 'import/parts',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_import_app_parts_import_app_parts_dialog_config__WEBPACK_IMPORTED_MODULE_10__.importAppPartsDialog,
        title: 'Import App Parts'
      }
    }]
  }]
}];

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
  static #_ = this.route = 'copilot';
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
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_sub-dialogs_edit-content-type_edit-content-type_co-2abec4")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-content-type.component */ 61855));
      return EditContentTypeComponent;
    })();
  }
};

/***/ }),

/***/ 49239:
/*!*******************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/export-app-parts/export-app-parts-dialog.config.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportAppPartsDialog: () => (/* binding */ exportAppPartsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const exportAppPartsDialog = {
  name: 'EXPORT_APP_PARTS',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ExportAppPartsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_checkbox_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_sub-dialogs_export-app-parts_export-app-parts_comp-b04a2d")]).then(__webpack_require__.bind(__webpack_require__, /*! ./export-app-parts.component */ 33695));
      return ExportAppPartsComponent;
    })();
  }
};

/***/ }),

/***/ 78425:
/*!*******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/export-app/export-app-dialog.config.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportAppDialog: () => (/* binding */ exportAppDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const exportAppDialog = {
  name: 'EXPORT_APP',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ExportAppComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_checkbox_mjs"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_sub-dialogs_export-app_export-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./export-app.component */ 92025));
      return ExportAppComponent;
    })();
  }
};

/***/ }),

/***/ 80665:
/*!*******************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/sub-dialogs/import-app-parts/import-app-parts-dialog.config.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importAppPartsDialog: () => (/* binding */ importAppPartsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const importAppPartsDialog = {
  name: 'IMPORT_APP_PARTS',
  initContext: false,
  panelSize: 'medium',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        ImportAppPartsComponent
      } = yield __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_sub-dialogs_import-app-parts_import-app-parts_comp-cf6fb0").then(__webpack_require__.bind(__webpack_require__, /*! ./import-app-parts.component */ 61465));
      return ImportAppPartsComponent;
    })();
  }
};

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

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_app-administration_app-administration_routing_ts.js.map