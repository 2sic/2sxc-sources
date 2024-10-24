"use strict";
(self["webpackChunkeav_ui"] = self["webpackChunkeav_ui"] || []).push([["default-projects_eav-ui_src_app_dev-rest_index_ts"],{

/***/ 3649:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/base-template-vars.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 34339:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/data/data-template-vars.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 91091:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/dev-rest-base.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevRestBase: () => (/* binding */ DevRestBase)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 71870);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 13488);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ 88692);
/* harmony import */ var _app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-administration/services/dialog-config-app.service */ 64699);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../permissions */ 4096);
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);
/* harmony import */ var _shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/routing/dialog-routing.service */ 60852);
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/context */ 68873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @2sic.com/sxc-angular */ 81955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);

















// tslint:disable-next-line:component-class-suffix
class DevRestBase {
  #dialogConfigSvc;
  #dialogRouter;
  // Shared Constructor for things all the Dev-REST things will need
  constructor( /** Context for this dialog. Used for appId, zoneId, tabId, etc. */
  context, dialog, /** sxc-angular context. Used to resolve urls */
  dnnContext, router, route, permissionsService) {
    this.context = context;
    this.dialog = dialog;
    this.dnnContext = dnnContext;
    this.router = router;
    this.route = route;
    this.permissionsService = permissionsService;
    this.#dialogConfigSvc = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_app_administration_services_dialog_config_app_service__WEBPACK_IMPORTED_MODULE_2__.DialogConfigAppService);
    this.#dialogRouter = (0,_core__WEBPACK_IMPORTED_MODULE_1__.transient)(_shared_routing_dialog_routing_service__WEBPACK_IMPORTED_MODULE_5__.DialogRoutingService);
    /** List of scenarios */
    this.scenarios = ___WEBPACK_IMPORTED_MODULE_0__.AllScenarios;
    /** Currently selected scenario */
    this.scenario$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(___WEBPACK_IMPORTED_MODULE_0__.AllScenarios[0]);
    // Build Dialog Settings Stream
    // Note: this is probably already loaded somewhere, so I'm not sure why we're getting it again
    this.dialogSettings$ = this.#dialogConfigSvc.getCurrent$();
  }
  buildPermissionStream(routeTargetName) {
    // Build Permissions Stream
    // This is triggered on start and everything a sub-dialog closes
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
    // fire on Start and when sub-dialog closes
    this.#dialogRouter.childDialogClosed$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)([])), this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(pm => pm.get(routeTargetName)))]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([_, permissionTarget]) => {
      // Permissions are always GUID based, so in this edge-case Content Types also pretend to be Entities
      // It's not ideal, but it can't be changed with reasonable effort, so leave this as is
      return this.permissionsService.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_4__.eavConstants.metadata.entity.keyType, permissionTarget);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.share)());
  }
  rootBasedOnScenario(root, scenario) {
    const domainPrefix = document.location.protocol + '//' + document.location.host;
    return scenario.useVirtual ? root : (scenario.inSameSite ? '' : domainPrefix) + this.dnnContext.$2sxc.http.apiUrl(root);
  }
  buildBaseViewModel(name, identity, diag, permissions, root, scenario) {
    return {
      apiCalls: null,
      name,
      currentScenario: scenario,
      folder: encodeURI(diag.Context.App.Folder),
      moduleId: this.context.moduleId,
      root,
      scenario,
      permissions,
      permissionsHasAnonymous: permissions?.filter(p => p.Condition.indexOf('.Anonymous') > 0).length > 0,
      permissionTarget: identity
    };
  }
  changeScenario(scenario) {
    this.scenario$.next(scenario);
  }
  ngOnDestroy() {
    this.scenario$.complete();
  }
  closeDialog() {
    this.dialog.close();
  }
  static {
    this.ɵfac = function DevRestBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DevRestBase)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_context__WEBPACK_IMPORTED_MODULE_6__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_2sic_com_sxc_angular__WEBPACK_IMPORTED_MODULE_15__.Context), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_permissions__WEBPACK_IMPORTED_MODULE_3__.PermissionsService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: DevRestBase,
      selectors: [["app-dev-rest-base"]],
      decls: 0,
      vars: 0,
      template: function DevRestBase_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 71075:
/*!***************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/examples/api-call.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiCall: () => (/* binding */ ApiCall)
/* harmony export */ });
class ApiCall {
  constructor(virtual, verb, url, teaser, instructions, enableButton, code = [], browseUrl = null) {
    this.virtual = virtual;
    this.verb = verb;
    this.url = url;
    this.teaser = teaser;
    this.instructions = instructions;
    this.enableButton = enableButton;
    this.code = code;
    this.browseUrl = browseUrl;
  }
}

/***/ }),

/***/ 24544:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/examples/code-sample.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeSample: () => (/* binding */ CodeSample)
/* harmony export */ });
class CodeSample {
  constructor(title, description, code, runInConsole, hints = []) {
    this.title = title;
    this.description = description;
    this.code = code;
    this.runInConsole = runInConsole;
    this.hints = hints;
    // the code often has a leading new-line - so we'll trim this
    this.code = this.code.trim();
  }
}

/***/ }),

/***/ 4237:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/examples/generate-samples.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateApiCalls: () => (/* binding */ generateApiCalls)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);

// tslint:disable: curly
function generateApiCalls($2sxc, scenario, context, root, id) {
  const virtual = root[0] !== '/' && !root.startsWith('http');
  root = root + '/';
  const withId = root + id;
  const contextParams = virtual ? `?PageId=${context.tabId}&ModuleId=${context.moduleId}` : '';
  const directUrl = $2sxc.http.apiUrl(root) + contextParams;
  const directWId = $2sxc.http.apiUrl(withId) + contextParams;
  return [new ___WEBPACK_IMPORTED_MODULE_0__.ApiCall(virtual, 'GET', root, 'read all', 'Read list of all items', true, snippetsGet(scenario, root, context), directUrl), new ___WEBPACK_IMPORTED_MODULE_0__.ApiCall(virtual, 'GET', withId, 'read one', 'Read a single item #' + id, true, snippetsGet(scenario, withId, context), directWId), new ___WEBPACK_IMPORTED_MODULE_0__.ApiCall(virtual, 'POST', root, 'create', 'Create an item', false, snippetsCreate(scenario, root, context.moduleId)), new ___WEBPACK_IMPORTED_MODULE_0__.ApiCall(virtual, 'POST', withId, 'update', 'Update the item #' + id, false, snippetsUpdate(scenario, withId, context.moduleId)), new ___WEBPACK_IMPORTED_MODULE_0__.ApiCall(virtual, 'DELETE', withId, 'delete', 'Delete item #' + id, false, snippetsDelete(scenario, withId, context.moduleId))];
}
function snippetsGet(scenario, path, context) {
  const moduleId = context.moduleId;
  const virtual = path[0] !== '/';
  const list = [];
  const pathWithContext = `${path}?PageId=${context.tabId}&ModuleId=${moduleId}`;
  if (scenario.inSameContext) list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Example with global $2sxc and event-context', 'This example finds the context information from the HTML where an action started.', `
<button onclick="$2sxc(this).webApi.fetchJson('${path}').then(data => console.log(data))">
  get it
</button>`, false, [___WEBPACK_IMPORTED_MODULE_0__.hint$2sxc]));
  if (scenario.in2sxc) list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample(`Example with global $2sxc and a Module-Id ${moduleId}`, `This is how you get the context when your code doesn't start with a DOM context, so you need the moduleId.`, `
// get the sxc-controller for this module
var sxc = $2sxc(${moduleId});
// now get the data in the promise
sxc.webApi.fetchJson('${path}')
  .then(data => {
    console.log(data)
  });`, false, [___WEBPACK_IMPORTED_MODULE_0__.hint$2sxc]), new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample(`Same example as one-liner`, 'This is the same as above, but as a one-liner so you can run it directly in the F12 console right now.', `$2sxc(${moduleId}).webApi.get('${path}').then(data => console.log('just got:', data));`, true));
  if (scenario.in2sxc && scenario.inSameContext) list.push(new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Example where you get the Module-Id from Razor', `This example doesn't use a fixed moduleId but let's the Razor add the current moduleId when the page is rendered.`, `
// this will be replaced on the server with the ID
var moduleId = @Dnn.Module.ModuleID;
var sxc = $2sxc(moduleId);
var promise = sxc.webApi.fetchJson('${path}');`, false, [___WEBPACK_IMPORTED_MODULE_0__.hint$2sxc]));
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
/** Snippets for basic Post-Create */
function snippetsCreate(scenario, path, moduleId) {
  const showWarning = !scenario.inSameContext;
  return [new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Basic Example', `This example uses the ModuleId to get the context information.
To see other ways to get the context and headers, check out the GET examples.
Note that this snippet doesn't use real names of properties to add.`, `// get the sxc-controller for this module
var sxc = $2sxc(${moduleId});

// The object we'll send to get created. It's just a simple object with properties
var newThing = {
  property1: 17,
  property2: 'Some Text',
  // related items like tags can be assigned with IDs
  // which you would usually get from somewhere first
  propertyPointingToOtherIds: [74,50203],
};

// now create it and get the id back
sxc.webApi.fetchJson('${path}', newThing)
  .then(data => {
    console.log('Got this ID information: ', data)
  });`, false, showWarning ? [___WEBPACK_IMPORTED_MODULE_0__.warningSimpleSampleOnly] : [])];
}
/** Snippets for basic Post-Update */
function snippetsUpdate(scenario, path, moduleId) {
  const showWarning = !scenario.inSameContext;
  return [new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Basic Example', `This example uses the ModuleId to get the context information.
To see other ways to get the context and headers, check out the GET examples.
Note that this snippet doesn't use real names of properties to add.`, `// get the sxc-controller for this module
var sxc = $2sxc(${moduleId});

// The object we'll send to update the data. It's just a simple object with properties
var updateProperty1And2 = {
  property1: 2742,
  property2: 'Changed Text',
};

// now update the item
sxc.webApi.fetchJson('${path}', updateProperty1And2)
  .then(data => {
    console.log('Update completed', data)
  });`, false, showWarning ? [___WEBPACK_IMPORTED_MODULE_0__.warningSimpleSampleOnly] : [])];
}
/** Snippets for basic Post-Update */
function snippetsDelete(scenario, path, moduleId) {
  const showWarning = !scenario.inSameContext;
  return [new ___WEBPACK_IMPORTED_MODULE_0__.CodeSample('Basic Example', `This example uses the ModuleId to get the context information.
To see other ways to get the context and headers, check out the GET examples.
Note that this snippet doesn't use real names of properties to add.`, `// get the sxc-controller for this module
var sxc = $2sxc(${moduleId});

// delete the item
sxc.webApi.fetchJson('${path}')
  .then(data => {
    console.log('Delete completed', data)
  });`, false, showWarning ? [___WEBPACK_IMPORTED_MODULE_0__.warningSimpleSampleOnly] : [])];
}

/***/ }),

/***/ 13722:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/examples/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiCall: () => (/* reexport safe */ _api_call__WEBPACK_IMPORTED_MODULE_1__.ApiCall),
/* harmony export */   CodeSample: () => (/* reexport safe */ _code_sample__WEBPACK_IMPORTED_MODULE_2__.CodeSample),
/* harmony export */   Hint: () => (/* reexport safe */ _info_box_hint__WEBPACK_IMPORTED_MODULE_0__.Hint),
/* harmony export */   generateApiCalls: () => (/* reexport safe */ _generate_samples__WEBPACK_IMPORTED_MODULE_3__.generateApiCalls),
/* harmony export */   hint$2sxc: () => (/* binding */ hint$2sxc),
/* harmony export */   infoBoxIconMap: () => (/* reexport safe */ _info_box_hint__WEBPACK_IMPORTED_MODULE_0__.infoBoxIconMap),
/* harmony export */   warningExternal: () => (/* binding */ warningExternal),
/* harmony export */   warningSimpleSampleOnly: () => (/* binding */ warningSimpleSampleOnly)
/* harmony export */ });
/* harmony import */ var _info_box_hint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../info-box/hint */ 99852);
/* harmony import */ var _api_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-call */ 71075);
/* harmony import */ var _code_sample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-sample */ 24544);
/* harmony import */ var _generate_samples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-samples */ 4237);





const hint$2sxc = new _info_box_hint__WEBPACK_IMPORTED_MODULE_0__.Hint('tip', `The <code>$2sxc</code> is a helper JS from 2sxc. It's always included for super-users (hosts).
But if you need normal visitors to use the API, you must request it in your Razor using @Edit.Enable(...).
<a href="https://go.2sxc.org/js-2sxc-root" target="_blank">see docs</a>`);
const warningSimpleSampleOnly = new _info_box_hint__WEBPACK_IMPORTED_MODULE_0__.Hint('warning', `WARNING: We only prepared the basic example running in the same app. You can of course also run this elsewhere,
but you'll have to compare it with the GET examples to be sure you have the right headers etc. `, '');
const warningExternal = new _info_box_hint__WEBPACK_IMPORTED_MODULE_0__.Hint('alert', 'IMPORTANT: This will only work if you set anonymous permissions on the content-type.');

/***/ }),

/***/ 10261:
/*!************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/go-to-dev-rest.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToDevRest: () => (/* binding */ GoToDevRest)
/* harmony export */ });
const base = 'restapi';
class GoToDevRest {
  static {
    this.routeQuery = 'restapiquery';
  }
  static {
    this.routeData = 'restapidata';
  }
  static {
    this.routeWebApi = 'restapiwebapi';
  }
  static {
    this.navLabel = 'Rest-Api';
  }
  static {
    this.icon = 'code-curly';
  }
  static {
    this.routeDataDefinition = {
      name: GoToDevRest.navLabel,
      icon: GoToDevRest.icon,
      svgIcon: true,
      path: GoToDevRest.routeData
    };
  }
  static {
    this.routeQueryDefinition = {
      name: GoToDevRest.navLabel,
      icon: GoToDevRest.icon,
      svgIcon: true,
      path: GoToDevRest.routeQuery
    };
  }
  static {
    this.routeWebApiDefinition = {
      name: GoToDevRest.navLabel,
      icon: GoToDevRest.icon,
      svgIcon: true,
      path: GoToDevRest.routeWebApi
    };
  }
  static {
    this.route = {
      path: base,
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_dev-rest_dev-rest_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dev-rest.routing */ 63602)).then(m => m.devRestRoutes)
    };
  }
  // todo: setup not quite elegant, using relative route. Should be refactored to use absolute route
  /** Route to Data REST - for use in Admin-List */
  static getUrlData(contentType) {
    return `../../${GoToDevRest.routeData}/${contentType.StaticName}`;
    // return `${base}/data/${contentType.StaticName}`;
  }
  /** Route to Query REST in dialog mode - for visual query */
  static getUrlQueryDialog(guid) {
    return `${base}/query/${guid}`;
  }
  // todo: setup not quite elegant, using relative route. Should be refactored to use absolute route
  /** Route to Query in Admin UI - for use in Admin-List */
  static getUrlQueryInAdmin(guid) {
    return `../${GoToDevRest.routeQuery}/${guid}`;
  }
}

/***/ }),

/***/ 9172:
/*!*****************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/help-popup/help-popup.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpPopupComponent: () => (/* binding */ HelpPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);








function HelpPopupComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 5)(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.dialogData.notes);
  }
}
class HelpPopupComponent {
  constructor(dialog, dialogData) {
    this.dialog = dialog;
    this.dialogData = dialogData;
  }
  ngOnInit() {}
  closeDialog() {
    this.dialog.close();
  }
  static {
    this.ɵfac = function HelpPopupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HelpPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HelpPopupComponent,
      selectors: [["app-help-popup"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 3,
      consts: [[1, "eav-dialog", "eav-no-scrollbar"], ["mat-mdc-dialog-title", ""], [1, "dialog-title-box"], ["mat-icon-button", "", "tippy", "Close dialog", 3, "click"], [1, "eav-dialog-content"], [1, "dialog-description"]],
      template: function HelpPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HelpPopupComponent_Template_button_click_5_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HelpPopupComponent_Conditional_11_Template, 3, 1, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dialogData.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.dialogData.body, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.dialogData.notes ? 11 : -1);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 13488:
/*!***************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllScenarios: () => (/* reexport safe */ _scenarios__WEBPACK_IMPORTED_MODULE_3__.AllScenarios),
/* harmony export */   ApiCall: () => (/* reexport safe */ _examples__WEBPACK_IMPORTED_MODULE_4__.ApiCall),
/* harmony export */   CodeSample: () => (/* reexport safe */ _examples__WEBPACK_IMPORTED_MODULE_4__.CodeSample),
/* harmony export */   DevRestBase: () => (/* reexport safe */ _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_0__.DevRestBase),
/* harmony export */   GoToDevRest: () => (/* reexport safe */ _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__.GoToDevRest),
/* harmony export */   HelpPopupComponent: () => (/* reexport safe */ _help_popup_help_popup_component__WEBPACK_IMPORTED_MODULE_7__.HelpPopupComponent),
/* harmony export */   Hint: () => (/* reexport safe */ _examples__WEBPACK_IMPORTED_MODULE_4__.Hint),
/* harmony export */   SelectorWithHelpComponent: () => (/* reexport safe */ _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_8__.SelectorWithHelpComponent),
/* harmony export */   generateApiCalls: () => (/* reexport safe */ _examples__WEBPACK_IMPORTED_MODULE_4__.generateApiCalls),
/* harmony export */   hint$2sxc: () => (/* reexport safe */ _examples__WEBPACK_IMPORTED_MODULE_4__.hint$2sxc),
/* harmony export */   infoBoxIconMap: () => (/* reexport safe */ _examples__WEBPACK_IMPORTED_MODULE_4__.infoBoxIconMap),
/* harmony export */   warningExternal: () => (/* reexport safe */ _examples__WEBPACK_IMPORTED_MODULE_4__.warningExternal),
/* harmony export */   warningSimpleSampleOnly: () => (/* reexport safe */ _examples__WEBPACK_IMPORTED_MODULE_4__.warningSimpleSampleOnly)
/* harmony export */ });
/* harmony import */ var _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev-rest-base.component */ 91091);
/* harmony import */ var _base_template_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-template-vars */ 3649);
/* harmony import */ var _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./go-to-dev-rest */ 10261);
/* harmony import */ var _scenarios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenarios */ 29904);
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples */ 13722);
/* harmony import */ var _data_data_template_vars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/data-template-vars */ 34339);
/* harmony import */ var _query_query_template_vars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query/query-template-vars */ 67753);
/* harmony import */ var _help_popup_help_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help-popup/help-popup.component */ 9172);
/* harmony import */ var _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selector-with-help/selector-with-help.component */ 1708);










/***/ }),

/***/ 99852:
/*!***********************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/info-box/hint.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hint: () => (/* binding */ Hint),
/* harmony export */   infoBoxIconMap: () => (/* binding */ infoBoxIconMap)
/* harmony export */ });
const infoBoxIconMap = {
  alert: 'warning',
  info: 'menu_book',
  tip: 'star',
  warning: 'warning'
};
class Hint {
  constructor(type, message, link = '') {
    this.type = type;
    this.message = message;
    this.link = link;
    this.icon = infoBoxIconMap[type];
  }
}

/***/ }),

/***/ 67753:
/*!***********************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/query/query-template-vars.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 88593:
/*!*********************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/scenarios/all-scenarios.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllScenarios: () => (/* binding */ AllScenarios)
/* harmony export */ });
const AllScenarios = [{
  key: 'internal',
  in2sxc: true,
  useVirtual: true,
  inSameSite: true,
  inSameContext: true,
  name: 'JS in this App on a page (easiest)',
  description: `Internal access means that your JS code is running in a 2sxc-module on a DNN-page.
    This is the default access.
    In this scenario, various headers are included in the request,
    incl. the module it\'s coming from, which allows various automatic things to happen.
    This results in simpler REST requests.`,
  notes: `This mode makes it easy to re-distribute your app, as you can perform API calls relative to the module that\'s hosting it.
    This means, that even if you export/import the app to another system, the API-calls stay the same.`
}, {
  key: 'internal2',
  in2sxc: true,
  useVirtual: true,
  inSameSite: true,
  inSameContext: false,
  name: 'JS in a DIFFERENT 2sxc App on the SAME site',
  description: `When using JS from another app, you cannot auto-detect of the app, so the path is slightly different.`,
  notes: ''
},
// {
//   key: 'external1',
//   in2sxc: false,
//   useVirtual: false,
//   inSameSite: false,
//   inSameContext: false,
//   name: 'JS from a DIFFERENT site',
// tslint:disable-next-line:max-line-length
//   description: `When coding from another site, the path needs to be complete (not virtual), since auto-detection of site etc. can't work.
//   In addition, most DNN-headers cause trouble because they tell the server a context which isn't actually true. `,
//   notes: '',
// },
{
  key: 'external',
  in2sxc: false,
  useVirtual: false,
  inSameSite: false,
  inSameContext: false,
  needsAnonymous: true,
  name: 'External (other website, mobile device, etc.)',
  description: `External access means that the JS code could be on another page / module in DNN (which is not the same app),
    or it could be coming from a mobile App, or another website altogether.
    In this case, automatic app-detection can\'t work, as various headers are missing, and you must access the endpoint more explicitly.`,
  notes: `This mode requires you to define the exact, full URL, so if you create copies of this app on another system,
    the URL must be updated to access that system specifically.
    Note that our samples are in JS, you'll have to figure it out yourself for other programming languages.`
}];

/***/ }),

/***/ 29904:
/*!*************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/scenarios/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllScenarios: () => (/* reexport safe */ _all_scenarios__WEBPACK_IMPORTED_MODULE_0__.AllScenarios)
/* harmony export */ });
/* harmony import */ var _all_scenarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-scenarios */ 88593);
/* harmony import */ var _scenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenario */ 5552);



/***/ }),

/***/ 5552:
/*!****************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/scenarios/scenario.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1708:
/*!*********************************************************************************************!*\
  !*** ./projects/eav-ui/src/app/dev-rest/selector-with-help/selector-with-help.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorWithHelpComponent: () => (/* binding */ SelectorWithHelpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 13488);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/tippy.directive */ 34601);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
















function SelectorWithHelpComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
  }
}
class SelectorWithHelpComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {}
  selectionChange(key) {
    this.value = key;
    const scenario = this.items.find(item => item.key === this.value);
    this.valueChange.emit(scenario);
  }
  showHelp() {
    const scenario = this.items.find(item => item.key === this.value);
    const dialogData = {
      name: scenario.name,
      body: scenario.description,
      notes: scenario.notes
    };
    this.dialog.open(___WEBPACK_IMPORTED_MODULE_0__.HelpPopupComponent, {
      autoFocus: false,
      data: dialogData,
      width: '500px'
    });
  }
  static {
    this.ɵfac = function SelectorWithHelpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectorWithHelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SelectorWithHelpComponent,
      selectors: [["app-selector-with-help"]],
      inputs: {
        label: "label",
        items: "items",
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 2,
      consts: [[1, "selector"], ["color", "accent", 1, "selector__dropdown", "eav-mat-form-field"], [3, "selectionChange", "value"], [3, "value"], ["mat-icon-button", "", "tippy", "Show help", 3, "click"]],
      template: function SelectorWithHelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function SelectorWithHelpComponent_Template_mat_select_selectionChange_4_listener($event) {
            return ctx.selectionChange($event.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](5, SelectorWithHelpComponent_For_6_Template, 2, 2, "mat-option", 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectorWithHelpComponent_Template_button_click_7_listener() {
            return ctx.showHelp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "help_outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.items);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _shared_directives_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
      styles: [".selector[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n}\n.selector__dropdown[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL2Vhdi11aS9zcmMvYXBwL2Rldi1yZXN0L2hlYWRlci1zZWxlY3Rvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdG9yIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJl9fZHJvcGRvd24ge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 72437:
/*!******************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/go-to-permissions.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToPermissions: () => (/* binding */ GoToPermissions)
/* harmony export */ });
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/eav.constants */ 50052);

class GoToPermissions {
  static {
    this.route = {
      path: 'permissions/:targetType/:keyType/:key',
      loadChildren: () => __webpack_require__.e(/*! import() */ "projects_eav-ui_src_app_permissions_permissions_routing_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./permissions.routing */ 43516)).then(m => m.permissionRoutes),
      // loadChildren: () => import('./permissions.module').then(m => m.PermissionsModule),
      data: {
        title: 'Permissions'
      }
    };
  }
  static getUrl(targetType, keyType, key) {
    return `permissions/${targetType}/${keyType}/${key}`;
  }
  static getUrlApp(appId) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.app.keyType, appId.toString());
  }
  static getUrlAttribute(id) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.attribute.keyType, id.toString());
  }
  /** For historic reasons, it's the same as Entity */
  static getUrlContentType(guid) {
    return this.getUrlEntity(guid);
  }
  static getUrlEntity(guid) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.entity.keyType, guid);
  }
  static getUrlLanguage(id) {
    return this.getUrl(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.language.targetType, _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_0__.eavConstants.metadata.language.keyType, id);
  }
}

/***/ }),

/***/ 4096:
/*!******************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoToPermissions: () => (/* reexport safe */ _go_to_permissions__WEBPACK_IMPORTED_MODULE_0__.GoToPermissions),
/* harmony export */   MetadataService: () => (/* reexport safe */ _services_metadata_service__WEBPACK_IMPORTED_MODULE_5__.MetadataService),
/* harmony export */   PermissionsComponent: () => (/* reexport safe */ _permissions_component__WEBPACK_IMPORTED_MODULE_4__.PermissionsComponent),
/* harmony export */   PermissionsService: () => (/* reexport safe */ _services_permissions_service__WEBPACK_IMPORTED_MODULE_6__.PermissionsService),
/* harmony export */   permissionRoutes: () => (/* reexport safe */ _permissions_routing__WEBPACK_IMPORTED_MODULE_3__.permissionRoutes),
/* harmony export */   permissionsDialog: () => (/* reexport safe */ _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_2__.permissionsDialog)
/* harmony export */ });
/* harmony import */ var _go_to_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./go-to-permissions */ 72437);
/* harmony import */ var _models_permission_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/permission.model */ 3791);
/* harmony import */ var _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions-dialog.config */ 42365);
/* harmony import */ var _permissions_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions.routing */ 43516);
/* harmony import */ var _permissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions.component */ 7549);
/* harmony import */ var _services_metadata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/metadata.service */ 80401);
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/permissions.service */ 44900);





// export * from './permissions.module'; // TOOD:: für was wird der index verwendet?



/***/ }),

/***/ 3791:
/*!************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/models/permission.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 42365:
/*!**************************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions-dialog.config.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   permissionsDialog: () => (/* binding */ permissionsDialog)
/* harmony export */ });
/* harmony import */ var C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

const permissionsDialog = {
  name: 'SET_PERMISSIONS_DIALOG',
  initContext: true,
  panelSize: 'large',
  panelClass: null,
  getComponent() {
    return (0,C_Projects_2sxc_eav_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        PermissionsComponent
      } = yield Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_directives_tippy_directive_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_radio_mjs"), __webpack_require__.e("default-projects_eav-ui_src_app_shared_ag-grid_column-definitions_ts-projects_eav-ui_src_app_-3cb379"), __webpack_require__.e("default-projects_eav-ui_src_app_permissions_permissions_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./permissions.component */ 7549));
      return PermissionsComponent;
    })();
  }
};

/***/ }),

/***/ 43516:
/*!********************************************************************!*\
  !*** ./projects/eav-ui/src/app/permissions/permissions.routing.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   permissionRoutes: () => (/* binding */ permissionRoutes)
/* harmony export */ });
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ 85544);
/* harmony import */ var _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions-dialog.config */ 42365);
/* harmony import */ var _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit/edit.routing */ 90390);



const permissionRoutes = [{
  path: '',
  component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_0__.DialogEntryComponent,
  data: {
    dialog: _permissions_dialog_config__WEBPACK_IMPORTED_MODULE_1__.permissionsDialog
  },
  children: _edit_edit_routing__WEBPACK_IMPORTED_MODULE_2__.EditRoutes
}];

/***/ })

}]);
//# sourceMappingURL=default-projects_eav-ui_src_app_dev-rest_index_ts.js.map