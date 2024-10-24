"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_app-administration_app-administration_routing_ts"],{

/***/ 66545:
/*!*********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/admin-shared/docs-link-helper/docs-link-helper.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocsLinkHelperComponent: () => (/* binding */ DocsLinkHelperComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);






class DocsLinkHelperComponent {
  static {
    this.ɵfac = function DocsLinkHelperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocsLinkHelperComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocsLinkHelperComponent,
      selectors: [["app-docs-link-helper"]],
      inputs: {
        link: "link",
        label: "label",
        icon: "icon"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 3,
      consts: [["mat-button", "", "target", "_blank", "tippy", "online documentation", 1, "eav-button__with-icon", 3, "href"], ["mat-icon", "", 1, "eav-icon"]],
      template: function DocsLinkHelperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0)(1, "mat-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((tmp_1_0 = ctx.icon) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "menu_book");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

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
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_components_nav-item-list_nav-item-list_component_ts-pr-7c4da5"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_app-admin-main_app-admin-main_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-admin-main.component */ 18830));
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
/* harmony import */ var _sub_dialogs_import_content_type_import_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sub-dialogs/import-content-type/import-content-type-dialog.config */ 45795);
/* harmony import */ var _sub_dialogs_import_query_import_query_dialog_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sub-dialogs/import-query/import-query-dialog.config */ 12541);
/* harmony import */ var _sub_dialogs_import_view_import_view_dialog_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sub-dialogs/import-view/import-view-dialog.config */ 61311);
/* harmony import */ var _sub_dialogs_language_permissions_language_permissions_dialog_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub-dialogs/language-permissions/language-permissions-dialog.config */ 81999);
/* harmony import */ var _sub_dialogs_views_usage_views_usage_dialog_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sub-dialogs/views-usage/views-usage-dialog.config */ 63991);
/* harmony import */ var _copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./copilot/go-to-copilot */ 85898);
/* harmony import */ var _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./copilot/copilot-specs */ 97214);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);
/* harmony import */ var _app_menu_export_app_export_app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-menu/export-app/export-app.component */ 16496);
/* harmony import */ var _app_menu_export_app_parts_export_app_parts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-menu/export-app-parts/export-app-parts.component */ 57986);
/* harmony import */ var _app_menu_import_app_parts_import_app_parts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-menu/import-app-parts/import-app-parts.component */ 232);
/* harmony import */ var _app_menu_app_state_app_state_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-menu/app-state/app-state.component */ 89302);




















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
        dialog: _sub_dialogs_import_content_type_import_content_type_dialog_config__WEBPACK_IMPORTED_MODULE_8__.importContentTypeDialog,
        title: 'Import Content Type'
      }
    }, {
      path: 'items/:contentTypeStaticName',
      loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../content-items/content-items.routing */ 30200)).then(m => m.contentItemsRoutes)
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_15__.EditRoutes, {
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
    path: `data-${_copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_13__.GoToCopilot.route}`,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./copilot/page/copilot-page.component */ 79630)).then(mod => mod.CopilotPageComponent),
    data: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_14__.CopilotSpecs.data
  }, {
    path: _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeData,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_data-rest-api_data-rest-api_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./data-rest-api/data-rest-api.component */ 9086)).then(mod => mod.DataRestApiComponent),
    data: {
      title: 'Rest-Api Data',
      breadcrumb: 'Rest-Api Data'
    },
    children: [{
      path: `:${_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramTypeName}`,
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-ecbb79"), __webpack_require__.e("projects_eav-ui_src_app_dev-rest_data_data_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dev-rest/data/data.component */ 32292)).then(mod => mod.DevRestDataComponent),
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
        dialog: _sub_dialogs_import_query_import_query_dialog_config__WEBPACK_IMPORTED_MODULE_9__.importQueryDialog,
        title: 'Import Query'
      }
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_15__.EditRoutesNoHistory, ..._metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getRoutes(), {
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
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_queries-rest-api_queries-rest-api_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./queries-rest-api/queries-rest-api.component */ 73960)).then(mod => mod.QueriesRestApiComponent),
    data: {
      title: 'Rest-Api Queries',
      breadcrumb: 'Rest-Api Queries'
    },
    children: [{
      path: `:${_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramQuery}`,
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-ecbb79"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_query_query_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dev-rest/query/query.component */ 99774)).then(mod => mod.DevRestQueryComponent),
      data: {
        breadcrumb: 'Rest-Api Queries'
      },
      children: [_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route]
    }]
  }, {
    path: 'views',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_views_views_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/views.component */ 16278)).then(mod => mod.ViewsComponent),
    children: [{
      path: 'import',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_import_view_import_view_dialog_config__WEBPACK_IMPORTED_MODULE_10__.importViewDialog,
        title: 'Import View'
      }
    }, {
      path: 'usage/:guid',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_views_usage_views_usage_dialog_config__WEBPACK_IMPORTED_MODULE_12__.viewsUsageDialog
      }
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_15__.EditRoutes, {
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
    path: `views-${_copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_13__.GoToCopilot.route}`,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./copilot/page/copilot-page.component */ 79630)).then(mod => mod.CopilotPageComponent),
    data: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_14__.CopilotSpecs.views
  }, {
    path: 'web-api',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_edit_form_form-config_service_ts-projects_eav-ui_src_app_edit-b26668"), __webpack_require__.e("default-projects_eav-ui_src_app_create-file-dialog_create-file-dialog_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_web-api_web-api_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./web-api/web-api.component */ 61278)).then(mod => mod.WebApiComponent),
    data: {
      title: 'App WebApi',
      breadcrumb: "WebApi"
    },
    children: [_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.route]
  }, {
    path: `web-api-${_copilot_go_to_copilot__WEBPACK_IMPORTED_MODULE_13__.GoToCopilot.route}`,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_copilot_page_copilot-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./copilot/page/copilot-page.component */ 79630)).then(mod => mod.CopilotPageComponent),
    data: _copilot_copilot_specs__WEBPACK_IMPORTED_MODULE_14__.CopilotSpecs.webApi
  }, {
    path: _dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeWebApi,
    loadComponent: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_app-administration_web-api-rest-api_web-api-rest-api_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./web-api-rest-api/web-api-rest-api.component */ 79262)).then(mod => mod.WebApiRestApiComponent),
    data: {
      title: 'Rest-Api Web Api',
      breadcrumb: 'Rest-Api Web Api'
    },
    children: [{
      path: `:${_dev_rest__WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramApiPath}`,
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_dev-rest-urls-and-code_dev-rest-urls-and-code_compon-f0cd0a"), __webpack_require__.e("projects_eav-ui_src_app_dev-rest_api_api_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dev-rest/api/api.component */ 42438)).then(mod => mod.DevRestApiComponent),
      data: {
        breadcrumb: 'Rest-Api Web Api'
      },
      children: [_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_2__.GoToPermissions.route]
    }]
  }, {
    path: 'app',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_fields_content-types-fields_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_app-configuration_app-configuration_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app-configuration/app-configuration.component */ 72898)).then(mod => mod.AppConfigurationComponent),
    data: {
      title: 'Manage App',
      breadcrumb: "Manage App"
    },
    children: [..._metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata.getRoutes(),
    // Edit App Properties / Settings / Resources
    ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_15__.EditRoutes, {
      path: 'fields/:contentTypeStaticName',
      loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../content-type-fields/content-type-fields.routing */ 6708)).then(m => m.contentTypeFieldsRoutes),
      data: {
        title: 'Edit Fields of App Settings & Resources'
      }
    }, {
      path: 'language-permissions',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__.DialogEntryComponent,
      data: {
        dialog: _sub_dialogs_language_permissions_language_permissions_dialog_config__WEBPACK_IMPORTED_MODULE_11__.languagePermissionsDialog,
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
    }
    // New Export etc.
    // {
    //   path: 'export-app',
    //   component: ExportAppComponent,
    //   data: { breadcrumb: 'Export this entire App' },
    // },
    // {
    //   path: 'export-parts',
    //   component: DialogEntryComponent,
    //   data: { breadcrumb: 'Export parts of this App' },
    // },
    // {
    //   path: 'import-parts',
    //   component: DialogEntryComponent,
    //   data: { breadcrumb: 'Import parts of this App' },
    // },
    // {
    //   path: 'app-state',
    //   component: DialogEntryComponent,
    //   data: { breadcrumb: 'App-State Versioning' },
    // },
    ]
  },
  // New Export etc.
  {
    path: 'export-app',
    component: _app_menu_export_app_export_app_component__WEBPACK_IMPORTED_MODULE_16__.ExportAppComponent,
    data: {
      breadcrumb: 'Export this entire App'
    }
  }, {
    path: 'export-parts',
    component: _app_menu_export_app_parts_export_app_parts_component__WEBPACK_IMPORTED_MODULE_17__.ExportAppPartsComponent,
    data: {
      breadcrumb: 'Export parts of this App'
    }
  }, {
    path: 'import-parts',
    component: _app_menu_import_app_parts_import_app_parts_component__WEBPACK_IMPORTED_MODULE_18__.ImportAppPartsComponent,
    data: {
      breadcrumb: 'Import parts of this App'
    }
  }, {
    path: 'app-state',
    component: _app_menu_app_state_app_state_component__WEBPACK_IMPORTED_MODULE_19__.AppStateComponent,
    data: {
      breadcrumb: 'App-State Versioning'
    }
  }]
}];

/***/ }),

/***/ 89302:
/*!**********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-menu/app-state/app-state.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStateComponent: () => (/* binding */ AppStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../features/feature-text-info/feature-text-info.component */ 95469);
/* harmony import */ var _services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog-config-app.service */ 64699);
/* harmony import */ var _services_export_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/export-app.service */ 320);
/* harmony import */ var _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/import-app-parts.service */ 58624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);


















function AppStateComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " In Advanced mode you can also sync all the site files used by this app. They will be placed in a folder inside ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "App_Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " and allow sync/restore with git or another server. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppStateComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-feature-text-info", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("featureNameId", "AppSyncWithSiteFiles");
  }
}
function AppStateComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-dialog-actions", 4)(1, "div", 5)(2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStateComponent_Conditional_15_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.exportAppXml(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "more_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Save state");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStateComponent_Conditional_15_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.resetApp(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Restore state");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function AppStateComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-dialog-actions", 4)(1, "div", 5)(2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStateComponent_Conditional_16_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.exportAppXml(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "more_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Save with Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppStateComponent_Conditional_16_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.resetApp(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Restore with Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
class AppStateComponent {
  #importAppPartsSvc;
  #exportAppSvc;
  #dialogConfigSvc;
  constructor(snackBar) {
    this.snackBar = snackBar;
    this.#importAppPartsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_4__.ImportAppPartsService);
    this.#exportAppSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_export_app_service__WEBPACK_IMPORTED_MODULE_3__.ExportAppService);
    this.appStateAdvanced = false;
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__.DialogConfigAppService);
  }
  ngOnInit() {
    this.#dialogConfigSvc.getCurrent$().subscribe(dialogSettings => {
      this.dialogSettings = dialogSettings;
    });
  }
  ngOnDestroy() {
    this.snackBar.dismiss();
  }
  exportAppXml(withFiles) {
    this.snackBar.open('Exporting...');
    this.#exportAppSvc.exportForVersionControl({
      includeContentGroups: true,
      resetAppGuid: false,
      withFiles
    }).subscribe({
      next: result => {
        this.snackBar.open('Export completed into the \'App_Data\' folder.', null, {
          duration: 3000
        });
      },
      error: error => {
        this.snackBar.open('Export failed. Please check console for more information', null, {
          duration: 3000
        });
      }
    });
  }
  resetApp(withFiles) {
    if (!confirm('Are you sure? All changes since last xml export will be lost')) return;
    this.snackBar.open('Resetting...');
    this.#importAppPartsSvc.resetApp(withFiles).subscribe({
      next: result => {
        this.snackBar.open('Reset worked! Since this is a complex operation, please restart the Website to ensure all caches are correct', null, {
          duration: 30000
        });
      },
      error: error => {
        this.snackBar.open('Reset failed. Please check console for more information', null, {
          duration: 3000
        });
      }
    });
  }
  static {
    this.ɵfac = function AppStateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppStateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AppStateComponent,
      selectors: [["app-app-state"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 17,
      vars: 6,
      consts: [[1, "outer-container-app"], [1, "title-slider"], [1, "eav-card-header-toggle", 3, "ngModelChange", "ngModel"], [3, "featureNameId"], [1, "eav-dialog-actions", 2, "height", "73px"], [1, "eav-dialog-actions-div"], ["mat-button", "", 1, "eav-button__with-icon", 3, "click"], [1, "eav-icon"]],
      template: function AppStateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "App-State Versioning");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-slide-toggle", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AppStateComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.appStateAdvanced, $event) || (ctx.appStateAdvanced = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " You can save / restore the app with data and configuration in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, ".data/app.xml");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, ". This file can then also be versioned using git. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AppStateComponent_Conditional_13_Template, 6, 0, "p")(14, AppStateComponent_Conditional_14_Template, 1, 1, "app-feature-text-info", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AppStateComponent_Conditional_15_Template, 12, 0, "mat-dialog-actions", 4)(16, AppStateComponent_Conditional_16_Template, 12, 0, "mat-dialog-actions", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.appStateAdvanced);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.appStateAdvanced ? "advanced" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.appStateAdvanced ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.appStateAdvanced ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.appStateAdvanced ? 15 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.appStateAdvanced ? 16 : -1);
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _features_feature_text_info_feature_text_info_component__WEBPACK_IMPORTED_MODULE_1__.FeatureTextInfoComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogActions],
      styles: [".title-slider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtbWVudS9hcHAtc3RhdGUvYXBwLXN0YXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXNsaWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 57986:
/*!************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-menu/export-app-parts/export-app-parts.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportAppPartsComponent: () => (/* binding */ ExportAppPartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/field-hint/field-hint.component */ 43758);
/* harmony import */ var _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/dropdown-insert-value.constant */ 5858);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/click-stop-propagation.directive */ 39333);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _services_content_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/content-types.service */ 17693);
/* harmony import */ var _services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/export-app-parts.service */ 71475);

























function ExportAppPartsComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scopeOption_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", scopeOption_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", scopeOption_r1.name, " ");
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 15)(1, "div", 16)(2, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_For_4_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const template_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](template_r5._export, $event) || (template_r5._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const template_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", template_r5._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", template_r5.Name, " (", template_r5.Id, ")");
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](3, ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_For_4_Template, 5, 3, "li", 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](contentType_r3.Templates);
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 15)(1, "div", 16)(2, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_For_4_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const entity_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](entity_r7._export, $event) || (entity_r7._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const entity_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", entity_r7._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", entity_r7.Title, " (", entity_r7.Id, ")");
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Entities");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](3, ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_For_4_Template, 5, 3, "li", 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](contentType_r3.Entities);
  }
}
function ExportAppPartsComponent_Conditional_27_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 15)(1, "div", 16)(2, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_27_For_5_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const contentType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](contentType_r3._export, $event) || (contentType_r3._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ExportAppPartsComponent_Conditional_27_For_5_Conditional_5_Template, 5, 0, "ul", 19)(6, ExportAppPartsComponent_Conditional_27_For_5_Conditional_6_Template, 5, 0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const contentType_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", contentType_r3._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", contentType_r3.Name, " (", contentType_r3.Id, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](contentType_r3.Templates.length > 0 ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](contentType_r3.Entities.length > 0 ? 6 : -1);
  }
}
function ExportAppPartsComponent_Conditional_27_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 15)(1, "div", 16)(2, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppPartsComponent_Conditional_27_For_10_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](template_r9._export, $event) || (template_r9._export = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const template_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", template_r9._export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", template_r9.Name, " (", template_r9.Id, ")");
  }
}
function ExportAppPartsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "ul", 13)(2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Content Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](4, ExportAppPartsComponent_Conditional_27_For_5_Template, 7, 5, "li", 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ul", 13)(7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Templates Without Content Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](9, ExportAppPartsComponent_Conditional_27_For_10_Template, 5, 3, "li", 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r9.contentInfo()().ContentTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r9.contentInfo()().TemplatesWithoutContentTypes);
  }
}
class ExportAppPartsComponent {
  #exportAppPartsSvc;
  #contentTypesSvc;
  constructor() {
    this.hostClass = 'dialog-component';
    this.#exportAppPartsSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_export_app_parts_service__WEBPACK_IMPORTED_MODULE_7__.ExportAppPartsService);
    this.#contentTypesSvc = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_content_types_service__WEBPACK_IMPORTED_MODULE_6__.ContentTypesService);
    this.lockScope = true;
    this.dropdownInsertValue = _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__.dropdownInsertValue;
    this.isExporting = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(false);
    this.exportScope = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.scopes.default.value);
    this.contentInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => {
      const exportScope = this.exportScope();
      return this.#exportAppPartsSvc.getContentInfo(exportScope, null);
    });
    this.scopeOptions = this.#contentTypesSvc.getScopesSig(null);
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.computed)(() => {
      const contentInfo = this.contentInfo();
      const scopeOptions = this.scopeOptions();
      return !contentInfo || !scopeOptions;
    });
  }
  exportAppParts() {
    this.isExporting.set(true);
    // spm TODO: maybe optimize these functions to not loop content types and entities multiple times for no reason
    // spm TODO: figure out how to capture window loading to disable export button
    const contentTypeIds = this.#selectedContentTypes().map(contentType => contentType.Id);
    const templateIds = this.#selectedTemplates().map(template => template.Id);
    let entityIds = this.#selectedEntities().map(entity => entity.Id);
    entityIds = entityIds.concat(templateIds);
    this.#exportAppPartsSvc.exportParts(contentTypeIds, entityIds, templateIds);
    this.isExporting.set(false);
  }
  changeScope(newScope) {
    if (newScope === _shared_constants_dropdown_insert_value_constant__WEBPACK_IMPORTED_MODULE_2__.dropdownInsertValue) {
      newScope = prompt('This is an advanced feature to show content-types of another scope. Don\'t use this if you don\'t know what you\'re doing, as content-types of other scopes are usually hidden for a good reason.') || _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.scopes.default.value;
      if (!this.scopeOptions().find(option => option.value === newScope)) {
        const newScopeOption = {
          name: newScope,
          value: newScope
        };
        const scopeOptionsTemp = this.scopeOptions();
        scopeOptionsTemp.unshift(newScopeOption);
        this.scopeOptions.set(scopeOptionsTemp);
      }
    }
    this.exportScope.set(newScope);
  }
  unlockScope() {
    this.lockScope = !this.lockScope;
    if (this.lockScope) {
      this.exportScope.set(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.scopes.default.value);
    }
  }
  #selectedContentTypes() {
    return this.contentInfo()().ContentTypes.filter(contentType => contentType._export);
  }
  #selectedEntities() {
    let entities = [];
    for (const contentType of this.contentInfo()().ContentTypes) {
      entities = entities.concat(contentType.Entities.filter(entity => entity._export));
    }
    return entities;
  }
  #selectedTemplates() {
    let templates = [];
    // The ones with...
    for (const contentType of this.contentInfo()().ContentTypes) templates = templates.concat(contentType.Templates.filter(template => template._export));
    // ...and without content types
    templates = templates.concat(this.contentInfo()().TemplatesWithoutContentTypes.filter(template => template._export));
    return templates;
  }
  static {
    this.ɵfac = function ExportAppPartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExportAppPartsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ExportAppPartsComponent,
      selectors: [["app-export-app-parts"]],
      hostVars: 1,
      hostBindings: function ExportAppPartsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 34,
      vars: 7,
      consts: [[1, "outer-container-app"], [1, "form-height"], ["href", "https://2sxc.org/en/help?tag=export", "target", "_blank"], [1, "eav-edit-input"], ["color", "accent", 1, "eav-mat-form-field"], ["name", "Scope", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["mat-icon-button", "", "matTextSuffix", "", 1, "enable", 3, "tippy"], ["appClickStopPropagation", "", 3, "click"], ["appClickStopPropagation", "", "href", "https://2sxc.org/help?tag=scope", "target", "_blank"], [1, "eav-dialog-actions", 2, "height", "73px"], ["mat-button", "", "tippy", "Export selected Parts", 1, "eav-button__with-icon", 3, "click", "disabled"], [1, "eav-icon"], [1, "eav-content-info__list", "eav-content-info__base"], [1, "eav-content-info__title"], [1, "eav-content-info__item"], [1, "eav-option-box"], [3, "ngModelChange", "ngModel"], [1, "eav-option-box__text"], [1, "eav-content-info__list"], [1, "eav-content-info__subtitle"]],
      template: function ExportAppPartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Export Content and Templates from this App");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "To export Content-Types, Queries, Views or Data, use the respective tabs.");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " This is an advanced feature to export parts of the app. The export will create an xml file which can be imported into another site or app. To export the entire content of the app (for example when duplicating the entire site), go to the app export. For further help visit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "2sxc Help");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 3)(12, "mat-form-field", 4)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Scope");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ExportAppPartsComponent_Template_mat_select_ngModelChange_15_listener($event) {
            return ctx.changeScope($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](16, ExportAppPartsComponent_For_17_Template, 2, 2, "mat-option", 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Other...");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 7)(21, "mat-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExportAppPartsComponent_Template_mat_icon_click_21_listener() {
            return ctx.unlockScope();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "app-field-hint");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, " The scope should almost never be changed - ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "see help");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, ExportAppPartsComponent_Conditional_27_Template, 11, 0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-dialog-actions", 10)(29, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ExportAppPartsComponent_Template_button_click_29_listener() {
            return ctx.exportAppParts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "cloud_download");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Export Parts");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.exportScope())("disabled", ctx.lockScope);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.scopeOptions());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.dropdownInsertValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tippy", ctx.lockScope ? "Unlock" : "Lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.lockScope ? "lock" : "lock_open", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.contentInfo()() ? 27 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.loading() || ctx.isExporting());
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogActions, _shared_components_field_hint_field_hint_component__WEBPACK_IMPORTED_MODULE_1__.FieldHintComponent, _shared_directives_click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_4__.ClickStopPropagationDirective, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__.TippyDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule],
      styles: [".eav-edit-input[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.eav-content-info__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.eav-content-info__subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.eav-content-info__list[_ngcontent-%COMP%] {\n  font-size: 14px;\n  list-style-type: none;\n}\n.eav-content-info__base[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.eav-content-info__item[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  padding: 2px;\n}\n\n.eav-option-box[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.eav-option-box__text[_ngcontent-%COMP%] {\n  white-space: normal;\n  font-size: 14px;\n}\n\n.form-height[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 24px - 56px - 200px);\n  overflow: auto;\n}\n\n.enable[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtbWVudS9leHBvcnQtYXBwLXBhcnRzL2V4cG9ydC1hcHAtcGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUtFO0VBQ0UsVUFBQTtBQUhKO0FBTUU7RUFDRSwwQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7QUFMRjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBTEo7O0FBU0E7RUFDRSw2Q0FBQTtFQUNBLGNBQUE7QUFORjs7QUFVQTtFQUNFLG1CQUFBO0FBUEYiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWVkaXQtaW5wdXQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5lYXYtY29udGVudC1pbmZvIHtcclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICZfX3N1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9fbGlzdCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19iYXNlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVhdi1vcHRpb24tYm94IHtcclxuICBtYXJnaW46IDhweCAwO1xyXG5cclxuICAmX190ZXh0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1oZWlnaHQge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNHB4IC0gNTZweCAtIDIwMHB4KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi5lbmFibGV7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 16496:
/*!************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-menu/export-app/export-app.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportAppComponent: () => (/* binding */ ExportAppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin-shared/docs-link-helper/docs-link-helper.component */ 66545);
/* harmony import */ var _features_feature_icon_feature_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../features/feature-icon/feature-icon.component */ 92487);
/* harmony import */ var _features_feature_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../features/feature-names */ 28136);
/* harmony import */ var _features_features_scoped_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../features/features-scoped.service */ 74824);
/* harmony import */ var _services_export_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/export-app.service */ 320);

















class ExportAppComponent {
  constructor() {
    this.#exportAppService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_export_app_service__WEBPACK_IMPORTED_MODULE_5__.ExportAppService);
    this.appInfo = this.#exportAppService.getAppInfo(undefined);
    this.features = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_features_features_scoped_service__WEBPACK_IMPORTED_MODULE_4__.FeaturesScopedService);
    this.expAssetsAdvEnabled = this.features.isEnabled[_features_feature_names__WEBPACK_IMPORTED_MODULE_3__.FeatureNames.AppExportAssetsAdvanced];
    // Use Signals
    this.includeContentGroups = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(false);
    this.resetAppGuid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(false);
    this.assetsAdam = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(true);
    this.assetsAdamDeleted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(false);
    this.assetsSite = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.model)(true);
    this.downloadUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.computed)(() => this.#exportAppService.exportAppUrl() + `&includeContentGroups=${this.includeContentGroups()}&resetAppGuid=${this.resetAppGuid()}` + `&assetsAdam=${this.assetsAdam()}&assetsSite=${this.assetsSite()}`);
  }
  #exportAppService;
  static {
    this.ɵfac = function ExportAppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExportAppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ExportAppComponent,
      selectors: [["app-export-app"]],
      inputs: {
        includeContentGroups: [1, "includeContentGroups"],
        resetAppGuid: [1, "resetAppGuid"],
        assetsAdam: [1, "assetsAdam"],
        assetsAdamDeleted: [1, "assetsAdamDeleted"],
        assetsSite: [1, "assetsSite"]
      },
      outputs: {
        includeContentGroups: "includeContentGroupsChange",
        resetAppGuid: "resetAppGuidChange",
        assetsAdam: "assetsAdamChange",
        assetsAdamDeleted: "assetsAdamDeletedChange",
        assetsSite: "assetsSiteChange"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 80,
      vars: 27,
      consts: [[1, "outer-container-app"], [1, "form-height"], ["href", "https://2sxc.org/en/help?tag=export-app", "target", "_blank"], [1, "eav-app-info__title"], [1, "eav-app-info__content"], [1, "checkboxes"], [3, "ngModelChange", "ngModel", "disabled"], [3, "featureNameId"], [1, "eav-dialog-actions", 2, "height", "73px"], [3, "link", "label", "icon"], ["mat-button", "", "download", "", 1, "eav-button__with-icon", 3, "href"], [1, "eav-icon"]],
      template: function ExportAppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Pack the entire app to a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " folder which can be imported again to another site. For further help visit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "2sxc Help");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Specs");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ul", 4)(15, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Contains");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ul", 4)(24, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Advanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "ul", 5)(37, "li")(38, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.includeContentGroups, $event) || (ctx.includeContentGroups = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " Include all content-groups to re-import the app in an exact copy of this site. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Only select this option when you copy an entire DNN site. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "li")(44, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.resetAppGuid, $event) || (ctx.resetAppGuid = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " Reset the app GUID to zero. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " You only need this option for special tutorial apps, and usually must not select it. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "app-feature-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.assetsAdam, $event) || (ctx.assetsAdam = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, " Include all ADAM assets. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, " This will include all App files in the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "/adam");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " folder in your portal. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "app-feature-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.assetsAdamDeleted, $event) || (ctx.assetsAdamDeleted = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " Skip ADAM assets of deleted entities. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " This will skip all ADAM files which are probably not in use any more, since the owning entities were deleted. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "app-feature-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ExportAppComponent_Template_mat_checkbox_ngModelChange_68_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.assetsSite, $event) || (ctx.assetsSite = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, " Include all Site assets like images which are not in ADAM. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, " This will include all files used by your entities (eg. in link fields) which are not in you App-ADAM folder. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "mat-dialog-actions", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "app-docs-link-helper", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "a", 10)(76, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "deployed_code_update");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Download");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Export app ", ctx.appInfo() == null ? "(loading details...)" : "", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Name: ", (tmp_1_0 = ctx.appInfo()) == null ? null : tmp_1_0.Name, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Guid: ", (tmp_2_0 = ctx.appInfo()) == null ? null : tmp_2_0.Guid, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Version: ", (tmp_3_0 = ctx.appInfo()) == null ? null : tmp_3_0.Version, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_4_0 = ctx.appInfo()) == null ? null : tmp_4_0.EntitiesCount, " entities");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_5_0 = ctx.appInfo()) == null ? null : tmp_5_0.LanguagesCount, " languages");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", (tmp_6_0 = ctx.appInfo()) == null ? null : tmp_6_0.TemplatesCount, " templates (Token: ", (tmp_6_0 = ctx.appInfo()) == null ? null : tmp_6_0.HasTokenTemplates, ", Razor: ", (tmp_6_0 = ctx.appInfo()) == null ? null : tmp_6_0.HasRazorTemplates, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_7_0 = ctx.appInfo()) == null ? null : tmp_7_0.TransferableFilesCount, " files to export");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (tmp_8_0 = ctx.appInfo()) == null ? null : tmp_8_0.FilesCount, " files in the app folder totally");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.includeContentGroups);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.resetAppGuid());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.resetAppGuid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.includeContentGroups());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("featureNameId", "AppExportAssetsAdvanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.assetsAdam);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.expAssetsAdvEnabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("featureNameId", "AppExportAssetsAdvanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.assetsAdamDeleted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.expAssetsAdvEnabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("featureNameId", "AppExportAssetsAdvanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.assetsSite);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.expAssetsAdvEnabled());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("link", "https://go.2sxc.org/app-export")("label", "Export App Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx.downloadUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _features_feature_icon_feature_icon_component__WEBPACK_IMPORTED_MODULE_2__.FeatureIconComponent, _admin_shared_docs_link_helper_docs_link_helper_component__WEBPACK_IMPORTED_MODULE_1__.DocsLinkHelperComponent],
      styles: [".eav-app-info__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 24px 0 0;\n  font-weight: bold;\n}\n.eav-app-info__content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.eav-app-info__content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px 0;\n}\n\n.eav-options-wrapper[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n\n.eav-option-box[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n.eav-option-box__text[_ngcontent-%COMP%] {\n  white-space: normal;\n  font-size: 14px;\n}\n\n.form-height[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 24px - 48px - 200px);\n  overflow: auto;\n}\n\n.mdc-form-field[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding-top: 12px;\n}\n\nul.checkboxes[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtbWVudS9leHBvcnQtYXBwL2V4cG9ydC1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0FBREo7QUFHSTtFQUNFLGNBQUE7QUFETjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjtBQUtFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBSEo7O0FBT0E7RUFDRSw2Q0FBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSkYiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LWFwcC1pbmZvIHtcclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDI0cHggMCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmVhdi1vcHRpb25zLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMjRweCAwO1xyXG59XHJcblxyXG4uZWF2LW9wdGlvbi1ib3gge1xyXG4gIG1hcmdpbjogMnB4IDA7XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWhlaWdodCB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI0cHggLSA0OHB4IC0gMjAwcHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubWRjLWZvcm0tZmllbGQgPiBsYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbnVsLmNoZWNrYm94ZXMge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 232:
/*!************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/app-administration/app-menu/import-app-parts/import-app-parts.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAppPartsComponent: () => (/* binding */ ImportAppPartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core */ 88692);
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/base.component */ 43176);
/* harmony import */ var _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/file-upload-dialog */ 34616);
/* harmony import */ var _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/drag-and-drop.directive */ 34575);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipes/safe-html.pipe */ 69914);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/context */ 68873);
/* harmony import */ var _shared_services_getting_started_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/getting-started.service */ 12987);
/* harmony import */ var _shared_services_installer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/installer.service */ 14147);
/* harmony import */ var _services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/import-app-parts.service */ 58624);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 80436);


























const _c0 = ["installerWindow"];
const _c1 = (a0, a1, a2) => ({
  "sxc-message-warning": a0,
  "sxc-message-success": a1,
  "sxc-message-error": a2
});
function ImportAppPartsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-spinner", 3);
  }
}
function ImportAppPartsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Select or drop file");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ImportAppPartsComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](file_r3.name);
  }
}
function ImportAppPartsComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Upload succeeded. See the messages below for more information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ImportAppPartsComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Upload failed. See the messages below for more information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ImportAppPartsComponent_Conditional_19_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](2, _c1, message_r4.MessageType === ctx_r4.FileUploadMessageTypes.Warning, message_r4.MessageType === ctx_r4.FileUploadMessageTypes.Success, message_r4.MessageType === ctx_r4.FileUploadMessageTypes.Error));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", message_r4.Text, " ");
  }
}
function ImportAppPartsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ImportAppPartsComponent_Conditional_19_Conditional_1_Template, 2, 0, "div", 8)(2, ImportAppPartsComponent_Conditional_19_Conditional_2_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](3, ImportAppPartsComponent_Conditional_19_For_4_Template, 2, 6, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx_r4.result().Success ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!ctx_r4.result().Success ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r4.result().Messages);
  }
}
function ImportAppPartsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-dialog-actions", 7)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportAppPartsComponent_Conditional_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.upload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r4.files().length || ctx_r4.uploading() || !!ctx_r4.result());
  }
}
class ImportAppPartsComponent extends _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(snackBar, sanitizer, context, changeDetectorRef) {
    super();
    this.snackBar = snackBar;
    this.sanitizer = sanitizer;
    this.context = context;
    this.changeDetectorRef = changeDetectorRef;
    // Code are copied from file-upload-dialog
    this.importAppPartsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_services_import_app_parts_service__WEBPACK_IMPORTED_MODULE_8__.ImportAppPartsService);
    this.hostClass = 'dialog-component';
    this.uploadType = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__.UploadTypes.AppPart;
    this.uploading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(false);
    // showAppCatalogTemp = signal(false);
    this.result = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)(undefined);
    this.files = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)([]);
    this.FileUploadMessageTypes = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__.FileUploadMessageTypes;
    this.UploadTypes = _shared_components_file_upload_dialog__WEBPACK_IMPORTED_MODULE_2__.UploadTypes;
    this.showAppCatalog$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(false);
    this.showProgress = false;
    this.remoteInstallerUrl = '';
    this.ready = false;
    this.importData = {
      title: 'Import Content and Templates into this App',
      description: `
    Import content and templates from a content export (zip) or partial export (xml) to this app.
    The entire content of the selected file will be imported.
    If you want to import an entire app, go to the <em>Apps Management</em>.
    For further help visit <a href="https://2sxc.org/en/help?tag=import" target="_blank">2sxc Help</a>.
    `,
      allowedFileTypes: 'xml',
      upload$: files => this.importAppPartsService.importAppParts(files[0])
    };
    this.installerService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_installer_service__WEBPACK_IMPORTED_MODULE_7__.InstallerService);
    this.installSettingsService = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_services_getting_started_service__WEBPACK_IMPORTED_MODULE_6__.AppInstallSettingsService);
    this.alreadyProcessing = false;
    // copied from 2sxc-ui app/installer
    // Initial Observable to monitor messages
    this.messages$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(window, 'message').pipe(
    // Ensure only one installation is processed.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(() => !this.alreadyProcessing), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(evt => evt.origin === "https://2sxc.org"),
    // Get data from event.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(evt => {
      try {
        return JSON.parse(evt.data);
      } catch (e) {
        console.error('error procesing message. Message was ' + evt.data, e);
        return void 0;
      }
    }),
    // Check if data is valid and the moduleID matches
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(data => data && Number(data.moduleId) === this.context.moduleId));
    // TODO:: @2dg Check with Daniel
    // TODO:: Old Code
    //  this.subscriptions.add(
    //   this.files$.subscribe(() => {
    //     console.log('files changed');
    //     if (this.result() !== undefined)
    //       this.result.set(undefined);
    //   }),
    // );
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.effect)(() => {
      this.files();
      if (this.result() != undefined) {
        this.result.set(undefined);
      }
    });
    // copied from 2sxc-ui app/installer
    this.subscriptions.add(this.installSettingsService.settings$.subscribe(settings => {
      this.settings = settings;
      this.remoteInstallerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(settings.remoteUrl);
      this.ready = true;
    }));
  }
  ngOnInit() {
    if (this.importData.files != null) {
      this.filesDropped(this.importData.files);
    }
    // copied from 2sxc-ui
    this.installSettingsService.loadGettingStarted(false); //this.isContentApp -> from @Input on 2sxc-ui
    // copied from 2sxc-ui app/installer
    this.subscriptions.add(this.messages$.pipe(
    // Verify it's for this action
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(data => data.action === 'specs'),
    // Send message to iframe
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(() => {
      const winFrame = this.installerWindow.nativeElement;
      const specsMsg = {
        action: 'specs',
        data: {
          //currently not used
          installedApps: this.settings.installedApps,
          //.map(app => ((app as InstalledApp).guid)),
          //currently used to forbid already installed apps
          rules: this.settings.installedApps.map(app => ({
            target: 'guid',
            appGuid: app.guid,
            mode: 'f',
            url: ''
          })) //this.settings.rules,
        }
      };
      const specsJson = JSON.stringify(specsMsg);
      winFrame.contentWindow.postMessage(specsJson, '*');
      console.log('debug: just sent specs message:' + specsJson, specsMsg, winFrame);
    })).subscribe());
    // copied from 2sxc-ui app/installer
    // Subscription to listen to 'install' messages
    this.subscriptions.add(this.messages$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(data => data.action === 'install'),
    // Get packages from data.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(data => Object.values(data.packages)),
    // Show confirm dialog.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(packages => {
      const packagesDisplayNames = packages.reduce((t, c) => `${t} - ${c.displayName}\n`, '');
      const msg = `Do you want to install these packages?

${packagesDisplayNames}
This takes about 10 seconds per package. Don't reload the page while it's installing.`;
      return confirm(msg);
    }),
    // Install the packages one at a time
    (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)(packages => {
      this.alreadyProcessing = true;
      this.showProgress = true;
      this.changeDetectorRef.detectChanges(); //without this spinner is not shown
      return this.installerService.installPackages(packages, p => this.currentPackage = p);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(() => {
      this.showProgress = false;
      this.changeDetectorRef.detectChanges(); //without this spinner is not removed (though window reload will remove it anyway) so maybe unnecessary
      alert('Installation complete 👍');
      window.top.location.reload();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.catchError)(error => {
      console.error('Error: ', error);
      this.showProgress = false;
      this.alreadyProcessing = false;
      this.changeDetectorRef.detectChanges(); //without this spinner is not removed
      const errorMsg = `An error occurred: Package ${this.currentPackage.displayName}

${error.error?.Message ?? error.error?.message ?? ''}

${error.message}

Please try again later or check how to manually install content-templates: https://azing.org/2sxc/r/0O4OymoA`;
      alert(errorMsg);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(error);
    })).subscribe());
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  filesDropped(files) {
    this.setFiles(files);
    this.upload();
  }
  filesChanged(event) {
    const fileList = event.target.files;
    const files = Array.from(fileList);
    this.setFiles(files);
  }
  upload() {
    this.uploading.set(true);
    this.subscriptions.add(this.importData.upload$(this.files()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.take)(1)).subscribe({
      next: result => {
        this.uploading.set(false);
        this.result.set(result);
      },
      error: () => {
        this.uploading.set(false);
        this.result.set(undefined);
        this.snackBar.open('Upload failed. Please check console for more information', undefined, {
          duration: 3000
        });
      }
    }));
  }
  setFiles(files) {
    if (!this.importData.multiple) {
      files = files.slice(0, 1);
    }
    this.files.set(files);
  }
  static {
    this.ɵfac = function ImportAppPartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportAppPartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_5__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ImportAppPartsComponent,
      selectors: [["app-import-app-parts"]],
      viewQuery: function ImportAppPartsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.installerWindow = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function ImportAppPartsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
      decls: 21,
      vars: 12,
      consts: [["fileInput", ""], ["appDragAndDrop", "", 1, "outer-container-app", 3, "filesDropped", "allowedFileTypes"], [3, "innerHtml"], ["mode", "indeterminate", "diameter", "20", "color", "accent"], ["mat-raised-button", "", "tippy", "Open file browser", 1, "select-btn", 3, "click", "disabled"], ["type", "file", "multiple", "", 1, "hide", 3, "change"], [1, "eav-result-container"], [1, "eav-dialog-actions", 2, "height", "73px"], [1, "sxc-message", "sxc-message-info"], [1, "sxc-message", "sxc-message-error"], [1, "sxc-message", 3, "ngClass"], ["mat-button", "", "tippy", "Import File", 1, "eav-button__with-icon", 3, "click", "disabled"], [1, "eav-icon"]],
      template: function ImportAppPartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("filesDropped", function ImportAppPartsComponent_Template_div_filesDropped_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.filesDropped($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "safeHtml");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ImportAppPartsComponent_Conditional_5_Template, 1, 0, "mat-spinner", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "To import Content-Types, Queries, Views or Data, use the respective tabs.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Create an xml containing parts of the app, e.g. content and templates. Import parts from such an xml into this app. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "safeHtml");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div")(13, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ImportAppPartsComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](fileInput_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ImportAppPartsComponent_Conditional_14_Template, 2, 0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](15, ImportAppPartsComponent_For_16_Template, 2, 1, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ImportAppPartsComponent_Template_input_change_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.filesChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ImportAppPartsComponent_Conditional_19_Template, 5, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ImportAppPartsComponent_Conditional_20_Template, 6, 1, "mat-dialog-actions", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_9_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("allowedFileTypes", ctx.importData.allowedFileTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 8, ctx.importData.title), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.uploading() ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 10, ctx.importData.description), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.uploading());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!ctx.files().length ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx.files());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](ctx.result() ? 19 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵconditional"](!((tmp_9_0 = ctx.result()) == null ? null : tmp_9_0.Success) ? 20 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogActions, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _shared_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_3__.DragAndDropDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon],
      styles: [".eav-result-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  max-height: calc(100vh - 74px - 23px - 57px - 200px);\n  overflow-y: auto;\n}\n\n.eav-app-catalog-button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.eav-app-catalog-iframe[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n  height: 500px;\n  border: none;\n}\n\n.eav-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.eav-progress[_ngcontent-%COMP%]   mat-progress-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.eav-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n\n.select-btn[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2FwcC1hZG1pbmlzdHJhdGlvbi9hcHAtbWVudS9pbXBvcnQtYXBwLXBhcnRzL2ltcG9ydC1hcHAtcGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSjs7QUFJQTtFQUNFLG1CQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyIuZWF2LXJlc3VsdC1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDc0cHggLSAyM3B4IC0gNTdweCAtIDIwMHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uZWF2LWFwcC1jYXRhbG9nLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5lYXYtYXBwLWNhdGFsb2ctaWZyYW1lIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZWF2LXByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0LWJ0biB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

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
  static {
    this.route = 'copilot';
  }
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
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_sub-dialogs_edit-content-type_edit-content-type_co-2abec4")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-content-type.component */ 61855));
      return EditContentTypeComponent;
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

/***/ }),

/***/ 41463:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/go-to-metadata.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToMetadata: () => (/* binding */ GoToMetadata)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);

class GoToMetadata {
  static getRoutes() {
    const defaultRoute = {
      path: 'metadata/:targetType/:keyType/:key',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_metadata_metadata_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./metadata.routing */ 56536)).then(m => m.metadataRoutes),
      data: {
        title: 'Metadata'
      }
    };
    const routes = [defaultRoute, {
      ...defaultRoute,
      path: `${defaultRoute.path}/title/:title`
    }, {
      ...defaultRoute,
      path: `${defaultRoute.path}/contentType/:contentTypeStaticName`
    }, {
      ...defaultRoute,
      path: `${defaultRoute.path}/title/:title/contentType/:contentTypeStaticName`
    }];
    return routes;
  }
  static getUrl(targetType, keyType, key, dialogTitle, contentTypeStaticName) {
    let url = `metadata/${targetType}/${keyType}/${key}`;
    if (dialogTitle) {
      url += `/title/${encodeURIComponent(dialogTitle)}`;
    }
    if (contentTypeStaticName) {
      url += `/contentType/${contentTypeStaticName}`;
    }
    return url;
  }
  static getUrlApp(appId, dialogTitle) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.keyType, appId.toString(), dialogTitle);
  }
  static getUrlAttribute(attributeId, dialogTitle, contentTypeStaticName) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.keyType, attributeId.toString(), dialogTitle, contentTypeStaticName);
  }
  static getUrlContentType(staticName, dialogTitle) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.contentType.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.contentType.keyType, staticName, dialogTitle);
  }
  static getUrlEntity(guid, dialogTitle, contentTypeStaticName) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.keyType, guid, dialogTitle, contentTypeStaticName);
  }
}

/***/ }),

/***/ 65217:
/*!***************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToMetadata: () => (/* reexport safe */ _go_to_metadata__WEBPACK_IMPORTED_MODULE_1__.GoToMetadata)
/* harmony export */ });
/* harmony import */ var _models_metadata_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/metadata.model */ 11884);
/* harmony import */ var _go_to_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./go-to-metadata */ 41463);



/***/ }),

/***/ 11884:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/metadata/models/metadata.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_app-administration_app-administration_routing_ts.js.map