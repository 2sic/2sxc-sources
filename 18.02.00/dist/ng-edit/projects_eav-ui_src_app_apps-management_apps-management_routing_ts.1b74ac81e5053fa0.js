"use strict";(self.webpackChunkeav_ui=self.webpackChunkeav_ui||[]).push([["projects_eav-ui_src_app_apps-management_apps-management_routing_ts"],{6490:(f,o,t)=>{t.r(o),t.d(o,{appsManagementRoutes:()=>i});var s=t(5544),a=t(9204);const n={name:"ADD_FROM_FOLDER_DIALOG",initContext:!1,panelSize:"small",panelClass:null,getComponent:()=>(0,a.A)(function*(){const{AddAppFromFolderComponent:e}=yield Promise.all([t.e("default-node_modules_angular_forms_fesm2022_forms_mjs"),t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"),t.e("default-node_modules_angular_material_fesm2022_radio_mjs"),t.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"),t.e("default-projects_eav-ui_src_app_shared_services_clipboard_service_ts-node_modules_angular_mat-15cf82"),t.e("common"),t.e("projects_eav-ui_src_app_apps-management_add-app-from-folder_add-app-from-folder_component_ts--ecd9e6")]).then(t.bind(t,8242));return e})()},d={name:"APPS_MANAGEMENT_DIALOG",initContext:!0,panelSize:"large",panelClass:null,getComponent:()=>(0,a.A)(function*(){const{AppsManagementNavComponent:e}=yield Promise.all([t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"),t.e("default-projects_eav-ui_src_app_shared_components_nav-item-list_nav-item-list_component_ts-pr-7c4da5"),t.e("projects_eav-ui_src_app_apps-management_apps-management-nav_apps-management-nav_component_ts")]).then(t.bind(t,7756));return e})()},l={name:"CREATE_APP_DIALOG",initContext:!1,panelSize:"small",panelClass:null,getComponent:()=>(0,a.A)(function*(){const{CreateAppComponent:e}=yield Promise.all([t.e("default-node_modules_angular_forms_fesm2022_forms_mjs"),t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2022_input_mjs"),t.e("default-node_modules_angular_material_fesm2022_select_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_apps-management_create-app_create-app_component_ts-projects_eav-ui_sr-6ada4b")]).then(t.bind(t,7001));return e})()},m={name:"CREATE_INHERITED_APP_DIALOG",initContext:!1,panelSize:"small",panelClass:null,getComponent:()=>(0,a.A)(function*(){const{CreateInheritedAppComponent:e}=yield Promise.all([t.e("default-node_modules_angular_forms_fesm2022_forms_mjs"),t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-node_modules_angular_material_fesm2022_select_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_apps-management_create-inherited-app_create-inherited-app_component_t-b7baef")]).then(t.bind(t,7574));return e})()};var p=t(1195);const i=[{path:"",component:s.DialogEntryComponent,data:{dialog:d},children:[{path:"",redirectTo:"system",pathMatch:"full"},{path:"system",loadComponent:()=>Promise.all([t.e("default-node_modules_angular_forms_fesm2022_forms_mjs"),t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"),t.e("default-node_modules_angular_material_fesm2022_input_mjs"),t.e("default-projects_eav-ui_src_app_shared_services_clipboard_service_ts-node_modules_angular_mat-15cf82"),t.e("common"),t.e("projects_eav-ui_src_app_apps-management_system-info_system-info_component_ts-projects_eav-ui_-4a0baf")]).then(t.bind(t,8271)).then(e=>e.SystemInfoComponent),data:{title:"System Info",breadcrumb:"System Info"}},{path:"registration",loadComponent:()=>Promise.all([t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"),t.e("default-projects_eav-ui_src_app_shared_services_clipboard_service_ts-node_modules_angular_mat-15cf82"),t.e("common"),t.e("projects_eav-ui_src_app_apps-management_sub-dialogs_registration_registration_component_ts-pr-6deb34")]).then(t.bind(t,7240)).then(e=>e.RegistrationComponent),data:{title:"Registration",breadcrumb:"Register"}},{path:"list",loadComponent:()=>Promise.all([t.e("default-node_modules_angular_forms_fesm2022_forms_mjs"),t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"),t.e("default-node_modules_angular_material_fesm2022_radio_mjs"),t.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"),t.e("default-projects_eav-ui_src_app_shared_services_clipboard_service_ts-node_modules_angular_mat-15cf82"),t.e("default-node_modules_angular_material_fesm2022_menu_mjs"),t.e("default-projects_eav-ui_src_app_features_shared_base-feature_component_ts-projects_eav-ui_src-0dc4d8"),t.e("common"),t.e("projects_eav-ui_src_app_apps-management_apps-list_apps-list_component_ts")]).then(t.bind(t,1609)).then(e=>e.AppsListComponent),children:[{path:"import",loadChildren:()=>t.e("common").then(t.bind(t,7903)).then(e=>e.importRoutes)},{path:"create",component:s.DialogEntryComponent,data:{dialog:l}},{path:"create-inherited",component:s.DialogEntryComponent,data:{dialog:m}},{path:"add-app-from-folder",component:s.DialogEntryComponent,data:{dialog:n}},{path:":appId",loadChildren:()=>Promise.all([t.e("default-node_modules_angular_forms_fesm2022_forms_mjs"),t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"),t.e("default-node_modules_angular_material_fesm2022_radio_mjs"),t.e("default-node_modules_angular_material_fesm2022_select_mjs"),t.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"),t.e("default-projects_eav-ui_src_app_shared_services_clipboard_service_ts-node_modules_angular_mat-15cf82"),t.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"),t.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts"),t.e("default-projects_eav-ui_src_app_features_feature-icon_feature-icon_component_ts-projects_eav--06ee1b"),t.e("default-projects_eav-ui_src_app_dev-rest_index_ts"),t.e("default-projects_eav-ui_src_app_app-administration_app-administration_routing_ts")]).then(t.bind(t,432)).then(e=>e.appAdministrationRoutes)},...p.fu],data:{title:"Apps in this Zone",breadcrumb:"Apps"}},{path:"languages",loadComponent:()=>Promise.all([t.e("default-node_modules_angular_forms_fesm2022_forms_mjs"),t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"),t.e("default-node_modules_angular_material_fesm2022_radio_mjs"),t.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"),t.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_apps-management_site-languages_site-languages_component_ts-projects_e-de56ad")]).then(t.bind(t,5786)).then(e=>e.SiteLanguagesComponent),data:{title:"Zone Languages",breadcrumb:"Languages"}},{path:"license",loadComponent:()=>Promise.all([t.e("default-node_modules_angular_forms_fesm2022_forms_mjs"),t.e("default-projects_eav-ui_src_app_shared_components_file-upload-dialog_index_ts"),t.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"),t.e("default-node_modules_angular_material_fesm2022_radio_mjs"),t.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"),t.e("default-projects_eav-ui_src_app_shared_services_clipboard_service_ts-node_modules_angular_mat-15cf82"),t.e("default-node_modules_angular_material_fesm2022_slide-toggle_mjs"),t.e("default-node_modules_angular_material_fesm2022_expansion_mjs"),t.e("common"),t.e("projects_eav-ui_src_app_apps-management_licence-info_license-info_component_ts")]).then(t.bind(t,8045)).then(e=>e.LicenseInfoComponent),data:{title:"Extensions / Features",breadcrumb:"Extensions and Features"}}]}]}}]);
//# sourceMappingURL=https://sources.2sxc.org/18.02.00/dist/ng-edit/projects_eav-ui_src_app_apps-management_apps-management_routing_ts.1b74ac81e5053fa0.js.map