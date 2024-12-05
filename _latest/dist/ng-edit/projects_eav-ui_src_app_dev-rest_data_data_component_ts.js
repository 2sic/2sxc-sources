"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_dev-rest_data_data_component_ts"],{

/***/ 32292:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/data/data.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestDataComponent: () => (/* binding */ DevRestDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../permissions */ 4096);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _shared_services_entity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/entity.service */ 9234);
/* harmony import */ var _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dev-rest-base.component */ 91091);
/* harmony import */ var _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dev-rest-urls-and-code/dev-rest-urls-and-code.component */ 55630);
/* harmony import */ var _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../go-to-dev-rest */ 10261);
/* harmony import */ var _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../selector-with-help/selector-with-help.component */ 1708);
/* harmony import */ var _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tab-examples/tab-examples.component */ 22422);
/* harmony import */ var _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tab-headers/tab-headers.component */ 53966);
/* harmony import */ var _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tab-introduction/tab-introduction.component */ 16768);
/* harmony import */ var _tab_permissions_tab_permissions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tab-permissions/tab-permissions.component */ 61426);
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./introduction/introduction.component */ 51393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 81955);































function DevRestDataComponent_Conditional_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "emoji_objects");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Introduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function DevRestDataComponent_Conditional_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("tippy", (vm_r3.scenario.useVirtual ? "Virtual " : "Absolute ") + "REST URLs");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Call ", vm_r3.scenario.useVirtual ? "Virtual" : "Absolute", " REST URLs");
  }
}
function DevRestDataComponent_Conditional_0_div_48_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](0, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\n          ");
  }
}
function DevRestDataComponent_Conditional_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, DevRestDataComponent_Conditional_0_div_48_Conditional_8_Template, 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Permissions (", vm_r3.permissions.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](!vm_r3.permissions.length ? 8 : -1);
  }
}
function DevRestDataComponent_Conditional_0_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "perm_device_information");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "HTTP headers & \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "/auto/");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function DevRestDataComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](0, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "Using REST with Data of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "app-selector-with-help", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function DevRestDataComponent_Conditional_0_Template_app_selector_with_help_valueChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.changeScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "mat-tab-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](27, DevRestDataComponent_Conditional_0_div_27_Template, 8, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](29, "app-dev-data-introduction", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](30, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](31, "app-dev-rest-tab-introduction", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](37, DevRestDataComponent_Conditional_0_div_37_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](39, "app-dev-rest-tab-examples-intro", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](42, "app-dev-rest-urls-and-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](46, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](48, DevRestDataComponent_Conditional_0_div_48_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](50, "app-dev-rest-tab-permissions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](51, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](53, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](55, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](56, DevRestDataComponent_Conditional_0_div_56_Template, 10, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](57, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](58, "app-dev-rest-tab-headers", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](59, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](60, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](61, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](62, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63, "\n");
  }
  if (rf & 2) {
    const vm_r3 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](vm_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("items", ctx_r1.scenarios)("valueInput", vm_r3.scenario.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r3);
  }
}
const pathToContent = 'app/{appname}/data/{typename}';
class DevRestDataComponent extends _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_7__.DevRestBase {
  // TODO: @2dg Offen ViewModel
  constructor(dialog, router, route, /** Context for this dialog. Used for appId, zoneId, tabId, etc. */
  context, /** sxc-angular context. Used to resolve urls */
  dnnContext) {
    const permissionsService = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_permissions__WEBPACK_IMPORTED_MODULE_3__.PermissionsService);
    super(context, dialog, dnnContext, router, route, permissionsService);
    this.hostClass = 'dialog-component';
    this.entityService = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_6__.EntityService);
    this.contentTypesService = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_app_administration_services__WEBPACK_IMPORTED_MODULE_2__.ContentTypesService);
    const contentType$ = route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(pm => pm.get(_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_9__.GoToDevRest.paramTypeName)), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.switchMap)(ctName => this.contentTypesService.retrieveContentType(ctName)), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.share)());
    this.permissions$ = this.buildPermissionStream(_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_9__.GoToDevRest.paramTypeName);
    // Build Root Stream (for the root folder)
    const root$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([contentType$, this.scenario$, this.dialogSettings$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([contentType, scenario, dialogSettings]) => {
      const resolved = pathToContent.replace('{typename}', contentType.Name).replace('{appname}', scenario.inSameContext ? 'auto' : encodeURI(dialogSettings.Context.App.Folder));
      return this.rootBasedOnScenario(resolved, scenario);
    }));
    // Get an item of this type for building urls
    const noDataFound = {
      Id: 0,
      Guid: '00000000-0000-0000-0000-000000000000',
      Title: 'no data found'
    };
    const itemOfThisType$ = this.entityService.getEntities$(contentType$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.filter)(ct => !!ct), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(ct => {
      return {
        contentTypeName: ct.NameId
      };
    }))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(list => list.length ? list[0]
    // we need a dummy in case nothing is found, otherwise the observables stop
    : noDataFound));
    // Prepare everything for use in the template
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([contentType$, this.scenario$, this.permissions$, root$, itemOfThisType$, this.dialogSettings$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([contentType, scenario, permissions, root, item, diag]) => {
      var result = {
        ...this.buildBaseViewModel(contentType.Name, contentType.NameId, diag, permissions, root, scenario),
        contentType,
        itemId: item.Id,
        apiCalls: (0,___WEBPACK_IMPORTED_MODULE_0__.generateApiCalls)(dnnContext.$2sxc, scenario, context, root, item.Id)
      };
      return result;
    }));
  }
  static {
    this.ɵfac = function DevRestDataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_5__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_24__.Context));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: DevRestDataComponent,
      selectors: [["app-dev-rest-data"]],
      hostVars: 1,
      hostBindings: function DevRestDataComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "eav-dialog", "eav-no-scrollbar"], ["mat-mdc-dialog-title", ""], [1, "dialog-title-box"], [1, "eav-dialog-content"], ["label", "Choose Scenario", 3, "valueChange", "items", "valueInput"], ["dynamicHeight", "", "color", "accent", 1, "mat-tab-group-fit-height", "mat-tab-group-fancy-scrollbar", "default-fonts"], ["class", "mat-tab-label-box", "tippy", "Introduction", 4, "matTabLabel"], [3, "data"], ["class", "mat-tab-label-box", 3, "tippy", 4, "matTabLabel"], ["class", "mat-tab-label-box", "tippy", "Permissions", 4, "matTabLabel"], ["class", "mat-tab-label-box", "tippy", "HTTP headers and auto", 4, "matTabLabel"], ["tippy", "Introduction", 1, "mat-tab-label-box"], [1, "mat-tab-label-box", 3, "tippy"], ["svgIcon", "code-curly"], ["tippy", "Permissions", 1, "mat-tab-label-box"], ["tippy", "HTTP headers and auto", 1, "mat-tab-label-box"]],
      template: function DevRestDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, DevRestDataComponent_Conditional_0_Template, 64, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_4__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterOutlet, _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_10__.SelectorWithHelpComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabGroup, _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__.DevRestDataIntroductionComponent, _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_13__.DevRestTabIntroductionComponent, _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_11__.DevRestTabExamplesComponent, _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_8__.DevRestUrlsAndCodeComponent, _tab_permissions_tab_permissions_component__WEBPACK_IMPORTED_MODULE_14__.DevRestTabPermissionsComponent, _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_12__.DevRestHttpHeadersComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe],
      styles: ["[_nghost-%COMP%]     code, \ncode[_ngcontent-%COMP%], \npre[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n\n.rest-urls-accordion[_ngcontent-%COMP%] {\n  display: block;\n  margin: 8px;\n}\n\n.rest-urls-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.code-example[_ngcontent-%COMP%] {\n  position: relative;\n}\n.code-example__text[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n.code-example__copy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.params-form[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 600px;\n}\n.params-form[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.form-with-textarea[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2Rldi1yZXN0L2Rldi1yZXN0LWFsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7RUFHRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZSBmaXJzdCBvbmUgaXMgbmVlZGVkIHNvIDxjb2RlPiBjb2xvcmluZyB3b3JrcyBpbiBkeW5hbWljIGluamVjdGVkIGh0bWwgKHRpcHMgZXRjLilcclxuOmhvc3QgOjpuZy1kZWVwIGNvZGUsXHJcbmNvZGUsXHJcbnByZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG59XHJcblxyXG4ucmVzdC11cmxzLWFjY29yZGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5yZXN0LXVybHMtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvZGUtZXhhbXBsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmX190ZXh0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAmX19jb3B5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtcy1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0td2l0aC10ZXh0YXJlYSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 51393:
/*!**************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/data/introduction/introduction.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestDataIntroductionComponent: () => (/* binding */ DevRestDataIntroductionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ 13488);



class DevRestDataIntroductionComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    /** List of scenarios */
    this.scenarios = ___WEBPACK_IMPORTED_MODULE_0__.AllScenarios;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function DevRestDataIntroductionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestDataIntroductionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DevRestDataIntroductionComponent,
      selectors: [["app-dev-data-introduction"]],
      inputs: {
        data: [1, "data"]
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 0,
      consts: [["href", "https://docs.2sxc.org/index.html", "target", "_blank"], ["href", "https://docs.2sxc.org/basics/data/index.html", "target", "_blank"], ["href", "https://docs.2sxc.org/web-api/content-rest-web-api.html", "target", "_blank"]],
      template: function DevRestDataIntroductionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " To learn more about data you may want to read these ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "docs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ":\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Data & Content-Types in 2sxc");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Content REST API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 61426:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/tab-permissions/tab-permissions.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestTabPermissionsComponent: () => (/* binding */ DevRestTabPermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ 16256);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ 72437);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);
















function DevRestTabPermissionsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matBadge", ctx_r0.data().permissions.length);
  }
}
function DevRestTabPermissionsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DevRestTabPermissionsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 2)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Warning: you don't have any permissions configured. So only Super-Users (Host) will be able to use the API endpoints. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class DevRestTabPermissionsComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.input)();
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_0__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_6__.DialogRoutingService);
    this.gridOptions = this.buildGridOptions();
  }
  #dialogRouter;
  openPermissions() {
    this.#dialogRouter.navRelative([_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_1__.GoToPermissions.getUrlContentType(this.data().permissionTarget)]);
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_3__.defaultGridOptions,
      columnDefs: [{
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_2__.ColumnDefinitions.Id
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_2__.ColumnDefinitions.TextWide,
        headerName: 'Name',
        field: 'Title'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_2__.ColumnDefinitions.TextWide,
        field: 'Identity'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_2__.ColumnDefinitions.TextWide,
        field: 'Condition'
      }, {
        field: 'Grant',
        width: 70,
        headerClass: 'dense',
        cellClass: 'no-outline'
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function DevRestTabPermissionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestTabPermissionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: DevRestTabPermissionsComponent,
      selectors: [["app-dev-rest-tab-permissions"]],
      inputs: {
        data: [1, "data"]
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 37,
      vars: 10,
      consts: [["mat-icon-button", "", "tippy", "Open permissions", 3, "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "matBadgePosition", "below after", "aria-hidden", "false", 3, "matBadge"], [1, "warning", "info-box"], [1, "ag-theme-material", 3, "rowData", "gridOptions"]],
      template: function DevRestTabPermissionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " This target ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DevRestTabPermissionsComponent_Template_button_click_7_listener() {
            return ctx.openPermissions();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DevRestTabPermissionsComponent_Conditional_8_Template, 2, 1, "mat-icon", 1)(9, DevRestTabPermissionsComponent_Conditional_9_Template, 2, 0, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DevRestTabPermissionsComponent_Conditional_10_Template, 4, 0, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ag-grid-angular", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Super-Users (Host) can use all Endpoints");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " As a super-user you can always access these REST endpoints, so this will make development easy. Just remember to change the content-type permissions when you publish your work to public pages.\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Set permissions for visitors to use this");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " To let JavaScript access the REST endpoints for normal users, you must set the permissions of the content-type. Usually you will just want to set it like ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "if user has view-permissions, let him read this content-type");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, ". In rare cases (eg. JS based forms) you may also want to give it some write permissions. Just be careful. If you give write permissions, you will usually ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "only");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " want to give create, but not edit.\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Setting permissions for use outside of DNN");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " When calling API endpoints from a DNN page you will usually use the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "$2sxc");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " or the DNN Services-Framework. These automatically add some HTTP-Headers (see tab about HTTP Headers) which let DNN determine that the API-Call was made on a specific page/module - and DNN uses this to check the permissions.\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " IF you are calling the endpoint from outside of DNN then these headers will be missing. Because of this, permissions saying \"If has VIEW permissions, allow read\" will fail - because DNN cannot determine if the user has view permissions.\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " So to enable use from external, the condition must be \"If has ANONYMOUS permissions, allow ...\". Because the ANONYMOUS check passes even if DNN doesn't know what page the module is on.\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Permissions (", ctx.data().permissions.length, ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data().name);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" has ", ctx.data().permissions.length, " permissions configured. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.data().permissions.length ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx.data().permissions.length ? 9 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx.data().permissions.length ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("height", 33 + ctx.data().permissions.length * 48 + "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowData", ctx.data().permissions)("gridOptions", ctx.gridOptions);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_4__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadge, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_5__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_dev-rest_data_data_component_ts.js.map