"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_apps-management_apps-management_routing_ts"],{

/***/ 59202:
/*!**********************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/add-app-from-folder/add-app-from-folder-dialog.config.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAppFromFolderDialog: () => (/* binding */ addAppFromFolderDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const addAppFromFolderDialog = {
  name: 'ADD_FROM_FOLDER_DIALOG',
  initContext: false,
  panelSize: 'small',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        AddAppFromFolderComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_add-app-from-folder_add-app-from-folder_component_ts--ecd9e6")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-app-from-folder.component */ 82294));
      return AddAppFromFolderComponent;
    })();
  }
};

/***/ }),

/***/ 34250:
/*!******************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/apps-management-nav/apps-management-dialog.config.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appsManagementDialog: () => (/* binding */ appsManagementDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const appsManagementDialog = {
  name: 'APPS_MANAGEMENT_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        AppsManagementNavComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-488733"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_nav-item-list_nav-item-list_component_ts-no-dac92e"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_apps-management-nav_apps-management-nav_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./apps-management-nav.component */ 9038));
      return AppsManagementNavComponent;
    })();
  }
};

/***/ }),

/***/ 49772:
/*!****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/apps-management.routing.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appsManagementRoutes: () => (/* binding */ appsManagementRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _add_app_from_folder_add_app_from_folder_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-app-from-folder/add-app-from-folder-dialog.config */ 59202);
/* harmony import */ var _apps_management_nav_apps_management_dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps-management-nav/apps-management-dialog.config */ 34250);
/* harmony import */ var _create_app_create_app_dialog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-app/create-app-dialog.config */ 95460);
/* harmony import */ var _create_inherited_app_create_inherited_app_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-inherited-app/create-inherited-app-dialog.config */ 65826);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);






const appsManagementRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _apps_management_nav_apps_management_dialog_config__WEBPACK_IMPORTED_MODULE_2__.appsManagementDialog
  },
  children: [{
    path: '',
    redirectTo: 'system',
    pathMatch: 'full'
  }, {
    path: 'system',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-488733"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_system-info_system-info_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./system-info/system-info.component */ 7030)).then(m => m.SystemInfoComponent),
    data: {
      title: 'System Info',
      breadcrumb: 'System Info'
    }
    // @2dg is no longer needed as Register is a separate SideNav and no longer a dialog
    //  children: [
    //     GoToRegistration.getRoute()
    // ]
  }, {
    path: 'registration',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_sub-dialogs_registration_registration_component_ts-pr-b612f1")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sub-dialogs/registration/registration.component */ 13611)).then(m => m.RegistrationComponent),
    data: {
      title: 'Registration',
      breadcrumb: 'Register'
    }
  }, {
    path: 'list',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_badge_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_features_feature-names_ts-projects_eav-ui_src_app_features_sh-a1b9be"), __webpack_require__.e("default-node_modules_ecodev_fab-speed-dial_fesm2022_ecodev-fab-speed-dial_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts-projects_eav-ui_src_-0e63a3")]).then(__webpack_require__.bind(__webpack_require__, /*! ./apps-list/apps-list.component */ 29638)).then(m => m.AppsListComponent),
    children: [{
      path: 'import',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_import-app_import-app_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../import-app/import-app.routing */ 59532)).then(m => m.importRoutes)
    }, {
      path: 'create',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
      data: {
        dialog: _create_app_create_app_dialog_config__WEBPACK_IMPORTED_MODULE_3__.createAppDialog
      }
    }, {
      path: 'create-inherited',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
      data: {
        dialog: _create_inherited_app_create_inherited_app_dialog_config__WEBPACK_IMPORTED_MODULE_4__.createInheritedAppDialog
      }
    }, {
      path: 'add-app-from-folder',
      component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
      data: {
        dialog: _add_app_from_folder_add_app_from_folder_dialog_config__WEBPACK_IMPORTED_MODULE_1__.addAppFromFolderDialog
      }
    }, {
      path: ':appId',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_app-administration_services_index_ts-projects_eav-ui_src_app_-488733"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"), __webpack_require__.e("default-projects_eav-ui_src_app_dev-rest_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_app-administration_app-administration_routing_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app-administration/app-administration.routing */ 60366)).then(m => m.appAdministrationRoutes)
    }, ..._edit_edit_routing__WEBPACK_IMPORTED_MODULE_5__.EditRoutesRoot],
    data: {
      title: 'Apps in this Zone',
      breadcrumb: 'Apps'
    }
  }, {
    path: 'languages',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_site-languages_site-languages_component_ts-projects_e-de56ad")]).then(__webpack_require__.bind(__webpack_require__, /*! ./site-languages/site-languages.component */ 31374)).then(m => m.SiteLanguagesComponent),
    data: {
      title: 'Zone Languages',
      breadcrumb: 'Languages'
    }
  }, {
    path: 'license',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_constants_default-grid-options_constants_ts-projects_e-814394"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_licence-info_license-info_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./licence-info/license-info.component */ 15096)).then(m => m.LicenseInfoComponent),
    data: {
      title: 'Extensions / Features',
      breadcrumb: 'Extensions and Features'
    }
  }]
}];

/***/ }),

/***/ 95460:
/*!****************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/create-app/create-app-dialog.config.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAppDialog: () => (/* binding */ createAppDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const createAppDialog = {
  name: 'CREATE_APP_DIALOG',
  initContext: false,
  panelSize: 'small',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        CreateAppComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_create-app_create-app_component_ts-projects_eav-ui_sr-6ada4b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-app.component */ 20552));
      return CreateAppComponent;
    })();
  }
};

/***/ }),

/***/ 65826:
/*!************************************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/apps-management/create-inherited-app/create-inherited-app-dialog.config.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInheritedAppDialog: () => (/* binding */ createInheritedAppDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const createInheritedAppDialog = {
  name: 'CREATE_INHERITED_APP_DIALOG',
  initContext: false,
  panelSize: 'small',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        CreateInheritedAppComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-projects_eav-ui_src_app_shared_pipes_safe-html_pipe_ts-node_modules_angular_material_-bba45a"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_select_mjs"), __webpack_require__.e("common"), __webpack_require__.e("projects_eav-ui_src_app_apps-management_create-inherited-app_create-inherited-app_component_t-b7baef")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-inherited-app.component */ 47574));
      return CreateInheritedAppComponent;
    })();
  }
};

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_apps-management_apps-management_routing_ts.js.map