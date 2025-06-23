"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_dev-rest_api_api_component_ts"],{

/***/ 38049:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/api/action-params/action-params.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestApiActionParamsComponent: () => (/* binding */ DevRestApiActionParamsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _true_false_true_false_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../true-false/true-false.component */ 72871);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);









function DevRestApiActionParamsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 0)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " This endpoint doesn't seem to use any parameters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DevRestApiActionParamsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ag-grid-angular", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("height", 33 + ctx_r0.data().parameters.length * 48 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx_r0.data().parameters)("gridOptions", ctx_r0.gridOptions);
  }
}
class DevRestApiActionParamsComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.input)();
    this.gridOptions = this.buildGridOptions();
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_1__.defaultGridOptions,
      columnDefs: [{
        field: 'Required',
        headerClass: 'dense',
        width: 80,
        cellClass: 'no-padding no-outline'.split(' '),
        valueGetter: p => p.data.isOptional,
        cellRenderer: _true_false_true_false_component__WEBPACK_IMPORTED_MODULE_3__.TrueFalseComponent,
        cellRendererParams: (() => {
          const params = {
            reverse: false
          };
          return params;
        })()
      }, {
        field: 'Name',
        flex: 2,
        minWidth: 200,
        cellClass: 'no-outline',
        valueGetter: p => p.data.name
      }, {
        field: 'Type',
        flex: 2,
        headerClass: 'dense',
        cellClass: 'no-outline',
        valueGetter: p => p.data.type
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_0__.ColumnDefinitions.TextWide,
        headerName: 'Default Value',
        field: 'DefaultValue'
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function DevRestApiActionParamsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestApiActionParamsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: DevRestApiActionParamsComponent,
      selectors: [["app-dev-rest-api-action-params"]],
      inputs: {
        data: [1, "data"]
      },
      decls: 6,
      vars: 3,
      consts: [[1, "warning", "info-box"], [1, "ag-theme-material", 3, "rowData", "gridOptions", "height"], [1, "ag-theme-material", 3, "rowData", "gridOptions"]],
      template: function DevRestApiActionParamsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3")(1, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Parameters");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DevRestApiActionParamsComponent_Conditional_4_Template, 4, 0, "p", 0)(5, DevRestApiActionParamsComponent_Conditional_5_Template, 1, 4, "ag-grid-angular", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data().name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.data().parameters.length ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.data().parameters.length ? 5 : -1);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_2__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_6__.AgGridAngular],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 42438:
/*!***************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/api/api.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestApiComponent: () => (/* binding */ DevRestApiComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 86301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../code-editor/services/source.service */ 79996);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_logging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/logging */ 34435);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dev-rest-urls-and-code/dev-rest-urls-and-code.component */ 55630);
/* harmony import */ var _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../go-to-dev-rest */ 10261);
/* harmony import */ var _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../selector-with-help/selector-with-help.component */ 1708);
/* harmony import */ var _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tab-examples/tab-examples.component */ 22422);
/* harmony import */ var _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab-headers/tab-headers.component */ 53966);
/* harmony import */ var _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tab-introduction/tab-introduction.component */ 16768);
/* harmony import */ var _action_params_action_params_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./action-params/action-params.component */ 38049);
/* harmony import */ var _api_samples__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api-samples */ 65089);
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./introduction/introduction.component */ 64495);
/* harmony import */ var _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./permissions/permissions.component */ 42881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 81955);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 12587);









































function DevRestApiComponent_Conditional_0_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const action_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", action_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", action_r3.name, " (", action_r3.verbs.join(", "), ") ");
  }
}
function DevRestApiComponent_Conditional_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 21)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "emoji_objects");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "Introduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function DevRestApiComponent_Conditional_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("tippy", (vm_r4.scenario.useVirtual ? "Virtual " : "Absolute ") + "REST URLs");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Call ", vm_r4.scenario.useVirtual ? "Virtual" : "Absolute", " REST URLs");
  }
}
function DevRestApiComponent_Conditional_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 24)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "Permissions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function DevRestApiComponent_Conditional_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 25)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "perm_device_information");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "HTTP headers & \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "/auto/");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
}
function DevRestApiComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "Using REST with API ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 4)(10, "app-selector-with-help", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function DevRestApiComponent_Conditional_0_Template_app_selector_with_help_valueChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.changeScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "mat-form-field", 6)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "Select an Action on the Controller");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectionChange", function DevRestApiComponent_Conditional_0_Template_mat_select_selectionChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateAction($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](15, DevRestApiComponent_Conditional_0_For_16_Template, 2, 3, "mat-option", 8, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "mat-tab-group", 9)(18, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, DevRestApiComponent_Conditional_0_div_19_Template, 5, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "app-dev-api-introduction", 11)(21, "app-dev-rest-tab-introduction", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, DevRestApiComponent_Conditional_0_div_23_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](24, "app-dev-rest-tab-examples-intro", 11)(25, "app-dev-rest-api-action-params", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "mat-accordion", 13)(27, "mat-expansion-panel")(28, "mat-expansion-panel-header")(29, "mat-panel-title")(30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "Specify Additional Test Parameters (Url / POST)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "mat-panel-description", 14)(33, "div", 15)(34, "mat-form-field", 16)(35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36, "Additional Url Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function DevRestApiComponent_Conditional_0_Template_input_input_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateParams($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "mat-form-field", 16)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40, "Post body");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function DevRestApiComponent_Conditional_0_Template_textarea_input_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.updateParams($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](43, "app-dev-rest-urls-and-code", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](45, DevRestApiComponent_Conditional_0_div_45_Template, 5, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](46, "app-dev-api-permissions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](48, DevRestApiComponent_Conditional_0_div_48_Template, 7, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](49, "app-dev-rest-tab-headers", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](vm_r4.webApi == null ? null : vm_r4.webApi.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("items", ctx_r1.scenarios)("valueInput", vm_r4.scenario.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", vm_r4.selected == null ? null : vm_r4.selected.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](vm_r4.details.actions);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r1.urlParams$.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("rows", 10)("value", ctx_r1.urlParams$.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
  }
}
const pathToApi = 'app/{appname}/{endpointPath}/{action}';
class DevRestApiComponent extends ___WEBPACK_IMPORTED_MODULE_0__.DevRestBase {
  constructor(/** Context for this dialog. Used for appId, zoneId, tabId, etc. */
  context, dnnContext, dialog, router, route) {
    super(context, dialog, dnnContext, router, route, null);
    this.log = (0,_shared_logging__WEBPACK_IMPORTED_MODULE_4__.classLog)({
      DevRestApiComponent
    });
    this.hostClass = 'dialog-component';
    /** action name to check for */
    this.selectedActionName$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(null);
    /** Test values for url params */
    this.urlParams$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject('');
    this.sourceService = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_code_editor_services_source_service__WEBPACK_IMPORTED_MODULE_2__.SourceService);
    const logWebApi = this.log.rxTap('webApi$', {
      enabled: true
    });
    const webApi$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(pm => pm.get(_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_7__.GoToDevRest.paramApiPath))), this.sourceService.getWebApis().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.shareReplay)(1))]).pipe(logWebApi.pipe(), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([name, webApis]) => {
      name = decodeURIComponent(name);
      return webApis.find(w => w.path === name);
    }, logWebApi.map()));
    const apiDetails$ = webApi$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.switchMap)(webApi => this.sourceService.getWebApiDetails(webApi.path)), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.share)());
    const logToSelectedAction = this.log.rxTap('selectedActionName$', {
      enabled: true
    });
    apiDetails$.pipe(logToSelectedAction.pipe(),
    // take(1),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.filter)(x => !!x?.actions?.length), logToSelectedAction.filter()).subscribe(x => {
      this.log.a(`first action '${x?.actions[0]?.name}'`);
      return this.selectedActionName$.next(x?.actions[0]?.name);
    });
    var logSelectedActions = this.log.rxTap('selectedAction$', {
      enabled: true
    });
    const selectedAction$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([apiDetails$, this.selectedActionName$]).pipe(logSelectedActions.pipe(),
    // add debounce because of diamond problem with apiDetails$ and selectedAction$
    // debounceTime(10),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([details, name]) => details?.actions?.find(a => a.name === name)), logSelectedActions.map(), (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.filter)(x => !!x), logSelectedActions.filter());
    // Build Root Stream for the root folder
    const root$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([webApi$, selectedAction$, this.scenario$, this.dialogSettings$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([webApi, action, scenario, dialogSettings]) => {
      const resolved = pathToApi.replace('{appname}', scenario.inSameContext ? 'auto' : encodeURI(dialogSettings.Context.App.Folder)).replace('{endpointPath}', webApi.endpointPath).replace('{action}', action.name);
      return this.rootBasedOnScenario(resolved, scenario);
    }));
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([webApi$, apiDetails$, selectedAction$, this.urlParams$, this.scenario$]), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([root$, this.dialogSettings$])]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([[webApi, details, selActions, urlParams, scenario], [root, diag]]) => ({
      ...this.buildBaseViewModel(webApi.name, webApi.endpointPath, diag, null, root, scenario),
      webApi,
      details,
      selected: selActions,
      permissionsHasAnonymous: true,
      // dummy value to prevent error being shown
      apiCalls: (0,_api_samples__WEBPACK_IMPORTED_MODULE_13__.generateWebApiCalls)(dnnContext.$2sxc, scenario, context, root, urlParams, selActions.verbs)
    })));
  }
  updateParams(event) {
    this.urlParams$.next(event.target.value);
  }
  updateAction(value) {
    this.selectedActionName$.next(value);
  }
  static {
    this.ɵfac = function DevRestApiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_5__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_24__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: DevRestApiComponent,
      selectors: [["app-dev-rest-api"]],
      hostVars: 1,
      hostBindings: function DevRestApiComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "eav-dialog", "eav-no-scrollbar"], ["mat-mdc-dialog-title", ""], [1, "dialog-title-box"], [1, "eav-dialog-content"], [2, "display", "flex", "flex-wrap", "wrap"], ["label", "Choose Scenario", 2, "display", "block", "max-width", "100%", 3, "valueChange", "items", "valueInput"], ["color", "accent", 1, "eav-mat-form-field", 2, "width", "360px", "max-width", "calc(100% - 40px)"], [3, "selectionChange", "value"], [3, "value"], ["dynamicHeight", "", "color", "accent", 1, "eav-tab-group"], ["class", "mat-tab-label-box", "tippy", "Introduction", 4, "matTabLabel"], [3, "data"], ["class", "mat-tab-label-box", 3, "tippy", 4, "matTabLabel"], ["multi", "", 1, "rest-urls-accordion"], [2, "display", "block"], [1, "form-with-textarea"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "placeholder", "?id=27", 3, "input", "value"], ["matInput", "", "placeholder", "Placeholder", 3, "input", "rows", "value"], ["class", "mat-tab-label-box", "tippy", "Permissions", 4, "matTabLabel"], ["class", "mat-tab-label-box", "tippy", "HTTP headers and auto", 4, "matTabLabel"], ["tippy", "Introduction", 1, "mat-tab-label-box"], [1, "mat-tab-label-box", 3, "tippy"], ["svgIcon", "code-curly"], ["tippy", "Permissions", 1, "mat-tab-label-box"], ["tippy", "HTTP headers and auto", 1, "mat-tab-label-box"]],
      template: function DevRestApiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, DevRestApiComponent_Conditional_0_Template, 50, 14, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_3__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterOutlet, _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_8__.SelectorWithHelpComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatOptionModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabGroup, _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_14__.DevRestApiIntroductionComponent, _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_11__.DevRestTabIntroductionComponent, _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_9__.DevRestTabExamplesComponent, _action_params_action_params_component__WEBPACK_IMPORTED_MODULE_12__.DevRestApiActionParamsComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__.MatExpansionPanelDescription, _angular_material_input__WEBPACK_IMPORTED_MODULE_34__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_34__.MatInput, _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_6__.DevRestUrlsAndCodeComponent, _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_15__.DevRestApiPermissionsComponent, _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_10__.DevRestHttpHeadersComponent, _angular_common__WEBPACK_IMPORTED_MODULE_35__.AsyncPipe],
      styles: ["[_nghost-%COMP%]     code, \ncode[_ngcontent-%COMP%], \npre[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n\n.rest-urls-accordion[_ngcontent-%COMP%] {\n  display: block;\n  margin: 8px;\n}\n\n.rest-urls-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.code-example[_ngcontent-%COMP%] {\n  position: relative;\n}\n.code-example__text[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n.code-example__copy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.params-form[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 600px;\n}\n.params-form[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.form-with-textarea[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldi1yZXN0LWFsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7RUFHRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRiIsImZpbGUiOiJkZXYtcmVzdC1hbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZSBmaXJzdCBvbmUgaXMgbmVlZGVkIHNvIDxjb2RlPiBjb2xvcmluZyB3b3JrcyBpbiBkeW5hbWljIGluamVjdGVkIGh0bWwgKHRpcHMgZXRjLilcclxuOmhvc3QgOjpuZy1kZWVwIGNvZGUsXHJcbmNvZGUsXHJcbnByZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG59XHJcblxyXG4ucmVzdC11cmxzLWFjY29yZGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5yZXN0LXVybHMtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvZGUtZXhhbXBsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmX190ZXh0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAmX19jb3B5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtcy1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0td2l0aC10ZXh0YXJlYSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2Rldi1yZXN0L2Rldi1yZXN0LWFsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7RUFHRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjtBQUNBLHdzREFBd3NEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhlIGZpcnN0IG9uZSBpcyBuZWVkZWQgc28gPGNvZGU+IGNvbG9yaW5nIHdvcmtzIGluIGR5bmFtaWMgaW5qZWN0ZWQgaHRtbCAodGlwcyBldGMuKVxyXG46aG9zdCA6Om5nLWRlZXAgY29kZSxcclxuY29kZSxcclxucHJlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG5cclxucHJlIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XHJcbn1cclxuXHJcbi5yZXN0LXVybHMtYWNjb3JkaW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLnJlc3QtdXJscy10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29kZS1leGFtcGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gICZfX2NvcHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFyYW1zLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZDpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS13aXRoLXRleHRhcmVhIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */", ".selector[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n}\n.selector__dropdown[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1zZWxlY3Rvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKIiwiZmlsZSI6ImhlYWRlci1zZWxlY3Rvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdG9yIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJl9fZHJvcGRvd24ge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2Rldi1yZXN0L2hlYWRlci1zZWxlY3Rvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBQ0EsZ2hCQUFnaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0b3Ige1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmX19kcm9wZG93biB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 42881:
/*!***********************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/api/permissions/permissions.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestApiPermissionsComponent: () => (/* binding */ DevRestApiPermissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ag-grid/column-definitions */ 11828);
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ 60251);
/* harmony import */ var _shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/modules/sxc-grid-module/sxc-grid.module */ 67037);
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ag-grid-community/angular */ 29841);






class DevRestApiPermissionsComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)();
  }
  ngOnInit() {
    this.gridOptions = this.buildGridOptions();
  }
  ngOnChanges(changes) {
    if (changes.data) {
      this.buildGridItems();
    }
  }
  buildGridItems() {
    this.gridItems = [{
      requirement: 'Ignore All Security Checks <code>[AllowAnonymous]</code>',
      class: this.data().details.security.ignoreSecurity,
      method: this.data().selected.security.ignoreSecurity,
      effective: this.data().selected.mergedSecurity.ignoreSecurity,
      comments: 'If this is set all other security checks are skipped'
    }, {
      requirement: 'Allow Anonymous Use',
      class: this.data().details.security.allowAnonymous,
      method: this.data().selected.security.allowAnonymous,
      effective: this.data().selected.mergedSecurity.allowAnonymous,
      comments: ''
    }, {
      requirement: 'Require Verification Token',
      class: this.data().details.security.requireVerificationToken,
      method: this.data().selected.security.requireVerificationToken,
      effective: this.data().selected.mergedSecurity.requireVerificationToken,
      comments: ''
    }, {
      requirement: 'Allow users with <strong>view</strong> permissions',
      class: this.data().details.security.view,
      method: this.data().selected.security.view,
      effective: this.data().selected.mergedSecurity.view,
      comments: ''
    }, {
      requirement: 'Allow users with <strong>edit</strong> permissions',
      class: this.data().details.security.edit,
      method: this.data().selected.security.edit,
      effective: this.data().selected.mergedSecurity.edit,
      comments: ''
    }, {
      requirement: 'Allow users with <strong>admin</strong> permissions',
      class: this.data().details.security.admin,
      method: this.data().selected.security.admin,
      effective: this.data().selected.mergedSecurity.admin,
      comments: ''
    }, {
      requirement: 'Allow users with <strong>super-user</strong> permissions',
      class: this.data().details.security.superUser,
      method: this.data().selected.security.superUser,
      effective: this.data().selected.mergedSecurity.superUser,
      comments: ''
    }, {
      requirement: 'Require Context',
      class: this.data().details.security.requireContext,
      method: this.data().selected.security.requireContext,
      effective: this.data().selected.mergedSecurity.requireContext,
      comments: 'If required, the context must be included - see also headers'
    }];
    this.gridHeight = `${33 + this.gridItems.length * 48}px`;
  }
  buildGridOptions() {
    const gridOptions = {
      ..._shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_1__.defaultGridOptions,
      columnDefs: [{
        headerName: 'Requirement',
        field: 'requirement',
        flex: 2,
        minWidth: 200,
        cellClass: 'no-outline'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_0__.ColumnDefinitions.Boolean3,
        headerName: 'Class',
        field: 'class'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_0__.ColumnDefinitions.Boolean3,
        headerName: 'Method',
        field: 'method'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_0__.ColumnDefinitions.Boolean3,
        headerName: 'Effective',
        field: 'effective'
      }, {
        ..._shared_ag_grid_column_definitions__WEBPACK_IMPORTED_MODULE_0__.ColumnDefinitions.TextWideFlex3,
        headerName: 'Comments',
        field: 'comments'
      }]
    };
    return gridOptions;
  }
  static {
    this.ɵfac = function DevRestApiPermissionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestApiPermissionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DevRestApiPermissionsComponent,
      selectors: [["app-dev-api-permissions"]],
      inputs: {
        data: [1, "data"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 11,
      vars: 4,
      consts: [["href", "https://docs.2sxc.org/web-api/custom/custom-web-api-security.html", "target", "_blank"], [1, "ag-theme-material", 3, "rowData", "gridOptions"]],
      template: function DevRestApiPermissionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Permissions in WebAPIs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Permissions must be specified in the code, using Attributes such as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "[AllowAnonymous]");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ". Read more about it in the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Docs for custom WebAPI Security");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, ".\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ag-grid-angular", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.gridHeight);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowData", ctx.gridItems)("gridOptions", ctx.gridOptions);
        }
      },
      dependencies: [_shared_modules_sxc_grid_module_sxc_grid_module__WEBPACK_IMPORTED_MODULE_2__.SxcGridModule, _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_4__.AgGridAngular],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 64495:
/*!*************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/api/introduction/introduction.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestApiIntroductionComponent: () => (/* binding */ DevRestApiIntroductionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ 13488);



class DevRestApiIntroductionComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    /** List of scenarios */
    this.scenarios = ___WEBPACK_IMPORTED_MODULE_0__.AllScenarios;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function DevRestApiIntroductionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestApiIntroductionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DevRestApiIntroductionComponent,
      selectors: [["app-dev-api-introduction"]],
      inputs: {
        data: [1, "data"]
      },
      decls: 12,
      vars: 0,
      consts: [["href", "https://docs.2sxc.org/index.html", "target", "_blank"], ["href", "https://docs.2sxc.org/web-api/index.html", "target", "_blank"], ["href", "https://docs.2sxc.org/web-api/query-rest-web-api.html", "target", "_blank"]],
      template: function DevRestApiIntroductionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " To learn more about WebAPIs you may want to read these ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "docs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ":\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "WebAPIs in 2sxc");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Query REST API");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 65089:
/*!*************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/api/api-samples.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateWebApiCalls: () => (/* binding */ generateWebApiCalls)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);

// tslint:disable: curly
function generateWebApiCalls($2sxc, scenario, context, root, urlParams, verbs) {
  const virtual = root[0] !== '/' && !root.startsWith('http');
  // if urlParams exist and it doesn't starts with a ?, add that
  if (urlParams && urlParams.length && urlParams[0] !== '?') urlParams = '?' + urlParams;
  const contextParams = virtual ? `${urlParams}${urlParams ? '&' : '?'}PageId=${context.tabId}&ModuleId=${context.moduleId}` : '';
  const directUrl = $2sxc.http.apiUrl(root) + contextParams;
  const pathWithParams = root + urlParams;
  const result = new Array();
  if (verbs.includes('GET')) result.push(new ___WEBPACK_IMPORTED_MODULE_0__.ApiCall(virtual, 'GET', pathWithParams, 'call the WebAPI endpoint', 'call GET on this endpoint', true, snippetsGet(scenario, pathWithParams, context), directUrl));
  if (verbs.includes('POST')) result.push(new ___WEBPACK_IMPORTED_MODULE_0__.ApiCall(virtual, 'POST', pathWithParams, 'call the WebAPI endpoint', 'call POST on this endpoint', false, snippetsPost(scenario, pathWithParams, context.moduleId), directUrl));
  return result;
}
function snippetsGet(scenario, path, context) {
  const moduleId = context.moduleId;
  const virtual = path[0] !== '/';
  const list = [];
  const pathWithContext = `${path}?PageId=${context.tabId}&ModuleId=${moduleId}`;
  if (scenario.inSameContext) list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Example with global $2sxc and event-context', 'This example finds the context information from the HTML where an action started.', `
<button onclick="$2sxc(this).webApi.get('${path}').then(data => console.log(data))">
  get it
</button>`, false, [___WEBPACK_IMPORTED_MODULE_0__.hint$2sxc]));
  if (scenario.in2sxc) list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample(`Example with global $2sxc and a Module-Id ${moduleId}`, `This is how you get the context when your code doesn't start with a DOM context, so you need the moduleId.`, `
// get the sxc-controller for this module
var sxc = $2sxc(${moduleId});
// now get the data in the promise
sxc.webApi.get('${path}')
  .then(data => {
    console.log(data)
  });`, false, [___WEBPACK_IMPORTED_MODULE_0__.hint$2sxc]), new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample(`Same example as one-liner`, 'This is the same as above, but as a one-liner so you can run it directly in the F12 console right now.', `$2sxc(${moduleId}).webApi.get('${path}').then(data => console.log('just got:', data));`, true));
  if (scenario.in2sxc && scenario.inSameContext) list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Example where you get the Module-Id from Razor', `This example doesn't use a fixed moduleId but let's the Razor add the current moduleId when the page is rendered.`, `
// this will be replaced on the server with the ID
var moduleId = @Dnn.Module.ModuleID;
var sxc = $2sxc(moduleId);
var promise = sxc.webApi.get('${path}');`, false, [___WEBPACK_IMPORTED_MODULE_0__.hint$2sxc]));
  // jquery examples, they differ based on the scenario
  const endPointGetter = virtual ? `$2sxc.http.apiUrl('${path}')` : `'${path}'`;
  const endPointGetWithParams = virtual ? `$2sxc.http.apiUrl('${pathWithContext}')` : `'${pathWithContext}'`;
  if (scenario.inSameSite) {
    // jQuery using setModuleHeaders
    list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Using jQuery inside DNN', `This example uses jQuery instead of the $2sxc to do the AJAX call.
      It shows you how to resolve the virtual path for use in other ways.`, `
var endpoint = ${endPointGetter};
$.ajax({
  url:endpoint,
  beforeSend: $.dnnSF(${moduleId}).setModuleHeaders
}).then(data => {
  console.log('Got this data:', data);
})`, false, []));
    // jQuery Single-Liner
    list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Using jQuery as single-liner', `The same example as above, just as single-liner so you can test it directly in the F12 console.
      This will only work if you're on a DNN page with this module.`, `$.ajax({url: ${endPointGetter}, beforeSend: $.dnnSF(${moduleId}).setModuleHeaders }).then(data => console.log(data))`, false, []));
    // jQuery without setModuleHeaders
    list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Using jQuery and add Context in URL', `This example uses jQuery instead of the $2sxc to do the AJAX call.
      But instead of using the DNN Services Framework it adds relevant headers to the url.`, `
$.ajax(${endPointGetWithParams}).then(data => {
  console.log('Got this data:', data);
})`, false, []));
    // jQuery Single-Liner without SetModuleHeaders
    list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Using jQuery with url-context as single-liner', `The same example as above, just as single-liner so you can test it directly in the F12 console.
      This will work on a DNN page which has jQuery activated. `, `$.ajax(${endPointGetWithParams}).then(data => console.log(data))`, false, []));
  } else {
    // jQuery External
    list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Using jQuery in another Site or External', `This example uses jQuery and doesn't use $2sxc or the DNN ServicesFramework,
      because they would be either missing, or give wrong context-headers.`, `
$.ajax('${path}').then(data => {
  console.log('Got this data:', data);
})`, false, [___WEBPACK_IMPORTED_MODULE_0__.warningExternal]));
    // jQuery External with Context
    list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Using jQuery with Context in URL', `This example uses jQuery and includes a module-context. This is unusual for external access, but may be needed sometime.`, `
$.ajax('${pathWithContext}').then(data => {
  console.log('Got this data:', data);
})`, false, [___WEBPACK_IMPORTED_MODULE_0__.warningExternal]));
  }
  // return generated snippets
  return list;
}
/** Snippets for basic Post */
function snippetsPost(scenario, path, moduleId) {
  const showWarning = !scenario.inSameContext;
  return [new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Basic Example', `This example uses the ModuleId to get the context information.
To see other ways to get the context and headers, check out the GET examples.
Note that this snippet doesn't use real names of properties to add.`, `// get the sxc-controller for this module
var sxc = $2sxc(${moduleId});

// The object we'll send to get created. It's just a simple object with properties
var urlParams = {
  id: 47,
};
var postParams = {
  // related items like tags can be assigned with IDs
  // which you would usually get from somewhere first
  list: [17, 4203, 5030],
  message: 'Some Text',
};

// now create it and get the id back
sxc.webApi.post('${path}', urlParams, postParams)
  .then(data => {
    console.log('Got this ID information: ', data)
  });`, false, showWarning ? [___WEBPACK_IMPORTED_MODULE_0__.warningSimpleSampleOnly] : [])];
}

/***/ }),

/***/ 79996:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/code-editor/services/source.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceService: () => (/* binding */ SourceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/http-service-base */ 96474);




const appFilesAll = 'admin/AppFiles/AppFiles';
const appFilesAsset = 'admin/AppFiles/asset';
const appFilesCreate = 'admin/AppFiles/create';
const apiExplorerInspect = 'admin/ApiExplorer/inspect';
const apiExplorerAppApiFiles = 'admin/ApiExplorer/AppApiFiles';
const appFilesPredefinedTemplates = 'admin/AppFiles/GetTemplates';
const appFilesPreview = 'admin/AppFiles/preview';
class SourceService extends _shared_services_http_service_base__WEBPACK_IMPORTED_MODULE_0__.HttpServiceBase {
  /** ViewKey is templateId or path */
  get(viewKey, global, urlItems) {
    return this.getHttpApiUrl(appFilesAsset, {
      params: {
        appId: this.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(view => {
      if (view.Type.toLocaleLowerCase() === 'auto') {
        switch (view.Extension.toLocaleLowerCase()) {
          case '.cs':
          case '.cshtml':
            view.Type = 'Razor';
            break;
          case '.html':
          case '.css':
          case '.js':
            view.Type = 'Token';
            break;
        }
      }
      return view;
    }));
  }
  // TODO: For Code Editor,
  // getSig(viewKey: string, global: boolean, urlItems: ViewOrFileIdentifier[], initial: undefined): Signal<SourceView> {
  //   // Signal für die SourceView erstellen
  //   const temp = this.getSignal<SourceView>(appFilesAsset, {
  //     params: {
  //       appId: this.appId,
  //       global,
  //       ...this.templateIdOrPath(viewKey, global, urlItems),
  //     },
  //   }, initial);
  //   return computed(() => {
  //     const result = temp();
  //     if (result && result.Type.toLocaleLowerCase() === 'auto') {
  //       switch (result.Extension.toLocaleLowerCase()) {
  //         case '.cs':
  //         case '.cshtml':
  //           result.Type = 'Razor';
  //           break;
  //         case '.html':
  //         case '.css':
  //         case '.js':
  //           result.Type = 'Token';
  //           break;
  //       }
  //     }
  //     return result;
  //   });
  // }
  /** ViewKey is templateId or path */
  save(viewKey, global, view, urlItems) {
    return this.http.post(this.apiUrl(appFilesAsset), view, {
      params: {
        appId: this.appId,
        global,
        ...this.templateIdOrPath(viewKey, global, urlItems)
      }
    });
  }
  getAll(mask) {
    return this.getHttpApiUrl(appFilesAll, {
      params: {
        appId: this.appId,
        ...(mask && {
          mask
        })
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({
      Files
    }) => {
      Files.forEach(file => {
        file.Shared ??= false;
      });
      return Files;
    }));
  }
  getWebApis() {
    return this.getHttpApiUrl(apiExplorerAppApiFiles, {
      params: {
        appId: this.appId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({
      files
    }) => {
      files.forEach(file => {
        file.isShared ??= false;
        file.isCompiled ??= false;
      });
      return files;
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(files => {
      const webApis = files.map(file => {
        const splitIndex = file.path.lastIndexOf('/');
        const fileExtIndex = file.path.lastIndexOf('.');
        const folder = file.path.substring(0, splitIndex);
        const name = file.path.substring(splitIndex + 1, fileExtIndex);
        const webApi = {
          path: file.path,
          folder,
          name,
          isShared: file.isShared,
          endpointPath: file.endpointPath,
          isCompiled: file.isCompiled,
          edition: file.edition
        };
        return webApi;
      });
      return webApis;
    }));
  }
  getWebApisSig() {
    // Get the signal that retrieves the API files
    const apiFilesSignal = this.getSignal(apiExplorerAppApiFiles, {
      params: {
        appId: this.appId
      }
    });
    // Use a computed signal to transform the data
    const webApisSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const files = apiFilesSignal()?.files;
      if (!files) return [];
      // Ensure the default values for `isShared` and `isCompiled`
      files.forEach(file => {
        file.isShared ??= false;
        file.isCompiled ??= false;
      });
      // Map the files to the desired WebApi format
      return files.map(file => {
        const splitIndex = file.path.lastIndexOf('/');
        const fileExtIndex = file.path.lastIndexOf('.');
        const folder = file.path.substring(0, splitIndex);
        const name = file.path.substring(splitIndex + 1, fileExtIndex);
        return {
          path: file.path,
          folder,
          name,
          isShared: file.isShared,
          endpointPath: file.endpointPath,
          isCompiled: file.isCompiled,
          edition: file.edition
        };
      });
    });
    return webApisSignal;
  }
  getWebApiDetails(apiPath) {
    return this.getHttpApiUrl(apiExplorerInspect, {
      params: {
        appId: this.appId,
        zoneId: this.zoneId,
        path: apiPath
      }
    });
  }
  getPredefinedTemplates(purpose, type) {
    return this.getHttpApiUrl(appFilesPredefinedTemplates, {
      params: {
        ...(purpose && {
          purpose
        }),
        ...(type && {
          type
        })
      }
    });
  }
  getPreview(path, global, templateKey) {
    return this.getHttpApiUrl(appFilesPreview, {
      params: {
        appId: this.appId,
        path,
        templateKey,
        global
      }
    });
  }
  create(path, global, templateKey) {
    return this.http.post(this.apiUrl(appFilesCreate), {}, {
      params: {
        appId: this.appId,
        global,
        purpose: 'auto',
        path,
        templateKey
      }
    });
  }
  templateIdOrPath(viewKey, global, urlItems) {
    if (/^[0-9]*$/g.test(viewKey)) {
      const path = urlItems.find(i => i.EntityId?.toString() === viewKey && i.IsShared === global)?.Path;
      return {
        templateId: viewKey,
        ...(path != null && {
          path
        })
      };
    } else {
      return {
        path: viewKey
      };
    }
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵSourceService_BaseFactory;
      return function SourceService_Factory(__ngFactoryType__) {
        return (ɵSourceService_BaseFactory || (ɵSourceService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SourceService)))(__ngFactoryType__ || SourceService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SourceService,
      factory: SourceService.ɵfac
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_dev-rest_api_api_component_ts.js.map