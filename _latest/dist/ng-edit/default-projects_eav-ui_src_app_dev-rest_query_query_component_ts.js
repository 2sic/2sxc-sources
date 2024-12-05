"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_dev-rest_query_query_component_ts"],{

/***/ 50863:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/query/introduction/introduction.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestQueryIntroductionComponent: () => (/* binding */ DevRestQueryIntroductionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ 13488);



class DevRestQueryIntroductionComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    /** List of scenarios */
    this.scenarios = ___WEBPACK_IMPORTED_MODULE_0__.AllScenarios;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function DevRestQueryIntroductionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestQueryIntroductionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DevRestQueryIntroductionComponent,
      selectors: [["app-dev-query-introduction"]],
      inputs: {
        data: [1, "data"]
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 0,
      consts: [["href", "https://docs.2sxc.org/index.html", "target", "_blank"], ["href", "https://docs.2sxc.org/basics/query/index.html", "target", "_blank"], ["href", "https://docs.2sxc.org/web-api/query-rest-web-api.html", "target", "_blank"]],
      template: function DevRestQueryIntroductionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " To learn more about queries you may want to read these ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "docs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ":\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Queries in 2sxc");
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

/***/ 70185:
/*!*****************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/query/query-samples.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateQueryCalls: () => (/* binding */ generateQueryCalls)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);

// tslint:disable: curly
function generateQueryCalls($2sxc, scenario, context, root, id, streamNames, urlParams) {
  const virtual = root[0] !== '/' && !root.startsWith('http');
  // if urlParams exist and it doesn't starts with a ?, add that
  if (urlParams && urlParams.length && urlParams[0] !== '?') urlParams = '?' + urlParams;
  const contextParams = virtual ? `${urlParams}${urlParams ? '&' : '?'}PageId=${context.tabId}&ModuleId=${context.moduleId}` : '';
  const directUrl = $2sxc.http.apiUrl(root) + contextParams;
  // const directWId = $2sxc.http.apiUrl(withId) + contextParams;
  const pathWithParams = root + urlParams;
  const pathWithStream = `${root}/${streamNames ?? 'Default'}${urlParams}`;
  return [new ___WEBPACK_IMPORTED_MODULE_0__.ApiCall(virtual, 'GET', pathWithParams, 'read all query streams', 'Read list of all items', true, snippetsGet(scenario, pathWithParams, context), directUrl), new ___WEBPACK_IMPORTED_MODULE_0__.ApiCall(virtual, 'GET', pathWithStream, 'read only Stream Default', 'Read list of all items', true, snippetsGet(scenario, pathWithStream, context), directUrl)
  // #todoquery 2dm
  // 1. later sample with IDs
  // 1. later maybe sample with guids, but not certain because it's kind of an unexpected opening
  ];
}
function snippetsGet(scenario, path, context, streamNames) {
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

/***/ }),

/***/ 99774:
/*!*******************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/query/query.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestQueryComponent: () => (/* binding */ DevRestQueryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core */ 88692);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../permissions */ 4096);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dev-rest-base.component */ 91091);
/* harmony import */ var _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dev-rest-urls-and-code/dev-rest-urls-and-code.component */ 55630);
/* harmony import */ var _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selector-with-help/selector-with-help.component */ 1708);
/* harmony import */ var _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab-examples/tab-examples.component */ 22422);
/* harmony import */ var _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tab-headers/tab-headers.component */ 53966);
/* harmony import */ var _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tab-introduction/tab-introduction.component */ 16768);
/* harmony import */ var _tab_permissions_tab_permissions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tab-permissions/tab-permissions.component */ 61426);
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./introduction/introduction.component */ 50863);
/* harmony import */ var _query_samples__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./query-samples */ 70185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 81955);




































function DevRestQueryComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function DevRestQueryComponent_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function DevRestQueryComponent_Conditional_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 17)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "emoji_objects");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "Introduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function DevRestQueryComponent_Conditional_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 18)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "code_curly");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("tippy", (vm_r4.scenario.useVirtual ? "Virtual " : "Absolute ") + "REST URLs");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Call ", vm_r4.scenario.useVirtual ? "Virtual" : "Absolute", " REST URLs");
  }
}
function DevRestQueryComponent_Conditional_0_div_29_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function DevRestQueryComponent_Conditional_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 19)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, DevRestQueryComponent_Conditional_0_div_29_Conditional_5_Template, 2, 0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Permissions (", vm_r4.permissions.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](!vm_r4.permissions.length ? 5 : -1);
  }
}
function DevRestQueryComponent_Conditional_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 20)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "perm_device_information");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "HTTP headers & \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "/auto/");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
}
function DevRestQueryComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Using REST with Query:\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, DevRestQueryComponent_Conditional_0_Conditional_6_Template, 3, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "app-selector-with-help", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function DevRestQueryComponent_Conditional_0_Template_app_selector_with_help_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.changeScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "mat-tab-group", 6)(11, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, DevRestQueryComponent_Conditional_0_div_12_Template, 5, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "app-dev-query-introduction", 8)(14, "app-dev-rest-tab-introduction", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, DevRestQueryComponent_Conditional_0_div_16_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "app-dev-rest-tab-examples-intro", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 10)(19, "mat-form-field", 11)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "Stream Name(s) to Limit, comma-separated");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function DevRestQueryComponent_Conditional_0_Template_input_input_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.updateStreams($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "mat-form-field", 11)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "Additional Url Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function DevRestQueryComponent_Conditional_0_Template_input_input_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.updateParams($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](27, "app-dev-rest-urls-and-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, DevRestQueryComponent_Conditional_0_div_29_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](30, "app-dev-rest-tab-permissions", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](32, DevRestQueryComponent_Conditional_0_div_32_Template, 7, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](33, "app-dev-rest-tab-headers", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](vm_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"](!ctx_r2.isSideNavContent ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("items", ctx_r2.scenarios)("valueInput", vm_r4.scenario.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r2.streamNames$.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r2.urlParams$.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", vm_r4);
  }
}
const pathToQuery = 'app/{appname}/query/{queryname}';
class DevRestQueryComponent extends _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_7__.DevRestBase {
  // TODO: @2dg Offen ViewModel
  constructor( /** Context for this dialog. Used for appId, zoneId, tabId, etc. */
  context, dialog, router, route, dnnContext) {
    const permissionsService = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_permissions__WEBPACK_IMPORTED_MODULE_3__.PermissionsService);
    super(context, dialog, dnnContext, router, route, permissionsService);
    this.hostClass = 'dialog-component';
    /** Test values for url params */
    this.urlParams$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject('');
    /** Test values for stream names */
    this.streamNames$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject('Default');
    this.pipelinesService = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_app_administration_services__WEBPACK_IMPORTED_MODULE_2__.PipelinesService);
    this.isSideNavContent = this.router.url.includes(___WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeQuery);
    // build Query Stream
    const query$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(pm => pm.get(___WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramQuery))), this.pipelinesService.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.contentTypes.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.share)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([queryGuid, all]) => all.find(q => q.Guid === queryGuid)), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.share)());
    this.permissions$ = this.buildPermissionStream(___WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramQuery);
    // Build Root Stream (for the root folder)
    const root$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([query$, this.scenario$, this.dialogSettings$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([query, scenario, dialogSettings]) => {
      const resolved = pathToQuery.replace('{queryname}', query.Name).replace('{appname}', scenario.inSameContext ? 'auto' : encodeURI(dialogSettings.Context.App.Folder));
      return this.rootBasedOnScenario(resolved, scenario);
    }));
    // build variables for template
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([query$, this.scenario$, this.permissions$]), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([root$, /* itemOfThisType$, */this.dialogSettings$]), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.streamNames$, this.urlParams$])]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(([[query, scenario, permissions], [root, diag], [streamNames, urlParams]]) => ({
      ...this.buildBaseViewModel(query.Name, query.Guid, diag, permissions, root, scenario),
      query,
      apiCalls: (0,_query_samples__WEBPACK_IMPORTED_MODULE_15__.generateQueryCalls)(dnnContext.$2sxc, scenario, context, root, 0 /* #todoquery */, streamNames, urlParams)
    })));
  }
  updateStreams(event) {
    this.streamNames$.next(event.target.value);
  }
  updateParams(event) {
    this.urlParams$.next(event.target.value);
  }
  static {
    this.ɵfac = function DevRestQueryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestQueryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_6__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_23__.Context));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: DevRestQueryComponent,
      selectors: [["app-dev-rest-query"]],
      hostVars: 1,
      hostBindings: function DevRestQueryComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵhostProperty"]("className", ctx.hostClass);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog"], [1, "eav-dialog-content"], ["label", "Choose Scenario", 3, "valueChange", "items", "valueInput"], ["dynamicHeight", "", "color", "accent", 1, "mat-tab-group-fit-height", "mat-tab-group-fancy-scrollbar", "default-fonts"], ["class", "mat-tab-label-box", "tippy", "Introduction", 4, "matTabLabel"], [3, "data"], ["class", "mat-tab-label-box", 3, "tippy", 4, "matTabLabel"], [1, "params-form"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "placeholder", "Default", 3, "input", "value"], ["matInput", "", "placeholder", "?id=27", 3, "input", "value"], ["class", "mat-tab-label-box", "tippy", "Permissions", 4, "matTabLabel"], ["class", "mat-tab-label-box", "tippy", "HTTP headers and auto", 4, "matTabLabel"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], ["tippy", "Introduction", 1, "mat-tab-label-box"], [1, "mat-tab-label-box", 3, "tippy"], ["tippy", "Permissions", 1, "mat-tab-label-box"], ["tippy", "HTTP headers and auto", 1, "mat-tab-label-box"]],
      template: function DevRestQueryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, DevRestQueryComponent_Conditional_0_Template, 34, 12, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵconditional"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_5__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterOutlet, _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_9__.SelectorWithHelpComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabGroup, _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_14__.DevRestQueryIntroductionComponent, _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_12__.DevRestTabIntroductionComponent, _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_10__.DevRestTabExamplesComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInput, _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_8__.DevRestUrlsAndCodeComponent, _tab_permissions_tab_permissions_component__WEBPACK_IMPORTED_MODULE_13__.DevRestTabPermissionsComponent, _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_11__.DevRestHttpHeadersComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe],
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
//# sourceMappingURL=default-projects_eav-ui_src_app_dev-rest_query_query_component_ts.js.map