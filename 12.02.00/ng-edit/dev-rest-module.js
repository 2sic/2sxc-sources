(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-rest-module"],{

/***/ "2X2b":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/api/permissions/permissions.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DevRestApiPermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestApiPermissionsComponent", function() { return DevRestApiPermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_permissions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./permissions.component.html */ "Wi3e");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "DR3G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ "1HxE");
/* harmony import */ var _action_params_true_false_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-params/true-false.component */ "G+q3");






var DevRestApiPermissionsComponent = /** @class */ (function () {
    function DevRestApiPermissionsComponent() {
    }
    DevRestApiPermissionsComponent.prototype.ngOnInit = function () {
        this.gridModules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_2__["AllCommunityModules"];
        this.booleanColumnDef = {
            headerClass: 'dense', width: 80, cellClass: 'no-outline', cellRenderer: 'trueFalseComponent',
            cellRendererParams: { reverse: false },
        };
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__["defaultGridOptions"]), { frameworkComponents: {
                trueFalseComponent: _action_params_true_false_component__WEBPACK_IMPORTED_MODULE_5__["TrueFalseComponent"],
            }, columnDefs: [
                {
                    headerName: 'Requirement', field: 'requirement', flex: 2, minWidth: 200, cellClass: 'no-outline',
                    cellRenderer: function (params) { return params.value; },
                },
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.booleanColumnDef), { headerName: 'Class', field: 'class' }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.booleanColumnDef), { headerName: 'Method', field: 'method' }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.booleanColumnDef), { headerName: 'Effective', field: 'effective' }),
                { headerName: 'Comments', field: 'comments', flex: 3, minWidth: 250, cellClass: 'no-outline' },
            ] });
    };
    DevRestApiPermissionsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.data) {
            this.buildGridItems();
        }
    };
    DevRestApiPermissionsComponent.prototype.buildGridItems = function () {
        this.gridItems = [
            {
                requirement: 'Ignore All Security Checks <code>[AllowAnonymous]</code>',
                class: this.data.details.security.ignoreSecurity,
                method: this.data.selected.security.ignoreSecurity,
                effective: this.data.selected.mergedSecurity.ignoreSecurity,
                comments: 'If this is set all other security checks are skipped',
            },
            {
                requirement: 'Allow Anonymous Use',
                class: this.data.details.security.allowAnonymous,
                method: this.data.selected.security.allowAnonymous,
                effective: this.data.selected.mergedSecurity.allowAnonymous,
                comments: '',
            },
            {
                requirement: 'Require Verification Token',
                class: this.data.details.security.requireVerificationToken,
                method: this.data.selected.security.requireVerificationToken,
                effective: this.data.selected.mergedSecurity.requireVerificationToken,
                comments: '',
            },
            {
                requirement: 'Allow users with <strong>view</strong> permissions',
                class: this.data.details.security.view,
                method: this.data.selected.security.view,
                effective: this.data.selected.mergedSecurity.view,
                comments: '',
            },
            {
                requirement: 'Allow users with <strong>edit</strong> permissions',
                class: this.data.details.security.edit,
                method: this.data.selected.security.edit,
                effective: this.data.selected.mergedSecurity.edit,
                comments: '',
            },
            {
                requirement: 'Allow users with <strong>admin</strong> permissions',
                class: this.data.details.security.admin,
                method: this.data.selected.security.admin,
                effective: this.data.selected.mergedSecurity.admin,
                comments: '',
            },
            {
                requirement: 'Allow users with <strong>super-user</strong> permissions',
                class: this.data.details.security.superUser,
                method: this.data.selected.security.superUser,
                effective: this.data.selected.mergedSecurity.superUser,
                comments: '',
            },
            {
                requirement: 'Require Context',
                class: this.data.details.security.requireContext,
                method: this.data.selected.security.requireContext,
                effective: this.data.selected.mergedSecurity.requireContext,
                comments: 'If required, the context must be included - see also headers',
            },
        ];
        this.gridHeight = 33 + this.gridItems.length * 48 + "px";
    };
    DevRestApiPermissionsComponent.ctorParameters = function () { return []; };
    DevRestApiPermissionsComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    DevRestApiPermissionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dev-api-permissions',
            template: _raw_loader_permissions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DevRestApiPermissionsComponent);
    return DevRestApiPermissionsComponent;
}());



/***/ }),

/***/ "3M+c":
/*!*****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/api/introduction/introduction.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DevRestApiIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestApiIntroductionComponent", function() { return DevRestApiIntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_introduction_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./introduction.component.html */ "79Re");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ "LBgr");




var DevRestApiIntroductionComponent = /** @class */ (function () {
    function DevRestApiIntroductionComponent() {
        /** List of scenarios */
        this.scenarios = ___WEBPACK_IMPORTED_MODULE_3__["AllScenarios"];
    }
    DevRestApiIntroductionComponent.prototype.ngOnInit = function () {
    };
    DevRestApiIntroductionComponent.ctorParameters = function () { return []; };
    DevRestApiIntroductionComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    DevRestApiIntroductionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dev-api-introduction',
            template: _raw_loader_introduction_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DevRestApiIntroductionComponent);
    return DevRestApiIntroductionComponent;
}());



/***/ }),

/***/ "5qVX":
/*!*****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/info-box/info-box.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InfoBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBoxComponent", function() { return InfoBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_info_box_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./info-box.component.html */ "nVbN");
/* harmony import */ var _info_box_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-box.component.scss */ "mB6Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hint */ "maSM");





var InfoBoxComponent = /** @class */ (function () {
    function InfoBoxComponent() {
    }
    InfoBoxComponent.prototype.getIcon = function () {
        return _hint__WEBPACK_IMPORTED_MODULE_4__["infoBoxIconMap"][this.type];
    };
    InfoBoxComponent.ctorParameters = function () { return []; };
    InfoBoxComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    InfoBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-info-box',
            template: _raw_loader_info_box_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_info_box_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], InfoBoxComponent);
    return InfoBoxComponent;
}());



/***/ }),

/***/ "79Re":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/api/introduction/introduction.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  To learn more about WebAPIs you may want to read these <a href=\"https://docs.2sxc.org/index.html\" target=\"_blank\">docs</a>:\n</p>\n<ul>\n  <li><a href=\"https://docs.2sxc.org/web-api/index.html\" target=\"_blank\">WebAPIs in 2sxc</a></li>\n  <li><a href=\"https://docs.2sxc.org/web-api/query-rest-web-api.html\" target=\"_blank\">Query REST API</a></li>\n</ul>\n");

/***/ }),

/***/ "8Zjn":
/*!***********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/tab-headers/tab-headers.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DevRestHttpHeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestHttpHeadersComponent", function() { return DevRestHttpHeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_headers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-headers.component.html */ "ftsI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var DevRestHttpHeadersComponent = /** @class */ (function () {
    function DevRestHttpHeadersComponent() {
    }
    DevRestHttpHeadersComponent.prototype.ngOnInit = function () {
    };
    DevRestHttpHeadersComponent.ctorParameters = function () { return []; };
    DevRestHttpHeadersComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    DevRestHttpHeadersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dev-rest-tab-headers',
            template: _raw_loader_tab_headers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DevRestHttpHeadersComponent);
    return DevRestHttpHeadersComponent;
}());



/***/ }),

/***/ "9BEC":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/data/data.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"templateVars$ | async as data\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>Using REST with Data of <code>{{ data.name }}</code></div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <app-selector-with-help label=\"Choose Scenario\" [items]=\"scenarios\" [value]=\"data.scenario.key\"\r\n    (valueChange)=\"changeScenario($event)\">\r\n  </app-selector-with-help>\r\n\r\n  <mat-tab-group dynamicHeight color=\"accent\"\r\n    class=\"mat-tab-group-fit-height mat-tab-group-fancy-scrollbar default-fonts\">\r\n\r\n    <!-- Introduction -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Introduction\">\r\n        <mat-icon>emoji_objects</mat-icon>\r\n        <span>Introduction</span>\r\n      </div>\r\n      <app-dev-data-introduction [data]=\"data\"></app-dev-data-introduction>\r\n\r\n      <app-dev-rest-tab-introduction [data]=\"data\"></app-dev-rest-tab-introduction>\r\n    </mat-tab>\r\n\r\n    <!-- Absolute / Virtual URLs -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\"\r\n        [matTooltip]=\"(data.scenario.useVirtual ? 'Virtual ' : 'Absolute ') + 'REST URLs'\">\r\n        <mat-icon svgIcon=\"code-curly\"></mat-icon>\r\n        <span>Call {{ data.scenario.useVirtual ? 'Virtual' : 'Absolute' }} REST URLs</span>\r\n      </div>\r\n\r\n      <app-dev-rest-tab-examples-intro [data]=\"data\"></app-dev-rest-tab-examples-intro>\r\n\r\n      <!-- REST Tab showing the urls and code snippets -->\r\n      <app-dev-rest-urls-and-code [data]=\"data\"></app-dev-rest-urls-and-code>\r\n    </mat-tab>\r\n\r\n    <!-- Permissions explained -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Permissions\">\r\n        <mat-icon>person</mat-icon>\r\n        <span>Permissions ({{ data.permissions.length }})</span>\r\n        <mat-icon *ngIf=\"!data.permissions.length\">warning</mat-icon>\r\n      </div>\r\n      <app-dev-rest-tab-permissions [data]=\"data\"></app-dev-rest-tab-permissions>\r\n    </mat-tab>\r\n\r\n    <!-- HTTP Headers Explained -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"HTTP headers and auto\">\r\n        <mat-icon>perm_device_information</mat-icon>\r\n        <span>HTTP headers & &nbsp;<code>/auto/</code></span>\r\n      </div>\r\n      <app-dev-rest-tab-headers [data]=\"data\"></app-dev-rest-tab-headers>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</ng-container>\r\n");

/***/ }),

/***/ "9mSr":
/*!*********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/query/query-samples.ts ***!
  \*********************************************************************/
/*! exports provided: generateQueryCalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateQueryCalls", function() { return generateQueryCalls; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "LBgr");

// tslint:disable: curly
function generateQueryCalls($2sxc, scenario, context, root, id, streamNames, urlParams) {
    var virtual = root[0] !== '/' && !root.startsWith('http');
    // if urlParams exist and it doesn't starts with a ?, add that
    if (urlParams && urlParams.length && urlParams[0] != '?')
        urlParams = '?' + urlParams;
    var contextParams = virtual
        ? "" + urlParams + (urlParams ? '&' : '?') + "PageId=" + context.tabId + "&ModuleId=" + context.moduleId
        : '';
    var directUrl = $2sxc.http.apiUrl(root) + contextParams;
    // const directWId = $2sxc.http.apiUrl(withId) + contextParams;
    var pathWithParams = root + urlParams;
    var pathWithStream = root + "/" + (streamNames !== null && streamNames !== void 0 ? streamNames : 'Default') + urlParams;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'GET', pathWithParams, 'read all query streams', 'Read list of all items', true, snippetsGet(scenario, pathWithParams, context), directUrl),
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'GET', pathWithStream, 'read only Stream Default', 'Read list of all items', true, snippetsGet(scenario, pathWithStream, context), directUrl),
    ];
}
function snippetsGet(scenario, path, context, streamNames) {
    var moduleId = context.moduleId;
    var virtual = path[0] !== '/';
    var list = [];
    var pathWithContext = path + "?PageId=" + context.tabId + "&ModuleId=" + context.moduleId;
    if (scenario.inSameContext)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Example with global $2sxc and event-context', 'This example finds the context information from the HTML where an action started.', "\n<button onclick=\"$2sxc(this).webApi.get('" + path + "').then(data => console.log(data))\">\n  get it\n</button>", false, [___WEBPACK_IMPORTED_MODULE_0__["hint$2sxc"]]));
    if (scenario.in2sxc)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]("Example with global $2sxc and a Module-Id " + moduleId, "This is how you get the context when your code doesn't start with a DOM context, so you need the moduleId.", "\n// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n// now get the data in the promise\nsxc.webApi.get('" + path + "')\n  .then(data => {\n    console.log(data)\n  });", false, [___WEBPACK_IMPORTED_MODULE_0__["hint$2sxc"]]), new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]("Same example as one-liner", 'This is the same as above, but as a one-liner so you can run it directly in the F12 console right now.', "$2sxc(" + moduleId + ").webApi.get('" + path + "').then(data => console.log('just got:', data));", true));
    if (scenario.in2sxc && scenario.inSameContext)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Example where you get the Module-Id from Razor', "This example doesn't use a fixed moduleId but let's the Razor add the current moduleId when the page is rendered.", "\n// this will be replaced on the server with the ID\nvar moduleId = @Dnn.Module.ModuleID;\nvar sxc = $2sxc(moduleId);\nvar promise = sxc.webApi.get('" + path + "');", false, [___WEBPACK_IMPORTED_MODULE_0__["hint$2sxc"]]));
    // jquery examples, they differ based on the scenario
    var endPointGetter = virtual ? "$2sxc.http.apiUrl('" + path + "')" : "'" + path + "'";
    var endPointGetWithParams = virtual ? "$2sxc.http.apiUrl('" + pathWithContext + "')" : "'" + pathWithContext + "'";
    if (scenario.inSameSite) {
        // jQuery using setModuleHeaders
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery inside DNN', "This example uses jQuery instead of the $2sxc to do the AJAX call.\n      It shows you how to resolve the virtual path for use in other ways.", "\nvar endpoint = " + endPointGetter + ";\n$.ajax({\n  url:endpoint,\n  beforeSend: $.dnnSF(" + moduleId + ").setModuleHeaders\n}).then(data => {\n  console.log('Got this data:', data);\n})", false, []));
        // jQuery Single-Liner
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery as single-liner', "The same example as above, just as single-liner so you can test it directly in the F12 console.\n      This will only work if you're on a DNN page with this module.", "$.ajax({url: " + endPointGetter + ", beforeSend: $.dnnSF(" + moduleId + ").setModuleHeaders }).then(data => console.log(data))", false, []));
        // jQuery without setModuleHeaders
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery and add Context in URL', "This example uses jQuery instead of the $2sxc to do the AJAX call.\n      But instead of using the DNN Services Framework it adds relevant headers to the url.", "\n$.ajax(" + endPointGetWithParams + ").then(data => {\n  console.log('Got this data:', data);\n})", false, []));
        // jQuery Single-Liner without SetModuleHeaders
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery with url-context as single-liner', "The same example as above, just as single-liner so you can test it directly in the F12 console.\n      This will work on a DNN page which has jQuery activated. ", "$.ajax(" + endPointGetWithParams + ").then(data => console.log(data))", false, []));
    }
    else {
        // jQuery External
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery in another Site or External', "This example uses jQuery and doesn't use $2sxc or the DNN ServicesFramework,\n      because they would be either missing, or give wrong context-headers.", "\n$.ajax('" + path + "').then(data => {\n  console.log('Got this data:', data);\n})", false, [___WEBPACK_IMPORTED_MODULE_0__["warningExternal"]]));
        // jQuery External with Context
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery with Context in URL', "This example uses jQuery and includes a module-context. This is unusual for external access, but may be needed sometime.", "\n$.ajax('" + pathWithContext + "').then(data => {\n  console.log('Got this data:', data);\n})", false, [___WEBPACK_IMPORTED_MODULE_0__["warningExternal"]]));
    }
    // return generated snippets
    return list;
}


/***/ }),

/***/ "CCTb":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/entry/entry.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "DE/9":
/*!*************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/tab-examples/tab-examples.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DevRestTabExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestTabExamplesComponent", function() { return DevRestTabExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_examples_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-examples.component.html */ "gr34");
/* harmony import */ var _tab_examples_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-examples.component.scss */ "EfbK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var DevRestTabExamplesComponent = /** @class */ (function () {
    function DevRestTabExamplesComponent() {
    }
    DevRestTabExamplesComponent.ctorParameters = function () { return []; };
    DevRestTabExamplesComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    DevRestTabExamplesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dev-rest-tab-examples-intro',
            template: _raw_loader_tab_examples_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_tab_examples_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DevRestTabExamplesComponent);
    return DevRestTabExamplesComponent;
}());



/***/ }),

/***/ "EfbK":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/tab-examples/tab-examples.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep code,\ncode,\npre {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n\npre {\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n\n.rest-urls-accordion {\n  display: block;\n  margin: 8px;\n}\n\n.rest-urls-title {\n  display: flex;\n  align-items: center;\n}\n\n.code-example {\n  position: relative;\n}\n\n.code-example__text {\n  min-height: 40px;\n}\n\n.code-example__copy {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.params-form {\n  display: flex;\n  max-width: 600px;\n}\n\n.params-form .mat-form-field:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.form-with-textarea {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxkZXYtcmVzdC1hbGwuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRhYi1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7O0VBR0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREVFO0VBQ0UsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUNESjs7QURLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRElFO0VBQ0UsZ0JBQUE7QUNGSjs7QURNQTtFQUNFLGdCQUFBO0FDSEYiLCJmaWxlIjoidGFiLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhlIGZpcnN0IG9uZSBpcyBuZWVkZWQgc28gPGNvZGU+IGNvbG9yaW5nIHdvcmtzIGluIGR5bmFtaWMgaW5qZWN0ZWQgaHRtbCAodGlwcyBldGMuKVxyXG46aG9zdCA6Om5nLWRlZXAgY29kZSxcclxuY29kZSxcclxucHJlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG5cclxucHJlIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XHJcbn1cclxuXHJcbi5yZXN0LXVybHMtYWNjb3JkaW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLnJlc3QtdXJscy10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29kZS1leGFtcGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gICZfX2NvcHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFyYW1zLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXdpdGgtdGV4dGFyZWEge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcblxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgY29kZSxcbmNvZGUsXG5wcmUge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG5wcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xufVxuXG4ucmVzdC11cmxzLWFjY29yZGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDhweDtcbn1cblxuLnJlc3QtdXJscy10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2RlLWV4YW1wbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29kZS1leGFtcGxlX190ZXh0IHtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cbi5jb2RlLWV4YW1wbGVfX2NvcHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wYXJhbXMtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG4ucGFyYW1zLWZvcm0gLm1hdC1mb3JtLWZpZWxkOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZm9ybS13aXRoLXRleHRhcmVhIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "EpvR":
/*!***********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/entry/entry.component.ts ***!
  \***********************************************************************/
/*! exports provided: DevRestEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestEntryComponent", function() { return DevRestEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_entry_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./entry.component.html */ "CCTb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var DevRestEntryComponent = /** @class */ (function () {
    function DevRestEntryComponent() {
    }
    DevRestEntryComponent.ctorParameters = function () { return []; };
    DevRestEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dev-rest-entry',
            template: _raw_loader_entry_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DevRestEntryComponent);
    return DevRestEntryComponent;
}());



/***/ }),

/***/ "G+q3":
/*!****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/api/action-params/true-false.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TrueFalseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrueFalseComponent", function() { return TrueFalseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_true_false_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./true-false.component.html */ "MgVE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var TrueFalseComponent = /** @class */ (function () {
    function TrueFalseComponent() {
        this.trueIcon = 'check_circle';
        this.falseIcon = 'circle';
    }
    TrueFalseComponent.prototype.agInit = function (params) {
        var value = params.value;
        if (params.reverse) {
            value = !value;
        }
        if (params.trueIcon) {
            this.trueIcon = params.trueIcon;
        }
        if (params.falseIcon) {
            this.falseIcon = params.falseIcon;
        }
        this.icon = value ? this.trueIcon : this.falseIcon;
    };
    TrueFalseComponent.prototype.refresh = function (params) {
        return true;
    };
    TrueFalseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-rest-api-true-false',
            template: _raw_loader_true_false_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        })
    ], TrueFalseComponent);
    return TrueFalseComponent;
}());



/***/ }),

/***/ "GUTT":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/tab-permissions/tab-permissions.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DevRestTabPermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestTabPermissionsComponent", function() { return DevRestTabPermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_permissions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-permissions.component.html */ "p57z");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "DR3G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../permissions/go-to-permissions */ "Tgur");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ "1HxE");







var DevRestTabPermissionsComponent = /** @class */ (function () {
    function DevRestTabPermissionsComponent(router, route) {
        this.router = router;
        this.route = route;
        /** AgGrid modules */
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_2__["AllCommunityModules"];
        /** AgGrid options */
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_6__["defaultGridOptions"]), { columnDefs: [
                { headerName: 'ID', field: 'Id', width: 70, headerClass: 'dense', cellClass: 'no-padding no-outline' },
                { headerName: 'Name', field: 'Title', flex: 2, minWidth: 250, cellClass: 'no-outline' },
                { headerName: 'Identity', field: 'Identity', flex: 2, minWidth: 250, cellClass: 'no-outline' },
                { headerName: 'Condition', field: 'Condition', flex: 2, minWidth: 250, cellClass: 'no-outline' },
                { headerName: 'Grant', field: 'Grant', width: 70, headerClass: 'dense', cellClass: 'no-outline' },
            ] });
    }
    DevRestTabPermissionsComponent.prototype.openPermissions = function () {
        this.router.navigate([_permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_5__["GoToPermissions"].goContentType(this.data.permissionTarget)], { relativeTo: this.route });
    };
    DevRestTabPermissionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    DevRestTabPermissionsComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    DevRestTabPermissionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dev-rest-tab-permissions',
            template: _raw_loader_tab_permissions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DevRestTabPermissionsComponent);
    return DevRestTabPermissionsComponent;
}());



/***/ }),

/***/ "MgVE":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/api/action-params/true-false.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\">\r\n  <mat-icon>{{ icon }}</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "NcEN":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/query/introduction/introduction.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  To learn more about queries you may want to read these <a href=\"https://docs.2sxc.org/index.html\" target=\"_blank\">docs</a>:\n</p>\n<ul>\n  <li><a href=\"https://docs.2sxc.org/basics/query/index.html\" target=\"_blank\">Queries in 2sxc</a></li>\n  <li><a href=\"https://docs.2sxc.org/web-api/query-rest-web-api.html\" target=\"_blank\">Query REST API</a></li>\n</ul>\n");

/***/ }),

/***/ "R07U":
/*!************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/dev-rest-dialog.config.ts ***!
  \************************************************************************/
/*! exports provided: devRestDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devRestDialog", function() { return devRestDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var devRestDialog = {
    name: 'DEV_REST_DIALOG',
    initContext: true,
    panelSize: 'large',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var DevRestEntryComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./entry/entry.component */ "EpvR"))];
                    case 1:
                        DevRestEntryComponent = (_a.sent()).DevRestEntryComponent;
                        return [2 /*return*/, DevRestEntryComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "SOsl":
/*!******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/data/introduction/introduction.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DevRestDataIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestDataIntroductionComponent", function() { return DevRestDataIntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_introduction_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./introduction.component.html */ "nhoq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ "LBgr");




var DevRestDataIntroductionComponent = /** @class */ (function () {
    function DevRestDataIntroductionComponent() {
        /** List of scenarios */
        this.scenarios = ___WEBPACK_IMPORTED_MODULE_3__["AllScenarios"];
    }
    DevRestDataIntroductionComponent.prototype.ngOnInit = function () {
    };
    DevRestDataIntroductionComponent.ctorParameters = function () { return []; };
    DevRestDataIntroductionComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    DevRestDataIntroductionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dev-data-introduction',
            template: _raw_loader_introduction_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DevRestDataIntroductionComponent);
    return DevRestDataIntroductionComponent;
}());



/***/ }),

/***/ "SsNb":
/*!*********************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/dev-rest-urls-and-code/dev-rest-urls-and-code.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DevRestUrlsAndCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestUrlsAndCodeComponent", function() { return DevRestUrlsAndCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dev_rest_urls_and_code_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dev-rest-urls-and-code.component.html */ "qyvR");
/* harmony import */ var _dev_rest_urls_and_code_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev-rest-urls-and-code.component.scss */ "dYbX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/helpers/copy-to-clipboard.helper */ "vxPj");







var DevRestUrlsAndCodeComponent = /** @class */ (function () {
    function DevRestUrlsAndCodeComponent(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
    }
    DevRestUrlsAndCodeComponent.prototype.callApiGet = function (url) {
        var _this = this;
        this.http.get(url).subscribe(function (res) {
            console.log("Called " + url + " and got this:", res);
            _this.openSnackBar("Called " + url + ". You can see the full result in the F12 console", 'API call returned');
        });
        this.openSnackBar("Calling " + url + ". You can see the full result in the F12 console", 'API call sent');
    };
    DevRestUrlsAndCodeComponent.prototype.copyCode = function (text) {
        Object(_shared_helpers_copy_to_clipboard_helper__WEBPACK_IMPORTED_MODULE_6__["copyToClipboard"])(text);
        this.openSnackBar('Copied to clipboard');
    };
    DevRestUrlsAndCodeComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    DevRestUrlsAndCodeComponent.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    DevRestUrlsAndCodeComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    DevRestUrlsAndCodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-dev-rest-urls-and-code',
            template: _raw_loader_dev_rest_urls_and_code_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_dev_rest_urls_and_code_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DevRestUrlsAndCodeComponent);
    return DevRestUrlsAndCodeComponent;
}());



/***/ }),

/***/ "TOGz":
/*!*****************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/dev-rest.module.ts ***!
  \*****************************************************************/
/*! exports provided: DevRestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestModule", function() { return DevRestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/angular */ "gwh1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! . */ "LBgr");
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../edit/shared/services */ "5t3I");
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app-administration/services */ "uw4a");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "r3uf");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../content-items/services/entities.service */ "wBq4");
/* harmony import */ var _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../permissions/services/metadata.service */ "LQlA");
/* harmony import */ var _permissions_services_permissions_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../permissions/services/permissions.service */ "CLg8");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./api/api.component */ "mcuP");
/* harmony import */ var _data_data_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./data/data.component */ "kDMW");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./entry/entry.component */ "EpvR");
/* harmony import */ var _query_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./query/introduction/introduction.component */ "tHoZ");
/* harmony import */ var _query_query_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./query/query.component */ "eOL+");
/* harmony import */ var _dev_rest_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dev-rest-routing.module */ "YPOj");
/* harmony import */ var _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./tab-examples/tab-examples.component */ "DE/9");
/* harmony import */ var _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./tab-headers/tab-headers.component */ "8Zjn");
/* harmony import */ var _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./tab-introduction/tab-introduction.component */ "oCHk");
/* harmony import */ var _tab_permissions_tab_permissions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./tab-permissions/tab-permissions.component */ "GUTT");
/* harmony import */ var _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dev-rest-urls-and-code/dev-rest-urls-and-code.component */ "SsNb");
/* harmony import */ var _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./info-box/info-box.component */ "5qVX");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _data_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./data/introduction/introduction.component */ "SOsl");
/* harmony import */ var _api_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./api/introduction/introduction.component */ "3M+c");
/* harmony import */ var _api_action_params_action_params_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./api/action-params/action-params.component */ "gON6");
/* harmony import */ var _api_action_params_true_false_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./api/action-params/true-false.component */ "G+q3");
/* harmony import */ var _api_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./api/permissions/permissions.component */ "2X2b");












































var DevRestModule = /** @class */ (function () {
    function DevRestModule() {
    }
    DevRestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _entry_entry_component__WEBPACK_IMPORTED_MODULE_27__["DevRestEntryComponent"],
                _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_36__["InfoBoxComponent"],
                _dev_rest_urls_and_code_dev_rest_urls_and_code_component__WEBPACK_IMPORTED_MODULE_35__["DevRestUrlsAndCodeComponent"],
                ___WEBPACK_IMPORTED_MODULE_15__["SelectorWithHelpComponent"],
                ___WEBPACK_IMPORTED_MODULE_15__["HelpPopupComponent"],
                _tab_headers_tab_headers_component__WEBPACK_IMPORTED_MODULE_32__["DevRestHttpHeadersComponent"],
                _tab_permissions_tab_permissions_component__WEBPACK_IMPORTED_MODULE_34__["DevRestTabPermissionsComponent"],
                _tab_introduction_tab_introduction_component__WEBPACK_IMPORTED_MODULE_33__["DevRestTabIntroductionComponent"],
                _tab_examples_tab_examples_component__WEBPACK_IMPORTED_MODULE_31__["DevRestTabExamplesComponent"],
                // Data
                _data_data_component__WEBPACK_IMPORTED_MODULE_26__["DevRestDataComponent"],
                _data_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_39__["DevRestDataIntroductionComponent"],
                // Query
                _query_query_component__WEBPACK_IMPORTED_MODULE_29__["DevRestQueryComponent"],
                _query_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_28__["DevRestQueryIntroductionComponent"],
                // Custom WebAPIs
                _api_api_component__WEBPACK_IMPORTED_MODULE_25__["DevRestApiComponent"],
                _api_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_40__["DevRestApiIntroductionComponent"],
                _api_action_params_action_params_component__WEBPACK_IMPORTED_MODULE_41__["DevRestApiActionParamsComponent"],
                _api_action_params_true_false_component__WEBPACK_IMPORTED_MODULE_42__["TrueFalseComponent"],
                _api_permissions_permissions_component__WEBPACK_IMPORTED_MODULE_43__["DevRestApiPermissionsComponent"],
            ],
            entryComponents: [
                _data_data_component__WEBPACK_IMPORTED_MODULE_26__["DevRestDataComponent"],
                ___WEBPACK_IMPORTED_MODULE_15__["SelectorWithHelpComponent"],
                ___WEBPACK_IMPORTED_MODULE_15__["HelpPopupComponent"],
                _query_query_component__WEBPACK_IMPORTED_MODULE_29__["DevRestQueryComponent"],
                _entry_entry_component__WEBPACK_IMPORTED_MODULE_27__["DevRestEntryComponent"],
                _api_api_component__WEBPACK_IMPORTED_MODULE_25__["DevRestApiComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dev_rest_routing_module__WEBPACK_IMPORTED_MODULE_30__["DevRestRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_24__["SharedComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_38__["FormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridModule"].withComponents([]),
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_23__["Context"],
                _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_19__["ContentTypesService"],
                _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_18__["AppDialogConfigService"],
                _permissions_services_permissions_service__WEBPACK_IMPORTED_MODULE_22__["PermissionsService"],
                _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_21__["MetadataService"],
                _content_items_services_entities_service__WEBPACK_IMPORTED_MODULE_20__["EntitiesService"],
                _edit_shared_services__WEBPACK_IMPORTED_MODULE_16__["EntityService"],
                _app_administration_services__WEBPACK_IMPORTED_MODULE_17__["PipelinesService"],
                _edit_shared_services__WEBPACK_IMPORTED_MODULE_16__["EavService"],
            ]
        })
    ], DevRestModule);
    return DevRestModule;
}());



/***/ }),

/***/ "Wi3e":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/api/permissions/permissions.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Permissions in WebAPIs</h3>\r\n\r\n<p>\r\n  Permissions must be specified in the code, using Attributes such as <code>[AllowAnonymous]</code>.\r\n  Read more about it in the <a href=\"https://docs.2sxc.org/web-api/custom/custom-web-api-security.html\" target=\"_blank\">\r\n    Docs for custom WebAPI Security</a>.\r\n</p>\r\n\r\n<ag-grid-angular class=\"ag-theme-material\" [rowData]=\"gridItems\" [modules]=\"gridModules\" [gridOptions]=\"gridOptions\"\r\n  [style.height]=\"gridHeight\">\r\n</ag-grid-angular>\r\n");

/***/ }),

/***/ "YPOj":
/*!*************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/dev-rest-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DevRestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestRoutingModule", function() { return DevRestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../permissions/go-to-permissions */ "Tgur");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/api.component */ "mcuP");
/* harmony import */ var _data_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/data.component */ "kDMW");
/* harmony import */ var _dev_rest_dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dev-rest-dialog.config */ "R07U");
/* harmony import */ var _query_query_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./query/query.component */ "eOL+");
/* harmony import */ var _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./go-to-dev-rest */ "NbiY");










var routes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _dev_rest_dialog_config__WEBPACK_IMPORTED_MODULE_7__["devRestDialog"], title: 'REST API' },
        children: [
            // New: Moved full responbility of sub-routes to here (2dm 2020-11-23)
            {
                path: "data/:" + _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_9__["GoToDevRest"].paramTypeName,
                component: _data_data_component__WEBPACK_IMPORTED_MODULE_6__["DevRestDataComponent"], children: [
                    _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_3__["GoToPermissions"].route,
                ]
            },
            {
                path: "query/:" + _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_9__["GoToDevRest"].paramQuery,
                component: _query_query_component__WEBPACK_IMPORTED_MODULE_8__["DevRestQueryComponent"], children: [
                    _permissions_go_to_permissions__WEBPACK_IMPORTED_MODULE_3__["GoToPermissions"].route,
                ]
            },
            { path: "custom/:" + _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_9__["GoToDevRest"].paramApiPath, component: _api_api_component__WEBPACK_IMPORTED_MODULE_5__["DevRestApiComponent"] },
        ]
    },
];
var DevRestRoutingModule = /** @class */ (function () {
    function DevRestRoutingModule() {
    }
    DevRestRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevRestRoutingModule);
    return DevRestRoutingModule;
}());



/***/ }),

/***/ "dTMy":
/*!*****************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/api/api-samples.ts ***!
  \*****************************************************************/
/*! exports provided: generateWebApiCalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateWebApiCalls", function() { return generateWebApiCalls; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "LBgr");

// tslint:disable: curly
function generateWebApiCalls($2sxc, scenario, context, root, urlParams, verbs) {
    var virtual = root[0] !== '/' && !root.startsWith('http');
    // if urlParams exist and it doesn't starts with a ?, add that
    if (urlParams && urlParams.length && urlParams[0] != '?')
        urlParams = '?' + urlParams;
    var contextParams = virtual
        ? "" + urlParams + (urlParams ? '&' : '?') + "PageId=" + context.tabId + "&ModuleId=" + context.moduleId
        : '';
    var directUrl = $2sxc.http.apiUrl(root) + contextParams;
    var pathWithParams = root + urlParams;
    var result = new Array();
    if (verbs.includes("GET"))
        result.push(new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'GET', pathWithParams, 'call the WebAPI endpoint', 'call GET on this endpoint', true, snippetsGet(scenario, pathWithParams, context), directUrl));
    if (verbs.includes("POST"))
        result.push(new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'POST', pathWithParams, 'call the WebAPI endpoint', 'call POST on this endpoint', false, snippetsPost(scenario, pathWithParams, context.moduleId), directUrl));
    return result;
}
function snippetsGet(scenario, path, context) {
    var moduleId = context.moduleId;
    var virtual = path[0] !== '/';
    var list = [];
    var pathWithContext = path + "?PageId=" + context.tabId + "&ModuleId=" + context.moduleId;
    if (scenario.inSameContext)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Example with global $2sxc and event-context', 'This example finds the context information from the HTML where an action started.', "\n<button onclick=\"$2sxc(this).webApi.get('" + path + "').then(data => console.log(data))\">\n  get it\n</button>", false, [___WEBPACK_IMPORTED_MODULE_0__["hint$2sxc"]]));
    if (scenario.in2sxc)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]("Example with global $2sxc and a Module-Id " + moduleId, "This is how you get the context when your code doesn't start with a DOM context, so you need the moduleId.", "\n// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n// now get the data in the promise\nsxc.webApi.get('" + path + "')\n  .then(data => {\n    console.log(data)\n  });", false, [___WEBPACK_IMPORTED_MODULE_0__["hint$2sxc"]]), new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]("Same example as one-liner", 'This is the same as above, but as a one-liner so you can run it directly in the F12 console right now.', "$2sxc(" + moduleId + ").webApi.get('" + path + "').then(data => console.log('just got:', data));", true));
    if (scenario.in2sxc && scenario.inSameContext)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Example where you get the Module-Id from Razor', "This example doesn't use a fixed moduleId but let's the Razor add the current moduleId when the page is rendered.", "\n// this will be replaced on the server with the ID\nvar moduleId = @Dnn.Module.ModuleID;\nvar sxc = $2sxc(moduleId);\nvar promise = sxc.webApi.get('" + path + "');", false, [___WEBPACK_IMPORTED_MODULE_0__["hint$2sxc"]]));
    // jquery examples, they differ based on the scenario
    var endPointGetter = virtual ? "$2sxc.http.apiUrl('" + path + "')" : "'" + path + "'";
    var endPointGetWithParams = virtual ? "$2sxc.http.apiUrl('" + pathWithContext + "')" : "'" + pathWithContext + "'";
    if (scenario.inSameSite) {
        // jQuery using setModuleHeaders
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery inside DNN', "This example uses jQuery instead of the $2sxc to do the AJAX call.\n      It shows you how to resolve the virtual path for use in other ways.", "\nvar endpoint = " + endPointGetter + ";\n$.ajax({\n  url:endpoint,\n  beforeSend: $.dnnSF(" + moduleId + ").setModuleHeaders\n}).then(data => {\n  console.log('Got this data:', data);\n})", false, []));
        // jQuery Single-Liner
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery as single-liner', "The same example as above, just as single-liner so you can test it directly in the F12 console.\n      This will only work if you're on a DNN page with this module.", "$.ajax({url: " + endPointGetter + ", beforeSend: $.dnnSF(" + moduleId + ").setModuleHeaders }).then(data => console.log(data))", false, []));
        // jQuery without setModuleHeaders
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery and add Context in URL', "This example uses jQuery instead of the $2sxc to do the AJAX call.\n      But instead of using the DNN Services Framework it adds relevant headers to the url.", "\n$.ajax(" + endPointGetWithParams + ").then(data => {\n  console.log('Got this data:', data);\n})", false, []));
        // jQuery Single-Liner without SetModuleHeaders
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery with url-context as single-liner', "The same example as above, just as single-liner so you can test it directly in the F12 console.\n      This will work on a DNN page which has jQuery activated. ", "$.ajax(" + endPointGetWithParams + ").then(data => console.log(data))", false, []));
    }
    else {
        // jQuery External
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery in another Site or External', "This example uses jQuery and doesn't use $2sxc or the DNN ServicesFramework,\n      because they would be either missing, or give wrong context-headers.", "\n$.ajax('" + path + "').then(data => {\n  console.log('Got this data:', data);\n})", false, [___WEBPACK_IMPORTED_MODULE_0__["warningExternal"]]));
        // jQuery External with Context
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery with Context in URL', "This example uses jQuery and includes a module-context. This is unusual for external access, but may be needed sometime.", "\n$.ajax('" + pathWithContext + "').then(data => {\n  console.log('Got this data:', data);\n})", false, [___WEBPACK_IMPORTED_MODULE_0__["warningExternal"]]));
    }
    // return generated snippets
    return list;
}
/** Snippets for basic Post */
function snippetsPost(scenario, path, moduleId) {
    var showWarning = !scenario.inSameContext;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Basic Example', "This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.", "// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n\n// The object we'll send to get created. It's just a simple object with properties\nvar urlParams = {\n  id: 47,\n};\nvar postParams = {\n  // related items like tags can be assigned with IDs\n  // which you would usually get from somewhere first\n  list: [17, 4203, 5030],\n  message: 'Some Text',\n};\n\n// now create it and get the id back\nsxc.webApi.post('" + path + "', urlParams, postParams)\n  .then(data => {\n    console.log('Got this ID information: ', data)\n  });", false, showWarning ? [___WEBPACK_IMPORTED_MODULE_0__["warningSimpleSampleOnly"]] : []),
    ];
}


/***/ }),

/***/ "dYbX":
/*!***********************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/dev-rest-urls-and-code/dev-rest-urls-and-code.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep code,\ncode,\npre {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n\npre {\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n\n.rest-urls-accordion {\n  display: block;\n  margin: 8px;\n}\n\n.rest-urls-title {\n  display: flex;\n  align-items: center;\n}\n\n.code-example {\n  position: relative;\n}\n\n.code-example__text {\n  min-height: 40px;\n}\n\n.code-example__copy {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.params-form {\n  display: flex;\n  max-width: 600px;\n}\n\n.params-form .mat-form-field:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.form-with-textarea {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxkZXYtcmVzdC1hbGwuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRldi1yZXN0LXVybHMtYW5kLWNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OztFQUdFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURFRTtFQUNFLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDREo7O0FES0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJRTtFQUNFLGdCQUFBO0FDRko7O0FETUE7RUFDRSxnQkFBQTtBQ0hGIiwiZmlsZSI6ImRldi1yZXN0LXVybHMtYW5kLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGUgZmlyc3Qgb25lIGlzIG5lZWRlZCBzbyA8Y29kZT4gY29sb3Jpbmcgd29ya3MgaW4gZHluYW1pYyBpbmplY3RlZCBodG1sICh0aXBzIGV0Yy4pXHJcbjpob3N0IDo6bmctZGVlcCBjb2RlLFxyXG5jb2RlLFxyXG5wcmUge1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcblxyXG5wcmUge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxufVxyXG5cclxuLnJlc3QtdXJscy1hY2NvcmRpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcblxyXG4ucmVzdC11cmxzLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2RlLWV4YW1wbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fdGV4dCB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY29weSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5wYXJhbXMtZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG5cclxuICAubWF0LWZvcm0tZmllbGQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0td2l0aC10ZXh0YXJlYSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuXHJcbiIsIjpob3N0IDo6bmctZGVlcCBjb2RlLFxuY29kZSxcbnByZSB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbnByZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XG59XG5cbi5yZXN0LXVybHMtYWNjb3JkaW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4ucmVzdC11cmxzLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvZGUtZXhhbXBsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb2RlLWV4YW1wbGVfX3RleHQge1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuLmNvZGUtZXhhbXBsZV9fY29weSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cblxuLnBhcmFtcy1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cbi5wYXJhbXMtZm9ybSAubWF0LWZvcm0tZmllbGQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5mb3JtLXdpdGgtdGV4dGFyZWEge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "e9ld":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/tab-introduction/tab-introduction.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  All data can be used in JavaScript, SPAs or anywhere with the REST API\n  (see <a href=\"https://docs.2sxc.org/web-api/index.html\" target=\"_blank\">docs</a>).\n  Use this for things like:\n</p>\n<ul>\n  <li><a href=\"https://docs.2sxc.org/web-api/index.html\" target=\"_blank\">WebAPI in 2sxc</a></li>\n  <li><a href=\"https://docs.2sxc.org/web-api/headless/index.html\" target=\"_blank\">Using DNN/2sxc as a headless CMS</a></li>\n  <li>Create SPAs in DNN/2sxc</li>\n  <li>Get data for mobile apps</li>\n  <li>Share data to other platforms</li>\n</ul>\n<p>\n  Just set off HTTP <code>GET</code> requests or similar\n  to the endpoint like <code>{{ data.root }}</code>. You can find the full list with example code\n  in the next tabs.\n  Make sure you also read about permissions and HTTP headers.\n</p>\n<h3>Scenarios Explained (dropdown on top)</h3>\n<p>\n  The examples / code / permission infos will change based on the scenario you choose.\n</p>\n<ng-container *ngFor=\"let scenario of scenarios\">\n  <h4>Scenario: {{ scenario.name }}</h4>\n  <p>\n    {{ scenario.description }}\n  </p>\n  <p *ngIf=\"scenario.notes\">\n    <em>\n      {{ scenario.notes }}\n    </em>\n  </p>\n");

/***/ }),

/***/ "eOL+":
/*!***********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/query/query.component.ts ***!
  \***********************************************************************/
/*! exports provided: DevRestQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestQueryComponent", function() { return DevRestQueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_query_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./query.component.html */ "v+iu");
/* harmony import */ var _dev_rest_all_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev-rest-all.scss */ "yXwb");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .. */ "LBgr");
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app-administration/services */ "uw4a");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../permissions */ "gWX0");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "qb9A");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");
/* harmony import */ var _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dev-rest-base.component */ "m//V");
/* harmony import */ var _query_samples__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./query-samples */ "9mSr");
















var pathToQuery = 'app/{appname}/query/{queryname}';
var DevRestQueryComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevRestQueryComponent, _super);
    function DevRestQueryComponent(appDialogConfigService, 
    /** Context for this dialog. Used for appId, zoneId, tabId, etc. */
    context, dialogRef, router, route, pipelinesService, permissionsService, dnnContext) {
        var _this = _super.call(this, appDialogConfigService, context, dialogRef, dnnContext, router, route, permissionsService) || this;
        _this.hostClass = 'dialog-component';
        /** Test values for url params */
        _this.urlParams$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        /** Test values for stream names */
        _this.streamNames$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('Default');
        // build Query Stream
        var query$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (pm) { return pm.get(___WEBPACK_IMPORTED_MODULE_9__["GoToDevRest"].paramQuery); })),
            pipelinesService.getAll(_shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_12__["eavConstants"].contentTypes.query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["share"])()),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), queryGuid = _b[0], all = _b[1];
            return all.find(function (q) { return q.Guid === queryGuid; });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["share"])());
        _this.permissions$ = _this.buildPermissionStream(___WEBPACK_IMPORTED_MODULE_9__["GoToDevRest"].paramQuery);
        // Build Root Stream (for the root folder)
        var root$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([query$, _this.scenario$, _this.dialogSettings$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), query = _b[0], scenario = _b[1], dialogSettings = _b[2];
            var resolved = pathToQuery
                .replace('{queryname}', query.Name)
                .replace('{appname}', scenario.inSameContext ? 'auto' : encodeURI(dialogSettings.Context.App.Folder));
            return _this.rootBasedOnScenario(resolved, scenario);
        }));
        // build variables for template
        _this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([query$, _this.scenario$, _this.permissions$]),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([root$, /* itemOfThisType$, */ _this.dialogSettings$]),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([_this.streamNames$, _this.urlParams$])
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[0], 3), query = _c[0], scenario = _c[1], permissions = _c[2], _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[1], 2), root = _d[0], diag = _d[1], _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[2], 2), streamNames = _e[0], urlParams = _e[1];
            return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.buildBaseTemplateVars(query.Name, query.Guid, diag, permissions, root, scenario)), { query: query, apiCalls: Object(_query_samples__WEBPACK_IMPORTED_MODULE_15__["generateQueryCalls"])(dnnContext.$2sxc, scenario, context, root, 0 /* #todoquery */, streamNames, urlParams) }));
        }));
        return _this;
    }
    DevRestQueryComponent.prototype.updateStreams = function (event) {
        this.streamNames$.next(event.target.value);
    };
    DevRestQueryComponent.prototype.updateParams = function (event) {
        this.urlParams$.next(event.target.value);
    };
    DevRestQueryComponent.ctorParameters = function () { return [
        { type: _app_administration_services__WEBPACK_IMPORTED_MODULE_10__["AppDialogConfigService"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_13__["Context"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _app_administration_services__WEBPACK_IMPORTED_MODULE_10__["PipelinesService"] },
        { type: _permissions__WEBPACK_IMPORTED_MODULE_11__["PermissionsService"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__["Context"] }
    ]; };
    DevRestQueryComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['className',] }]
    };
    DevRestQueryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-dev-rest-query',
            template: _raw_loader_query_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_dev_rest_all_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_administration_services__WEBPACK_IMPORTED_MODULE_10__["AppDialogConfigService"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_13__["Context"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _app_administration_services__WEBPACK_IMPORTED_MODULE_10__["PipelinesService"],
            _permissions__WEBPACK_IMPORTED_MODULE_11__["PermissionsService"],
            _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__["Context"]])
    ], DevRestQueryComponent);
    return DevRestQueryComponent;
}(_dev_rest_base_component__WEBPACK_IMPORTED_MODULE_14__["DevRestBase"]));



/***/ }),

/***/ "ftsI":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/tab-headers/tab-headers.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>HTTP Headers, Security and Context</h2>\n<!-- Background about Context -->\n<p>\n  HTTP headers and url-parameters are used for <strong>Security</strong> and <strong>Context</strong>.\n  We'll explain the <em>Security</em> part further below, and start with <em>Context</em>.\n  When you work with WebApi endpoints, there are two distinct scenarios:\n</p>\n<h3>Using WebApi with Context</h3>\n<p>\n    In this case the endpoint knows what <strong>Page</strong> and what <strong>module</strong> the request is for.\n    This <strong>Context</strong> is then used to <em>auto-detect</em> the app (so you can use <code>/auto/</code> in the url).\n    <br>\n    It can also be used for for security checks - so you can set <strong>Permissions</strong>\n    like <code>Allow READ If the user may see the module</code>.\n</p>\n<app-info-box type=\"tip\">\n  TIP: In the case of <strong>Queries</strong> the <strong>Context</strong> can also provide parameters which were configured in the module.\n</app-info-box>\n\n<h3>Using WebApi without Context</h3>\n<p>\n  If the <strong>Context</strong> is not known, the endpoint cannot <em>auto-detect</em> the the app, so instead of <code>/auto/</code>\n  you must supply the correct app-name in the url, in this case <code>{{ data.folder }}</code>.\n  <br>\n  You also must specify more specific <strong>Permissions</strong> like <code>Allow READ if user is in group Members</code> or\n  <code>Allow READ for all ANONYMOUS users</code>.\n</p>\n\n<app-info-box type=\"info\" title=\"Site & Language are <em>not</em> part of the Context.\">\n  Technically the context needs more information than we just talked about, like what <strong>Site</strong> are we on and what\n  <strong>Language</strong> is being used. This information is already in the URL. So the root (before any <code>/api/</code>)\n  paths already contains that information.\n</app-info-box>\n\n<!-- Defining the Context -->\n<h2>How to get the Context</h2>\n<h3>How the Context is Defined</h3>\n<p>\n  The context always requires a <code>PageId</code> (in DNN it is hisorically called the <code>TabId</code>) and the <code>ModuleId</code>.\n  This lets the system look up the configuration for this module and figure out everything else.\n</p>\n\n<h3>Supplying Context in HTTP Headers (default)</h3>\n<p>\n  The standard behavior is to include the Context information in hidden <strong>HTTP headers</strong>.\n  This requires a bit more JavaScript code to attach the headers, but most of the APIs like the <code>$2sxc</code>\n  will do this automatically when used from within a 2sxc-App.\n  These are the context headers provided by $2sxc:\n</p>\n<ul>\n  <li>\n    <code>PageId</code> - this is the page we're on (number). <em>this header is new in v11.11</em>\n  </li>\n  <li>\n    <s><code>TabId</code></s> - <em>obsolete</em> this is also the page id (number). <em>just but for backward compatibility</em>\n  </li>\n  <li>\n    <code>ModuleId</code> - this is the module id (number)\n  </li>\n  <li>\n    <code>ContentBlockId</code> - this in an internal ID for working in inner-content (number). You will usually not care about this.\n  </li>\n</ul>\n\n<h3>Supplying Context as URL Parameters <code>?PageId=...</code></h3>\n<p>\n  The headers above (<code>PageId</code>, <code>ModuleId</code>) can also be added to the URL and will have the same effect.\n</p>\n\n<!-- Security -->\n<h2>Security Headers</h2>\n<p>\n  In addition to context headers, a request can also include <strong>Security</strong> headers:\n</p>\n<ol>\n  <li>\n    <code>RequestVerificationToken</code> - this is a crypto key to prove that the request originated from the\n    same site. It's only included in POST/PUT/DELETE but not GET requests.\n  </li>\n</ol>\n<p>\n  These are only used on <code>PUT</code>, <code>POST</code>, <code>DELETE</code> etc. but not on <code>GET</code> requests.\n</p>\n<app-info-box type=\"tip\">\n  This header is only usefull to verify that the request came from a real DNN page.\n  The 2sxc-api <code>$2sxc</code> will add this automatically for you, so you don't need to do anything if you use that.\n</app-info-box>\n");

/***/ }),

/***/ "gON6":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/api/action-params/action-params.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DevRestApiActionParamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestApiActionParamsComponent", function() { return DevRestApiActionParamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_action_params_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./action-params.component.html */ "qUiF");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "DR3G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/default-grid-options.constants */ "1HxE");
/* harmony import */ var _true_false_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./true-false.component */ "G+q3");






var DevRestApiActionParamsComponent = /** @class */ (function () {
    function DevRestApiActionParamsComponent() {
        /** AgGrid modules */
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_2__["AllCommunityModules"];
        /** AgGrid options */
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_4__["defaultGridOptions"]), { frameworkComponents: {
                trueFalseComponent: _true_false_component__WEBPACK_IMPORTED_MODULE_5__["TrueFalseComponent"],
            }, columnDefs: [
                {
                    headerName: 'Required', field: 'isOptional', headerClass: 'dense', width: 70, cellClass: 'no-padding no-outline',
                    cellRenderer: 'trueFalseComponent',
                    cellRendererParams: { reverse: true }
                },
                { headerName: 'Name', field: 'name', flex: 2, minWidth: 200, cellClass: 'no-outline' },
                { headerName: 'Type', field: 'type', flex: 2, headerClass: 'dense', cellClass: 'no-outline' },
                { headerName: 'Default Value', field: 'defaultValue', flex: 2, minWidth: 250, cellClass: 'no-outline' },
            ] });
    }
    DevRestApiActionParamsComponent.ctorParameters = function () { return []; };
    DevRestApiActionParamsComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    DevRestApiActionParamsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dev-rest-api-action-params',
            template: _raw_loader_action_params_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DevRestApiActionParamsComponent);
    return DevRestApiActionParamsComponent;
}());



/***/ }),

/***/ "gr34":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/tab-examples/tab-examples.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-info-box type=\"info\" *ngIf=\"data.scenario.useVirtual\">\r\n  Virtual REST URLs are short. They will be resolved internally\r\n  to the full length (based on the dnn-version, current portal, etc.)\r\n  thanks to $2sxc JS API. This happens when you use the\r\n  <a href=\"https://docs.2sxc.org/specs/js/sxcewebapi.html\" target=\"_blank\">\r\n    $2sxc(<em>id-or-htmlnode</em>).webApi.get(...)\r\n  </a>\r\n  or if you use\r\n  <a href=\"https://r.2sxc.org/js-angular\" target=\"_blank\">\r\n    dnn-sxc-angular (npm package)\r\n  </a>\r\n  (which also passes url-resolving through $2sxc).\r\n</app-info-box>\r\n\r\n<app-info-box *ngIf=\"data.scenario.needsAnonymous && !data.permissionsHasAnonymous\" type=\"warning\">\r\n  To use the REST API from external, you usually will want to set some permissions for <code>Anonymous</code>.\r\n  As of now, no such permissions are configured.\r\n</app-info-box>\r\n\r\n<app-info-box *ngIf=\"data.scenario.needsAnonymous && data.permissionsHasAnonymous\" type=\"alert\">\r\n  It seems that you have some permissions configured for <code>Anonymous</code>.\r\n  This is correct if you plan on using the REST endpoints from externaly.\r\n  Please make sure that they are the ones you need, and that you don't accidentally open up too much.\r\n</app-info-box>\r\n\r\n<p>\r\n  The examples below use real values to make it easier to get started.\r\n  The values used are the current content-type <code>{{ data.name }}</code>,\r\n  the current Module ID <code>{{ data.moduleId }}</code>\r\n  and the folder of the current App folder <code>{{ data.folder }}</code> (where needed).\r\n  <ng-container *ngIf=\"data.itemId\">\r\n  The code also looked up an item of this type and will use it's ID <code>{{ data.itemId }}</code> in the\r\n  examples.\r\n</ng-container>\r\n</p>\r\n");

/***/ }),

/***/ "kDMW":
/*!*********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/data/data.component.ts ***!
  \*********************************************************************/
/*! exports provided: DevRestDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestDataComponent", function() { return DevRestDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_data_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./data.component.html */ "9BEC");
/* harmony import */ var _dev_rest_all_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev-rest-all.scss */ "yXwb");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .. */ "LBgr");
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../edit/shared/services */ "5t3I");
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app-administration/services */ "uw4a");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../permissions */ "gWX0");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");
/* harmony import */ var _dev_rest_base_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dev-rest-base.component */ "m//V");
/* harmony import */ var _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../go-to-dev-rest */ "NbiY");
















var pathToContent = 'app/{appname}/content/{typename}';
var DevRestDataComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevRestDataComponent, _super);
    function DevRestDataComponent(dialogRef, router, route, contentTypesService, appDialogConfigService, permissionsService, entityService, 
    /** Context for this dialog. Used for appId, zoneId, tabId, etc. */
    context, 
    /** dnn-sxc-angular context. Used to resolve urls */
    dnnContext) {
        var _this = _super.call(this, appDialogConfigService, context, dialogRef, dnnContext, router, route, permissionsService) || this;
        _this.hostClass = 'dialog-component';
        // Build ContentType Stream
        var contentType$ = route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (pm) { return pm.get(_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_15__["GoToDevRest"].paramTypeName); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (ctName) { return contentTypesService.retrieveContentType(ctName); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["share"])());
        // Build Dialog Settings Stream
        // Note: this is probably already loaded somewhere, so I'm not sure why we're getting it again
        // const dialogSettings$ = appDialogConfigService.getDialogSettings().pipe(share());
        _this.permissions$ = _this.buildPermissionStream(_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_15__["GoToDevRest"].paramTypeName);
        // Build Root Stream (for the root folder)
        var root$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([contentType$, _this.scenario$, _this.dialogSettings$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), contentType = _b[0], scenario = _b[1], dialogSettings = _b[2];
            var resolved = pathToContent
                .replace('{typename}', contentType.Name)
                .replace('{appname}', scenario.inSameContext ? 'auto' : encodeURI(dialogSettings.Context.App.Folder));
            return _this.rootBasedOnScenario(resolved, scenario);
        }));
        // Get an item of this type for building urls
        var itemOfThisType$ = entityService.reactiveEntities(contentType$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (ct) { return !!ct; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (ct) { return ({ contentTypeName: ct.StaticName }); }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (list) { return list.length
            ? list[0]
            // we need a dummy in case nothing is found, otherwise the observables stop
            : { Id: 0, Value: "no data found", Text: "no data found" }; }));
        // Prepare everything for use in the template
        // Note that we need to mix multiple combineLatest, because a combineLatest can only take 6 streams
        _this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([contentType$, _this.scenario$, _this.permissions$]),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([root$, itemOfThisType$, _this.dialogSettings$]),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[0], 3), contentType = _c[0], scenario = _c[1], permissions = _c[2], _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[1], 3), root = _d[0], item = _d[1], diag = _d[2];
            return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.buildBaseTemplateVars(contentType.Name, contentType.StaticName, diag, permissions, root, scenario)), { contentType: contentType, itemId: item.Id, itemGuid: item.Value, apiCalls: Object(___WEBPACK_IMPORTED_MODULE_9__["generateApiCalls"])(dnnContext.$2sxc, scenario, context, root, item.Id) }));
        }));
        return _this;
    }
    DevRestDataComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _app_administration_services__WEBPACK_IMPORTED_MODULE_11__["ContentTypesService"] },
        { type: _app_administration_services__WEBPACK_IMPORTED_MODULE_11__["AppDialogConfigService"] },
        { type: _permissions__WEBPACK_IMPORTED_MODULE_12__["PermissionsService"] },
        { type: _edit_shared_services__WEBPACK_IMPORTED_MODULE_10__["EntityService"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_13__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__["Context"] }
    ]; };
    DevRestDataComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['className',] }]
    };
    DevRestDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-dev-rest-data',
            template: _raw_loader_data_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            // we need preserve whitespace - otherwise spaces are missing in some conditional HTML
            preserveWhitespaces: true,
            styles: [_dev_rest_all_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _app_administration_services__WEBPACK_IMPORTED_MODULE_11__["ContentTypesService"],
            _app_administration_services__WEBPACK_IMPORTED_MODULE_11__["AppDialogConfigService"],
            _permissions__WEBPACK_IMPORTED_MODULE_12__["PermissionsService"],
            _edit_shared_services__WEBPACK_IMPORTED_MODULE_10__["EntityService"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_13__["Context"],
            _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__["Context"]])
    ], DevRestDataComponent);
    return DevRestDataComponent;
}(_dev_rest_base_component__WEBPACK_IMPORTED_MODULE_14__["DevRestBase"]));



/***/ }),

/***/ "mB6Z":
/*!*******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/info-box/info-box.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.warning {\n  background-color: lightcoral;\n}\n\np.alert {\n  background-color: lightyellow;\n}\n\np.tip {\n  background-color: #aadaf8;\n}\n\np.info {\n  background-color: lightgreen;\n}\n\np.icon-box {\n  padding: 5px 5px 5px 60px;\n  margin: 5px;\n}\n\np.icon-box mat-icon {\n  margin-left: -40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGluZm8tYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRiIsImZpbGUiOiJpbmZvLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5wLndhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbn1cclxuXHJcbnAuYWxlcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xyXG59XHJcblxyXG5wLnRpcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMjE4LCAyNDgpO1xyXG59XHJcblxyXG5wLmluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbnAuaWNvbi1ib3gge1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDYwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbnAuaWNvbi1ib3ggbWF0LWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "mcuP":
/*!*******************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/api/api.component.ts ***!
  \*******************************************************************/
/*! exports provided: DevRestApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestApiComponent", function() { return DevRestApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_api_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./api.component.html */ "xPHQ");
/* harmony import */ var _dev_rest_all_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev-rest-all.scss */ "yXwb");
/* harmony import */ var _header_selector_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header-selector.scss */ "qwhO");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .. */ "LBgr");
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app-administration/services */ "uw4a");
/* harmony import */ var _app_administration_services_web_apis_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../app-administration/services/web-apis.service */ "NG6K");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");
/* harmony import */ var _go_to_dev_rest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../go-to-dev-rest */ "NbiY");
/* harmony import */ var _api_samples__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api-samples */ "dTMy");
















var pathToApi = 'app/{appname}/api/{controller}/{action}';
var DevRestApiComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevRestApiComponent, _super);
    function DevRestApiComponent(appDialogConfigService, 
    /** Context for this dialog. Used for appId, zoneId, tabId, etc. */
    context, dnnContext, dialogRef, router, route, webApisService) {
        var _this = _super.call(this, appDialogConfigService, context, dialogRef, dnnContext, router, route, null) || this;
        _this.webApisService = webApisService;
        _this.hostClass = 'dialog-component';
        /** action name to check for */
        _this.selectedActionName$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        /** Test values for url params */
        _this.urlParams$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        var webApi$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            _this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (pm) { return pm.get(_go_to_dev_rest__WEBPACK_IMPORTED_MODULE_14__["GoToDevRest"].paramApiPath); })),
            _this.webApisService.getAll()
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), name = _b[0], webApis = _b[1];
            name = decodeURIComponent(name);
            return webApis.find(function (w) { return w.path === name; });
        }));
        var apiDetails$ = webApi$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (webApi) { return _this.webApisService.details(webApi.path); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["share"])());
        apiDetails$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (x) { var _a; return !!((_a = x === null || x === void 0 ? void 0 : x.actions) === null || _a === void 0 ? void 0 : _a.length); })).subscribe(function (x) { var _a; return _this.selectedActionName$.next((_a = x === null || x === void 0 ? void 0 : x.actions[0]) === null || _a === void 0 ? void 0 : _a.name); });
        // apiDetails$.subscribe(x => console.log('details', x));
        var selectedAction$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([apiDetails$, _this.selectedActionName$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (_a) {
            var _b;
            var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), details = _c[0], name = _c[1];
            return (_b = details === null || details === void 0 ? void 0 : details.actions) === null || _b === void 0 ? void 0 : _b.find(function (a) { return a.name == name; });
        }));
        // Build Root Stream for the root folder
        var root$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([webApi$, apiDetails$, selectedAction$, _this.scenario$, _this.dialogSettings$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 5), webApi = _b[0], details = _b[1], action = _b[2], scenario = _b[3], dialogSettings = _b[4];
            console.log('webApi object', webApi);
            var resolved = pathToApi
                .replace('{appname}', scenario.inSameContext ? 'auto' : encodeURI(dialogSettings.Context.App.Folder))
                .replace('/api/', "/" + webApi.folder + "/")
                .replace('{controller}', details.controller.replace(/controller/i, ''))
                .replace('{action}', action.name);
            return _this.rootBasedOnScenario(resolved, scenario);
        }));
        _this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([webApi$, apiDetails$, selectedAction$, _this.urlParams$, _this.scenario$]),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([root$, _this.dialogSettings$]),
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[0], 5), webApi = _c[0], details = _c[1], selected = _c[2], urlParams = _c[3], scenario = _c[4], _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[1], 2), root = _d[0], /* item, */ diag = _d[1];
            return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.buildBaseTemplateVars(webApi.name, webApi.path, diag, null, root, scenario)), { webApi: webApi,
                details: details, selected: selected, permissionsHasAnonymous: true, apiCalls: Object(_api_samples__WEBPACK_IMPORTED_MODULE_15__["generateWebApiCalls"])(dnnContext.$2sxc, scenario, context, root, urlParams, selected.verbs) }));
        }));
        return _this;
    }
    DevRestApiComponent.prototype.updateParams = function (event) {
        this.urlParams$.next(event.target.value);
    };
    DevRestApiComponent.prototype.updateAction = function (value) {
        this.selectedActionName$.next(value);
    };
    DevRestApiComponent.ctorParameters = function () { return [
        { type: _app_administration_services__WEBPACK_IMPORTED_MODULE_11__["AppDialogConfigService"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_13__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _app_administration_services_web_apis_service__WEBPACK_IMPORTED_MODULE_12__["WebApisService"] }
    ]; };
    DevRestApiComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"], args: ['className',] }]
    };
    DevRestApiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-dev-rest-api',
            template: _raw_loader_api_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
            styles: [_dev_rest_all_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _header_selector_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_administration_services__WEBPACK_IMPORTED_MODULE_11__["AppDialogConfigService"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_13__["Context"],
            _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_4__["Context"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _app_administration_services_web_apis_service__WEBPACK_IMPORTED_MODULE_12__["WebApisService"]])
    ], DevRestApiComponent);
    return DevRestApiComponent;
}(___WEBPACK_IMPORTED_MODULE_10__["DevRestBase"]));



/***/ }),

/***/ "nVbN":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/info-box/info-box.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"icon-box {{ type }}\">\r\n  <mat-icon>{{ getIcon() }}</mat-icon>\r\n  <strong *ngIf=\"title\" [innerHTML]=\"title\"></strong>\r\n  <br *ngIf=\"title\">\r\n  <ng-content></ng-content>\r\n</p>\r\n");

/***/ }),

/***/ "nhoq":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/data/introduction/introduction.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  To learn more about data you may want to read these <a href=\"https://docs.2sxc.org/index.html\" target=\"_blank\">docs</a>:\n</p>\n<ul>\n  <li><a href=\"https://docs.2sxc.org/basics/data/index.html\" target=\"_blank\">Data & Content-Types in 2sxc</a></li>\n  <li><a href=\"https://docs.2sxc.org/web-api/content-rest-web-api.html\" target=\"_blank\">Content REST API</a></li>\n</ul>\n");

/***/ }),

/***/ "oCHk":
/*!*********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/tab-introduction/tab-introduction.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DevRestTabIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestTabIntroductionComponent", function() { return DevRestTabIntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_introduction_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-introduction.component.html */ "e9ld");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "LBgr");




var DevRestTabIntroductionComponent = /** @class */ (function () {
    function DevRestTabIntroductionComponent() {
        /** List of scenarios */
        this.scenarios = ___WEBPACK_IMPORTED_MODULE_3__["AllScenarios"];
    }
    DevRestTabIntroductionComponent.prototype.ngOnInit = function () {
    };
    DevRestTabIntroductionComponent.ctorParameters = function () { return []; };
    DevRestTabIntroductionComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    DevRestTabIntroductionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dev-rest-tab-introduction',
            template: _raw_loader_tab_introduction_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DevRestTabIntroductionComponent);
    return DevRestTabIntroductionComponent;
}());



/***/ }),

/***/ "p57z":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/tab-permissions/tab-permissions.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h3>Permissions ({{ data.permissions.length }})</h3>\n<p>\n  This target <code>{{ data.name }}</code> has {{ data.permissions.length }} permissions\n  configured.\n  <button mat-icon-button matTooltip=\"Open permissions\" (click)=\"openPermissions()\">\n    <mat-icon [matBadge]=\"data.permissions.length\" matBadgePosition=\"after\" matBadgeColor=\"accent\"\n      matBadgeSize=\"small\" *ngIf=\"data.permissions.length\">\n      person\n    </mat-icon>\n    <mat-icon *ngIf=\"!data.permissions.length\">person</mat-icon>\n  </button>\n</p>\n<p *ngIf=\"!data.permissions.length\" class=\"warning info-box\">\n  <mat-icon>warning</mat-icon>\n  Warning: you don't have any permissions configured. So only Super-Users (Host) will be able to use the API\n  endpoints.\n</p>\n\n<ag-grid-angular class=\"ag-theme-material\" [rowData]=\"data.permissions\" [modules]=\"modules\"\n  [gridOptions]=\"gridOptions\" [style.height]=\"(33 + data.permissions.length * 48) + 'px'\">\n</ag-grid-angular>\n\n<h4>Super-Users (Host) can use all Endpoints</h4>\n<p>\n  As a super-user you can always access these REST endpoints, so this will make development easy.\n  Just remember to change the content-type permissions when you publish your work to public pages.\n</p>\n\n<h4>Set permissions for visitors to use this</h4>\n<p>\n  To let JavaScript access the REST endpoints for normal users, you must set the permissions of the\n  content-type.\n  Usually you will just want to set it like <em>if user has view-permissions, let him read this\n    content-type</em>.\n  In rare cases (eg. JS based forms) you may also want to give it some write permissions. Just be careful.\n  If you give write permissions, you will usually <em>only</em> want to give create, but not edit.\n</p>\n\n<h4>Setting permissions for use outside of DNN</h4>\n<p>\n  When calling API endpoints from a DNN page you will usually use the <code>$2sxc</code> or the DNN\n  Services-Framework.\n  These automatically add some HTTP-Headers (see tab about HTTP Headers) which let DNN determine that the\n  API-Call\n  was made on a specific page/module - and DNN uses this to check the permissions.\n</p>\n<p>\n  IF you are calling the endpoint from outside of DNN then these headers will be missing.\n  Because of this, permissions saying \"If has VIEW permissions, allow read\" will fail - because DNN cannot\n  determine\n  if the user has view permissions.\n</p>\n<p>\n  So to enable use from external, the condition must be \"If has ANONYMOUS permissions, allow ...\".\n  Because the ANONYMOUS check passes even if DNN doesn't know what page the module is on.\n</p>\n");

/***/ }),

/***/ "qUiF":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/api/action-params/action-params.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h3><code>{{data.name}}</code> Parameters</h3>\n\n<p *ngIf=\"!data.parameters.length\" class=\"warning info-box\">\n  <mat-icon>info</mat-icon>\n  This endpoint doesn't seem to use any parameters.\n</p>\n\n<ag-grid-angular *ngIf=\"data.parameters.length\" class=\"ag-theme-material\" [rowData]=\"data.parameters\" [modules]=\"modules\"\n  [gridOptions]=\"gridOptions\" [style.height]=\"(33 + data.parameters.length * 48) + 'px'\">\n</ag-grid-angular>\n\n");

/***/ }),

/***/ "qyvR":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/dev-rest-urls-and-code/dev-rest-urls-and-code.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion multi class=\"rest-urls-accordion\">\r\n  <mat-expansion-panel *ngFor=\"let apiCall of data.apiCalls\">\r\n\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <div class=\"rest-urls-title\">\r\n          <code>{{ apiCall.verb }}</code>: <code>{{ apiCall.url }}</code>\r\n          <span>&nbsp;to {{ apiCall.teaser }}</span>\r\n        </div>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <mat-panel-description style=\"display: block;\">\r\n      <h4>{{ apiCall.instructions }}</h4>\r\n      <p>\r\n        HTTP Verb: <code>{{ apiCall.verb }}</code> <br>\r\n        {{ data.scenario.useVirtual ? 'Virtual' : 'Absolute' }} Url: <code>{{ apiCall.url }}</code>\r\n      </p>\r\n      <p *ngIf=\"apiCall.enableButton\">\r\n        <button mat-raised-button (click)=\"callApiGet(apiCall.url)\">Call and Output to Console</button>\r\n        <ng-container *ngIf=\"apiCall.browseUrl\">\r\n          &nbsp;\r\n          <a [href]=\"apiCall.browseUrl\" target=\"_blank\">Open in Browser</a>\r\n          <span *ngIf=\"data.scenario.useVirtual\">\r\n            (for the demo to work it will add context parameters)\r\n          </span>\r\n        </ng-container>\r\n      </p>\r\n\r\n      <!-- show the code examples -->\r\n      <ng-container *ngFor=\"let code of apiCall.code\">\r\n        <h4>{{ code.title }}</h4>\r\n        <p>{{ code.description }}</p>\r\n        <div class=\"code-example\">\r\n          <pre class=\"code-example__text\">{{ code.code }}</pre>\r\n          <button mat-icon-button class=\"code-example__copy\" matTooltip=\"Copy to clipboard\"\r\n            (click)=\"copyCode(code.code)\">\r\n            <mat-icon>copy</mat-icon>\r\n          </button>\r\n        </div>\r\n\r\n        <!-- show hints / warnings -->\r\n        <app-info-box *ngFor=\"let hint of code.hints\" [type]=\"hint.type\">\r\n          <span [innerHtml]=\"hint.message\"></span>\r\n        </app-info-box>\r\n\r\n      </ng-container>\r\n\r\n    </mat-panel-description>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n");

/***/ }),

/***/ "tHoZ":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/query/introduction/introduction.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DevRestQueryIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestQueryIntroductionComponent", function() { return DevRestQueryIntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_introduction_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./introduction.component.html */ "NcEN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ "LBgr");




var DevRestQueryIntroductionComponent = /** @class */ (function () {
    function DevRestQueryIntroductionComponent() {
        /** List of scenarios */
        this.scenarios = ___WEBPACK_IMPORTED_MODULE_3__["AllScenarios"];
    }
    DevRestQueryIntroductionComponent.prototype.ngOnInit = function () {
    };
    DevRestQueryIntroductionComponent.ctorParameters = function () { return []; };
    DevRestQueryIntroductionComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    DevRestQueryIntroductionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dev-query-introduction',
            template: _raw_loader_introduction_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DevRestQueryIntroductionComponent);
    return DevRestQueryIntroductionComponent;
}());



/***/ }),

/***/ "v+iu":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/query/query.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"templateVars$ | async as data\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>Using REST with Query <code>{{ data.name }}</code></div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <!-- Template below this line -->\r\n\r\n  <app-selector-with-help label=\"Choose Scenario\" [items]=\"scenarios\" [value]=\"data.scenario.key\"\r\n    (valueChange)=\"changeScenario($event)\">\r\n  </app-selector-with-help>\r\n\r\n  <mat-tab-group dynamicHeight color=\"accent\"\r\n    class=\"mat-tab-group-fit-height mat-tab-group-fancy-scrollbar default-fonts\">\r\n\r\n    <!-- Introduction -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Introduction\">\r\n        <mat-icon>emoji_objects</mat-icon>\r\n        <span>Introduction</span>\r\n      </div>\r\n\r\n      <app-dev-query-introduction [data]=\"data\"></app-dev-query-introduction>\r\n\r\n      <app-dev-rest-tab-introduction [data]=\"data\"></app-dev-rest-tab-introduction>\r\n    </mat-tab>\r\n\r\n    <!-- Absolute / Virtual URLs -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\"\r\n        [matTooltip]=\"(data.scenario.useVirtual ? 'Virtual ' : 'Absolute ') + 'REST URLs'\">\r\n        <mat-icon svgIcon=\"code-curly\"></mat-icon>\r\n        <span>Call {{ data.scenario.useVirtual ? 'Virtual' : 'Absolute' }} REST URLs</span>\r\n      </div>\r\n\r\n      <app-dev-rest-tab-examples-intro [data]=\"data\"></app-dev-rest-tab-examples-intro>\r\n\r\n      <!-- Custom Parameters for calling -->\r\n      <div class=\"params-form\">\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Stream Name(s) to Limit, comma-separated</mat-label>\r\n          <input matInput placeholder=\"Default\" [value]=\"streamNames$.value\" (input)=\"updateStreams($event)\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Additional Url Parameters</mat-label>\r\n          <input matInput placeholder=\"?id=27\" [value]=\"urlParams$.value\" (input)=\"updateParams($event)\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- REST Tab showing the urls and code snippets -->\r\n      <app-dev-rest-urls-and-code [data]=\"data\"></app-dev-rest-urls-and-code>\r\n    </mat-tab>\r\n\r\n    <!-- Permissions explained -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Permissions\">\r\n        <mat-icon>person</mat-icon>\r\n        <span>Permissions ({{ data.permissions.length }})</span>\r\n        <mat-icon *ngIf=\"!data.permissions.length\">warning</mat-icon>\r\n      </div>\r\n      <app-dev-rest-tab-permissions [data]=\"data\"></app-dev-rest-tab-permissions>\r\n    </mat-tab>\r\n\r\n    <!-- HTTP Headers Explained -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"HTTP headers and auto\">\r\n        <mat-icon>perm_device_information</mat-icon>\r\n        <span>HTTP headers & &nbsp;<code>/auto/</code></span>\r\n      </div>\r\n      <app-dev-rest-tab-headers [data]=\"data\"></app-dev-rest-tab-headers>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n\r\n\r\n</ng-container>\r\n");

/***/ }),

/***/ "xPHQ":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/dev-rest/api/api.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"templateVars$ | async as data\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>Using REST with API <code>{{ data.webApi?.name }}</code></div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <!-- Template below this line -->\r\n\r\n  <div style=\"display: flex; flex-wrap: wrap;\">\r\n    <app-selector-with-help style=\"display: block; max-width: 100%;\" label=\"Choose Scenario\" [items]=\"scenarios\"\r\n      [value]=\"data.scenario.key\" (valueChange)=\"changeScenario($event)\">\r\n    </app-selector-with-help>\r\n\r\n    <mat-form-field color=\"accent\" style=\"width: 360px; max-width: calc(100% - 40px);\">\r\n      <mat-label>Select an Action on the Controller</mat-label>\r\n      <mat-select [value]=\"data.selected?.name\" (selectionChange)=\"updateAction($event.value)\">\r\n        <mat-option *ngFor=\"let action of data.details.actions\" [value]=\"action.name\">\r\n          {{ action.name }} ({{ action.verbs.join(', ') }})\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <!-- now the tabs -->\r\n\r\n  <mat-tab-group dynamicHeight color=\"accent\"\r\n    class=\"mat-tab-group-fit-height mat-tab-group-fancy-scrollbar default-fonts\">\r\n\r\n    <!-- Introduction -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Introduction\">\r\n        <mat-icon>emoji_objects</mat-icon>\r\n        <span>Introduction</span>\r\n      </div>\r\n\r\n      <app-dev-api-introduction [data]=\"data\"></app-dev-api-introduction>\r\n\r\n      <app-dev-rest-tab-introduction [data]=\"data\"></app-dev-rest-tab-introduction>\r\n    </mat-tab>\r\n\r\n    <!-- Absolute / Virtual URLs -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\"\r\n        [matTooltip]=\"(data.scenario.useVirtual ? 'Virtual ' : 'Absolute ') + 'REST URLs'\">\r\n        <!-- <mat-icon>code</mat-icon> -->\r\n        <mat-icon svgIcon=\"code-curly\"></mat-icon>\r\n        <span>Call {{ data.scenario.useVirtual ? 'Virtual' : 'Absolute' }} REST URLs</span>\r\n      </div>\r\n\r\n      <app-dev-rest-tab-examples-intro [data]=\"data\"></app-dev-rest-tab-examples-intro>\r\n\r\n      <!-- Show Params of this Action -->\r\n      <app-dev-rest-api-action-params [data]=\"data.selected\"></app-dev-rest-api-action-params>\r\n\r\n      <mat-accordion multi class=\"rest-urls-accordion\">\r\n        <mat-expansion-panel>\r\n\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <div>Specify Additional Test Parameters (Url / POST)</div>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <mat-panel-description style=\"display: block;\">\r\n            <div class=\"form-with-textarea\">\r\n              <mat-form-field appearance=\"standard\" color=\"accent\">\r\n                <mat-label>Additional Url Parameters</mat-label>\r\n                <input matInput placeholder=\"?id=27\" [value]=\"urlParams$.value\" (input)=\"updateParams($event)\">\r\n              </mat-form-field>\r\n              <mat-form-field appearance=\"standard\" color=\"accent\">\r\n                <mat-label>Post body</mat-label>\r\n                <textarea matInput [rows]=\"10\" placeholder=\"Placeholder\" [value]=\"urlParams$.value\"\r\n                  (input)=\"updateParams($event)\">\r\n                </textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n\r\n      <!-- REST Tab showing the urls and code snippets -->\r\n      <app-dev-rest-urls-and-code [data]=\"data\"></app-dev-rest-urls-and-code>\r\n    </mat-tab>\r\n\r\n    <!-- Permissions explained -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Permissions\">\r\n        <mat-icon>person</mat-icon>\r\n        <span>Permissions </span>\r\n      </div>\r\n      <app-dev-api-permissions [data]=\"data\"></app-dev-api-permissions>\r\n    </mat-tab>\r\n\r\n    <!-- HTTP Headers Explained -->\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"HTTP headers and auto\">\r\n        <mat-icon>perm_device_information</mat-icon>\r\n        <span>HTTP headers & &nbsp;<code>/auto/</code></span>\r\n      </div>\r\n      <app-dev-rest-tab-headers [data]=\"data\"></app-dev-rest-tab-headers>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</ng-container>\r\n");

/***/ }),

/***/ "yXwb":
/*!****************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/dev-rest/dev-rest-all.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep code,\ncode,\npre {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n\npre {\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n\n.rest-urls-accordion {\n  display: block;\n  margin: 8px;\n}\n\n.rest-urls-title {\n  display: flex;\n  align-items: center;\n}\n\n.code-example {\n  position: relative;\n}\n\n.code-example__text {\n  min-height: 40px;\n}\n\n.code-example__copy {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.params-form {\n  display: flex;\n  max-width: 600px;\n}\n\n.params-form .mat-form-field:not(:first-of-type) {\n  margin-left: 8px;\n}\n\n.form-with-textarea {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGV2LXJlc3QtYWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OztFQUdFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFFRTtFQUNFLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJRTtFQUNFLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxnQkFBQTtBQUhGIiwiZmlsZSI6ImRldi1yZXN0LWFsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhlIGZpcnN0IG9uZSBpcyBuZWVkZWQgc28gPGNvZGU+IGNvbG9yaW5nIHdvcmtzIGluIGR5bmFtaWMgaW5qZWN0ZWQgaHRtbCAodGlwcyBldGMuKVxyXG46aG9zdCA6Om5nLWRlZXAgY29kZSxcclxuY29kZSxcclxucHJlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG5cclxucHJlIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgd29yZC1icmVhazoga2VlcC1hbGw7XHJcbn1cclxuXHJcbi5yZXN0LXVybHMtYWNjb3JkaW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLnJlc3QtdXJscy10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29kZS1leGFtcGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gICZfX2NvcHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFyYW1zLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXdpdGgtdGV4dGFyZWEge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=dev-rest-module.js.map