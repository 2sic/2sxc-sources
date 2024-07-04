"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["projects_eav-ui_src_app_dev-rest_query_query_component_ts"],{

/***/ 50863:
/*!***************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/query/introduction/introduction.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestQueryIntroductionComponent: () => (/* binding */ DevRestQueryIntroductionComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ 13488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class DevRestQueryIntroductionComponent {
  constructor() {
    /** List of scenarios */
    this.scenarios = ___WEBPACK_IMPORTED_MODULE_0__.AllScenarios;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function DevRestQueryIntroductionComponent_Factory(t) {
    return new (t || DevRestQueryIntroductionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DevRestQueryIntroductionComponent,
    selectors: [["app-dev-query-introduction"]],
    inputs: {
      data: "data"
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-administration/services */ 75445);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../permissions */ 4096);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ 68873);
/* harmony import */ var _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dev-rest-base.component */ 91091);
/* harmony import */ var _query_samples__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query-samples */ 70185);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tab-headers/tab-headers.component */ 53966);
/* harmony import */ var _tab_permissions_tab_permissions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tab-permissions/tab-permissions.component */ 61426);
/* harmony import */ var _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dev-rest-urls-and-code/dev-rest-urls-and-code.component */ 55630);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab-examples/tab-examples.component */ 22422);
/* harmony import */ var _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tab-introduction/tab-introduction.component */ 16768);
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./introduction/introduction.component */ 50863);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../selector-with-help/selector-with-help.component */ 1708);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../content-items/services/entities.service */ 57319);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core */ 34447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 14821);







































function DevRestQueryComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function DevRestQueryComponent_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function DevRestQueryComponent_Conditional_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 17)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "emoji_objects");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "Introduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function DevRestQueryComponent_Conditional_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 18)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "code_curly");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("tippy", (vm_r4.scenario.useVirtual ? "Virtual " : "Absolute ") + "REST URLs");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Call ", vm_r4.scenario.useVirtual ? "Virtual" : "Absolute", " REST URLs");
  }
}
function DevRestQueryComponent_Conditional_0_div_29_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function DevRestQueryComponent_Conditional_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 19)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, DevRestQueryComponent_Conditional_0_div_29_Conditional_5_Template, 2, 0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Permissions (", vm_r4.permissions.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](5, !vm_r4.permissions.length ? 5 : -1);
  }
}
function DevRestQueryComponent_Conditional_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 20)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "perm_device_information");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "HTTP headers & \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "/auto/");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function DevRestQueryComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "Using REST with Query:\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, DevRestQueryComponent_Conditional_0_Conditional_6_Template, 3, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "app-selector-with-help", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("valueChange", function DevRestQueryComponent_Conditional_0_Template_app_selector_with_help_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.changeScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "mat-tab-group", 6)(11, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, DevRestQueryComponent_Conditional_0_div_12_Template, 5, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](13, "app-dev-query-introduction", 8)(14, "app-dev-rest-tab-introduction", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, DevRestQueryComponent_Conditional_0_div_16_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "app-dev-rest-tab-examples-intro", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 10)(19, "mat-form-field", 11)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "Stream Name(s) to Limit, comma-separated");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("input", function DevRestQueryComponent_Conditional_0_Template_input_input_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.updateStreams($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "mat-form-field", 11)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, "Additional Url Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("input", function DevRestQueryComponent_Conditional_0_Template_input_input_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.updateParams($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "app-dev-rest-urls-and-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, DevRestQueryComponent_Conditional_0_div_29_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](30, "app-dev-rest-tab-permissions", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](32, DevRestQueryComponent_Conditional_0_div_32_Template, 7, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](33, "app-dev-rest-tab-headers", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vm_r4 = ctx;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](vm_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](6, !ctx_r2.isSideNavContent ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx_r2.scenarios)("value", vm_r4.scenario.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r2.streamNames$.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r2.urlParams$.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", vm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", vm_r4);
  }
}
const pathToQuery = 'app/{appname}/query/{queryname}';
class DevRestQueryComponent extends _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_5__.DevRestBase {
  constructor(appDialogConfigService, /** Context for this dialog. Used for appId, zoneId, tabId, etc. */
  context, dialogRef, router, route, permissionsService, dnnContext) {
    super(appDialogConfigService, context, dialogRef, dnnContext, router, route, permissionsService);
    this.hostClass = 'dialog-component';
    this.pipelinesService = (0,_core__WEBPACK_IMPORTED_MODULE_16__.transient)(_app_administration_services__WEBPACK_IMPORTED_MODULE_1__.PipelinesService);
    /** Test values for url params */
    this.urlParams$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject('');
    /** Test values for stream names */
    this.streamNames$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject('Default');
    this.isSideNavContent = this.router.url.includes(___WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.routeQuery);
    // build Query Stream
    const query$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(pm => pm.get(___WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramQuery))), this.pipelinesService.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_3__.eavConstants.contentTypes.query).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.share)())]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(([queryGuid, all]) => all.find(q => q.Guid === queryGuid)), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.share)());
    this.permissions$ = this.buildPermissionStream(___WEBPACK_IMPORTED_MODULE_0__.GoToDevRest.paramQuery);
    // Build Root Stream (for the root folder)
    const root$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([query$, this.scenario$, this.dialogSettings$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(([query, scenario, dialogSettings]) => {
      const resolved = pathToQuery.replace('{queryname}', query.Name).replace('{appname}', scenario.inSameContext ? 'auto' : encodeURI(dialogSettings.Context.App.Folder));
      return this.rootBasedOnScenario(resolved, scenario);
    }));
    // build variables for template
    this.viewModel$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([query$, this.scenario$, this.permissions$]), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([root$, /* itemOfThisType$, */this.dialogSettings$]), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([this.streamNames$, this.urlParams$])]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(([[query, scenario, permissions], [root, diag], [streamNames, urlParams]]) => ({
      ...this.buildBaseViewModel(query.Name, query.Guid, diag, permissions, root, scenario),
      query,
      apiCalls: (0,_query_samples__WEBPACK_IMPORTED_MODULE_6__.generateQueryCalls)(dnnContext.$2sxc, scenario, context, root, 0 /* #todoquery */, streamNames, urlParams)
    })));
  }
  updateStreams(event) {
    this.streamNames$.next(event.target.value);
  }
  updateParams(event) {
    this.urlParams$.next(event.target.value);
  }
  static #_ = this.ɵfac = function DevRestQueryComponent_Factory(t) {
    return new (t || DevRestQueryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_administration_services__WEBPACK_IMPORTED_MODULE_1__.AppDialogConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_4__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_permissions__WEBPACK_IMPORTED_MODULE_2__.PermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_24__.Context));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: DevRestQueryComponent,
    selectors: [["app-dev-rest-query"]],
    hostVars: 1,
    hostBindings: function DevRestQueryComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵhostProperty"]("className", ctx.hostClass);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵProvidersFeature"]([_permissions__WEBPACK_IMPORTED_MODULE_2__.PermissionsService, _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_14__.EntitiesService, _app_administration_services__WEBPACK_IMPORTED_MODULE_1__.AppDialogConfigService,
    // PipelinesService,
    _permissions__WEBPACK_IMPORTED_MODULE_2__.MetadataService]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "eav-dialog", "eav-no-scrollbar"], [1, "eav-dialog-header"], [1, "eav-dialog-header__title"], ["mat-icon-button", "", "tippy", "Close dialog"], [1, "eav-dialog-content"], ["label", "Choose Scenario", 3, "valueChange", "items", "value"], ["dynamicHeight", "", "color", "accent", 1, "mat-tab-group-fit-height", "mat-tab-group-fancy-scrollbar", "default-fonts"], ["class", "mat-tab-label-box", "tippy", "Introduction", 4, "matTabLabel"], [3, "data"], ["class", "mat-tab-label-box", 3, "tippy", 4, "matTabLabel"], [1, "params-form"], ["color", "accent", 1, "eav-mat-form-field"], ["matInput", "", "placeholder", "Default", 3, "input", "value"], ["matInput", "", "placeholder", "?id=27", 3, "input", "value"], ["class", "mat-tab-label-box", "tippy", "Permissions", 4, "matTabLabel"], ["class", "mat-tab-label-box", "tippy", "HTTP headers and auto", 4, "matTabLabel"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], ["tippy", "Introduction", 1, "mat-tab-label-box"], [1, "mat-tab-label-box", 3, "tippy"], ["tippy", "Permissions", 1, "mat-tab-label-box"], ["tippy", "HTTP headers and auto", 1, "mat-tab-label-box"]],
    template: function DevRestQueryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, DevRestQueryComponent_Conditional_0_Template, 34, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵconditional"](0, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](1, 1, ctx.viewModel$)) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_15__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterOutlet, _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_13__.SelectorWithHelpComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabGroup, _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_12__.DevRestQueryIntroductionComponent, _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_11__.DevRestTabIntroductionComponent, _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_10__.DevRestTabExamplesComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInput, _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_9__.DevRestUrlsAndCodeComponent, _tab_permissions_tab_permissions_component__WEBPACK_IMPORTED_MODULE_8__.DevRestTabPermissionsComponent, _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_7__.DevRestHttpHeadersComponent, _angular_common__WEBPACK_IMPORTED_MODULE_30__.AsyncPipe],
    styles: ["[_nghost-%COMP%]     code, code[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n\n.rest-urls-accordion[_ngcontent-%COMP%] {\n  display: block;\n  margin: 8px;\n}\n\n.rest-urls-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.code-example[_ngcontent-%COMP%] {\n  position: relative;\n}\n.code-example__text[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n.code-example__copy[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.params-form[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 600px;\n}\n.params-form[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.form-with-textarea[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2Rldi1yZXN0L2Rldi1yZXN0LWFsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7RUFHRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxnQkFBQTtBQUZKOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZSBmaXJzdCBvbmUgaXMgbmVlZGVkIHNvIDxjb2RlPiBjb2xvcmluZyB3b3JrcyBpbiBkeW5hbWljIGluamVjdGVkIGh0bWwgKHRpcHMgZXRjLilcclxuOmhvc3QgOjpuZy1kZWVwIGNvZGUsXHJcbmNvZGUsXHJcbnByZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG59XHJcblxyXG4ucmVzdC11cmxzLWFjY29yZGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5yZXN0LXVybHMtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvZGUtZXhhbXBsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmX190ZXh0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAmX19jb3B5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtcy1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcblxyXG4gIC5tYXQtbWRjLWZvcm0tZmllbGQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0td2l0aC10ZXh0YXJlYSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=projects_eav-ui_src_app_dev-rest_query_query_component_ts.js.map