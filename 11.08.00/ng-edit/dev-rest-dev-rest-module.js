(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-rest-dev-rest-module"],{

/***/ "/XEv":
/*!****************************************************!*\
  !*** ./src/app/dev-rest/dev-rest-dialog.config.ts ***!
  \****************************************************/
/*! exports provided: devRestDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devRestDialog", function() { return devRestDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var devRestDialog = {
    name: 'DEV_REST_DIALOG',
    initContext: true,
    panelSize: 'large',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var DevRestComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./dev-rest.component */ "Ztmg"))];
                    case 1:
                        DevRestComponent = (_a.sent()).DevRestComponent;
                        return [2 /*return*/, DevRestComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "10hl":
/*!*************************************************************!*\
  !*** ./src/app/dev-rest/help-popup/help-popup.component.ts ***!
  \*************************************************************/
/*! exports provided: HelpPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPopupComponent", function() { return HelpPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_help_popup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./help-popup.component.html */ "QJ8j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");




var HelpPopupComponent = /** @class */ (function () {
    function HelpPopupComponent(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
    }
    HelpPopupComponent.prototype.ngOnInit = function () {
    };
    HelpPopupComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    HelpPopupComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    HelpPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-help-popup',
            template: _raw_loader_help_popup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], HelpPopupComponent);
    return HelpPopupComponent;
}());



/***/ }),

/***/ "4N8g":
/*!*****************************************************************************!*\
  !*** ./src/app/dev-rest/selector-with-help/selector-with-help.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectorWithHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorWithHelpComponent", function() { return SelectorWithHelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_selector_with_help_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./selector-with-help.component.html */ "PGSh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "PJ+w");





var SelectorWithHelpComponent = /** @class */ (function () {
    function SelectorWithHelpComponent(dialog) {
        this.dialog = dialog;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    SelectorWithHelpComponent.prototype.ngOnInit = function () {
    };
    SelectorWithHelpComponent.prototype.selectionChange = function (key) {
        var _this = this;
        this.value = key;
        var scenario = this.items.find(function (item) { return item.key === _this.value; });
        this.valueChange.emit(scenario);
    };
    SelectorWithHelpComponent.prototype.showHelp = function () {
        var _this = this;
        var scenario = this.items.find(function (item) { return item.key === _this.value; });
        var data = {
            name: scenario.name,
            body: scenario.description,
            notes: scenario.notes,
        };
        this.dialog.open(___WEBPACK_IMPORTED_MODULE_4__["HelpPopupComponent"], {
            width: '500px',
            data: data,
            autoFocus: false,
        });
    };
    SelectorWithHelpComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    SelectorWithHelpComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    SelectorWithHelpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-selector-with-help',
            template: _raw_loader_selector_with_help_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], SelectorWithHelpComponent);
    return SelectorWithHelpComponent;
}());



/***/ }),

/***/ "Llgl":
/*!************************************************!*\
  !*** ./src/app/dev-rest/scenarios/scenario.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "PGSh":
/*!************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/dev-rest/selector-with-help/selector-with-help.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field color=\"accent\" style=\"width: 400px;\">\r\n  <mat-label>{{ label }}</mat-label>\r\n  <mat-select [value]=\"value\" (selectionChange)=\"selectionChange($event.value)\">\r\n    <mat-option *ngFor=\"let item of items\" [value]=\"item.key\">{{ item.name }}</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<button mat-icon-button (click)=\"showHelp()\">\r\n  <mat-icon>help_outline</mat-icon>\r\n</button>\r\n");

/***/ }),

/***/ "PJ+w":
/*!***********************************!*\
  !*** ./src/app/dev-rest/index.ts ***!
  \***********************************/
/*! exports provided: AllScenarios, ApiCall, CodeSample, generateApiCalls, HelpPopupComponent, SelectorWithHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scenarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenarios */ "axrs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AllScenarios", function() { return _scenarios__WEBPACK_IMPORTED_MODULE_0__["AllScenarios"]; });

/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples */ "q/kN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiCall", function() { return _examples__WEBPACK_IMPORTED_MODULE_1__["ApiCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSample", function() { return _examples__WEBPACK_IMPORTED_MODULE_1__["CodeSample"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateApiCalls", function() { return _examples__WEBPACK_IMPORTED_MODULE_1__["generateApiCalls"]; });

/* harmony import */ var _help_popup_help_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-popup/help-popup.component */ "10hl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelpPopupComponent", function() { return _help_popup_help_popup_component__WEBPACK_IMPORTED_MODULE_2__["HelpPopupComponent"]; });

/* harmony import */ var _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector-with-help/selector-with-help.component */ "4N8g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectorWithHelpComponent", function() { return _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_3__["SelectorWithHelpComponent"]; });







/***/ }),

/***/ "QJ8j":
/*!********************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/dev-rest/help-popup/help-popup.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">\r\n    <div>{{ dialogData.name }}</div>\r\n    <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"dialog-component-content fancy-scrollbar-light\">\r\n  <p class=\"dialog-description\">\r\n    {{ dialogData.body }}\r\n  </p>\r\n\r\n  <p class=\"dialog-description\" *ngIf=\"dialogData.notes\">\r\n    <em>{{ dialogData.notes }}</em>\r\n  </p>\r\n</div>\r\n");

/***/ }),

/***/ "R03p":
/*!*****************************************************!*\
  !*** ./src/app/dev-rest/scenarios/all-scenarios.ts ***!
  \*****************************************************/
/*! exports provided: AllScenarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllScenarios", function() { return AllScenarios; });
var AllScenarios = [
    {
        key: 'internal',
        in2sxc: true,
        useVirtual: true,
        inSameSite: true,
        inSameContext: true,
        name: 'JS in this App on a page (easiest)',
        description: "Internal access means that your JS code is running in a 2sxc-module on a DNN-page.\n    This is the default access.\n    In this scenario, various headers are included in the request,\n    incl. the module it's coming from, which allows various automatic things to happen.\n    This results in simpler REST requests.",
        notes: "This mode makes it easy to re-distribute your app, as you can perform API calls relative to the module that's hosting it.\n    This means, that even if you export/import the app to another system, the API-calls stay the same.",
    },
    {
        key: 'internal2',
        in2sxc: true,
        useVirtual: true,
        inSameSite: true,
        inSameContext: false,
        name: 'JS in a DIFFERENT 2sxc App on the SAME site',
        description: "When using JS from another app, you cannot auto-detect of the app, so the path is slightly different.",
        notes: '',
    },
    // {
    //   key: 'external1',
    //   in2sxc: false,
    //   useVirtual: false,
    //   inSameSite: false,
    //   inSameContext: false,
    //   name: 'JS from a DIFFERENT site',
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
        name: 'External (other website, mobile device, etc.)',
        description: "External access means that the JS code could be on another page / module in DNN (which is not the same app),\n    or it could be coming from a mobile App, or another website altogether.\n    In this case, automatic app-detection can't work, as various headers are missing, and you must access the endpoint more explicitly.",
        notes: "This mode requires you to define the exact, full URL, so if you create copies of this app on another system,\n    the URL must be updated to access that system specifically.\n    Note that our samples are in JS, you'll have to figure it out yourself for other programming languages.",
    },
];


/***/ }),

/***/ "Ztmg":
/*!************************************************!*\
  !*** ./src/app/dev-rest/dev-rest.component.ts ***!
  \************************************************/
/*! exports provided: DevRestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestComponent", function() { return DevRestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_dev_rest_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dev-rest.component.html */ "rsxr");
/* harmony import */ var _dev_rest_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev-rest.component.scss */ "aq0F");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var projects_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! projects/edit */ "geKs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! . */ "PJ+w");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "KoVM");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
















var pathToContent = 'app/{appname}/content/{typename}';
var DevRestComponent = /** @class */ (function () {
    function DevRestComponent(dialogRef, route, snackBar, http, contentTypesService, appDialogConfigService, entityService, 
    /** Context for this dialog. Used for appId, zoneId, tabId, etc. */
    context, 
    /** dnn-sxc-angular context. Used to resolve urls */
    dnnContext) {
        this.dialogRef = dialogRef;
        this.route = route;
        this.snackBar = snackBar;
        this.http = http;
        this.contentTypesService = contentTypesService;
        this.appDialogConfigService = appDialogConfigService;
        this.entityService = entityService;
        this.context = context;
        this.dnnContext = dnnContext;
        this.hostClass = 'dialog-component dialog-component--no-actions';
        /** List of scenarios */
        this.scenarios = ___WEBPACK_IMPORTED_MODULE_12__["AllScenarios"];
        this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
        this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](null);
        this.dialogSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](null);
        this.scenario$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](this.scenarios[0]);
        this.modeInternal$ = this.scenario$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (scenario) { return scenario.key === 'internal'; }));
        this.root$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])([this.contentType$, this.scenario$, this.dialogSettings$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), contentType = _b[0], scenario = _b[1], dialogSettings = _b[2];
            if (contentType == null || dialogSettings == null) {
                return '';
            }
            // const internal = scenario === AllScenarios[0];
            var resolved = pathToContent
                .replace('{typename}', contentType.Name)
                .replace('{appname}', scenario.inSameContext ? 'auto' : encodeURI(dialogSettings.Context.App.Folder));
            var domainPrefix = document.location.protocol + '//' + document.location.host;
            return scenario.useVirtual
                ? resolved
                : (scenario.inSameSite ? '' : domainPrefix) + dnnContext.$2sxc.http.apiUrl(resolved);
        }));
        // Get an item of this type for building urls
        this.itemOfThisType$ = entityService.reactiveEntities(this.contentType$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (ct) { return !!ct; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (ct) { return ({ contentTypeName: ct.StaticName, filter: '' }); })))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (list) { return list.length ? list[0] : null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (i) { return !!i; }));
        // we need to mix 2 combineLatest, because a combinelatest can only take 6 streams
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])([
            Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])([this.contentType$, this.scenario$, this.modeInternal$]),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])([this.root$, this.itemOfThisType$, this.dialogSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (d) { return !!d; }))]),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[0], 3), contentType = _c[0], scenario = _c[1], modeInternal = _c[2], _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[1], 3), root = _d[0], item = _d[1], diag = _d[2];
            return ({
                contentType: contentType,
                currentScenario: scenario,
                modeInternal: modeInternal,
                root: root,
                itemId: item.Id,
                itemGuid: item.Value,
                apiCalls: Object(___WEBPACK_IMPORTED_MODULE_12__["generateApiCalls"])(dnnContext.$2sxc, scenario, context.moduleId, root, item.Id),
                folder: encodeURI(diag.Context.App.Folder),
                moduleId: context.moduleId,
                scenario: scenario,
            });
        }));
    }
    DevRestComponent.prototype.ngOnInit = function () {
        this.contentTypesService.retrieveContentType(this.contentTypeStaticName).subscribe(this.contentType$);
        this.appDialogConfigService.getDialogSettings().subscribe(this.dialogSettings$);
    };
    DevRestComponent.prototype.ngOnDestroy = function () {
        this.contentType$.complete();
        this.dialogSettings$.complete();
        this.scenario$.complete();
    };
    DevRestComponent.prototype.changeScenario = function (scenario) {
        this.scenario$.next(scenario);
    };
    DevRestComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    // todo: 2dm - probably open a dialog showing the results etc.
    DevRestComponent.prototype.callApiGet = function (url) {
        var _this = this;
        this.http.get(url).subscribe(function (res) {
            console.log("Called " + url + " and got this:", res);
            _this.openSnackBar("Called " + url + ". You can see the full result in the F12 console", 'API call returned');
        });
        this.openSnackBar("Calling " + url + ". You can see the full result in the F12 console", 'API call sent');
    };
    DevRestComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    DevRestComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_14__["ContentTypesService"] },
        { type: _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_13__["AppDialogConfigService"] },
        { type: projects_edit__WEBPACK_IMPORTED_MODULE_9__["EntityService"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_15__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__["Context"] }
    ]; };
    DevRestComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"], args: ['className',] }]
    };
    DevRestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-dev-rest',
            template: _raw_loader_dev_rest_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
            // we need preserve whitespace, as many conditional parts are put together, and then spaces are missing between them
            preserveWhitespaces: true,
            styles: [_dev_rest_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_14__["ContentTypesService"],
            _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_13__["AppDialogConfigService"],
            projects_edit__WEBPACK_IMPORTED_MODULE_9__["EntityService"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_15__["Context"],
            _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_3__["Context"]])
    ], DevRestComponent);
    return DevRestComponent;
}());



/***/ }),

/***/ "aq0F":
/*!**************************************************!*\
  !*** ./src/app/dev-rest/dev-rest.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab-icon {\n  margin-right: 8px;\n}\n\ncode, pre {\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: #eeeeee;\n}\n\npre {\n  white-space: pre-wrap;\n  word-break: keep-all;\n}\n\ncode.route-in-title {\n  max-width: 50%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\np.warning {\n  background-color: lightcoral;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9kZXYtcmVzdC9kZXYtcmVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUVFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0FBREYiLCJmaWxlIjoicHJvamVjdHMvbmctZGlhbG9ncy9zcmMvYXBwL2Rldi1yZXN0L2Rldi1yZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50YWItaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbmNvZGUsIHByZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsXHJcbn1cclxuXHJcbmNvZGUucm91dGUtaW4tdGl0bGUge1xyXG4gIC8vIHRvZG86IFNQTSBwcm9iYWJseSBjb3JyZWN0IHRoaXMgdmFsdWUgbGF0ZXIgb24gd2hlbiBzY3JvbGxpbmcgaXMgZml4ZWRcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbnAud2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxufVxyXG5cclxuLy8gVE9ETzogU1BNXHJcbi8vIFBscyBoZWxwIHNvIGFsbCBQIC8gVUwvT0wgLyBMSSBldGMuIGhhdmUgdGhlIHJpZ2h0IGZvbnQgc2l6ZSBldGMuXHJcbi8vIHVzaW5nIHZhcmlhYmxlcywgbm90IHJlcGVhdGluZyB0aGUgZGVmaW5pdGlvbiBoZXJlXHJcbiJdfQ== */");

/***/ }),

/***/ "axrs":
/*!*********************************************!*\
  !*** ./src/app/dev-rest/scenarios/index.ts ***!
  \*********************************************/
/*! exports provided: AllScenarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _all_scenarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-scenarios */ "R03p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AllScenarios", function() { return _all_scenarios__WEBPACK_IMPORTED_MODULE_0__["AllScenarios"]; });

/* harmony import */ var _scenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenario */ "Llgl");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "iesF":
/*!*******************************************************!*\
  !*** ./src/app/dev-rest/examples/generate-samples.ts ***!
  \*******************************************************/
/*! exports provided: generateApiCalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateApiCalls", function() { return generateApiCalls; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "PJ+w");

// tslint:disable: curly
function generateApiCalls($2sxc, scenario, moduleId, root, id) {
    var virtual = root[0] !== '/';
    root = root + '/';
    var withId = root + id;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'GET', root, 'read all', 'Read list of all items', true, snippetsGet($2sxc, scenario, root, moduleId), $2sxc.http.apiUrl(root)),
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'GET', withId, 'read one', 'Read a single item #' + id, true, snippetsGet($2sxc, scenario, withId, moduleId), $2sxc.http.apiUrl(withId)),
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'POST', root, 'create', 'Create an item', false, snippetsCreate(scenario, root, moduleId)),
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'POST', withId, 'update', 'Update the item #' + id, false, snippetsUpdate(scenario, withId, moduleId)),
        new ___WEBPACK_IMPORTED_MODULE_0__["ApiCall"](virtual, 'DELETE', withId, 'delete', 'Delete item #' + id, false, snippetsDelete(scenario, withId, moduleId)),
    ];
}
function snippetsGet($2sxc, scenario, path, moduleId) {
    var virtual = path[0] !== '/';
    var list = [];
    if (scenario.inSameContext)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Example with global $2sxc and event-context', 'This example finds the context information from the HTML where an action started.', "\n<button onclick=\"$2sxc(this).webApi.get('" + path + "').then(data => console.log(data))\">\n  get it\n</button>"));
    if (scenario.in2sxc)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]("Example with global $2sxc and a Module-Id " + moduleId, "This is how you get the context when your code doesn't start with a DOM context, so you need the moduleId.", "\n// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n// now get the data in the promise\nsxc.webApi.get('" + path + "')\n  .then(data => {\n    console.log(data)\n  });"), new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]("Same example as one-liner", 'This is the same as above, but as a one-liner so you can run it directly in the F12 console right now.', "$2sxc(" + moduleId + ").webApi.get('" + path + "').then(data => console.log('just got:', data));", true));
    if (scenario.in2sxc && scenario.inSameContext)
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Example where you get the Module-Id from Razor', "This example doesn't use a fixed moduleId but let's the Razor add the current moduleId when the page is rendered.", "\n// this will be replaced on the server with the ID\nvar moduleId = @Dnn.Module.ModuleID;\nvar sxc = $2sxc(moduleId);\nvar data = sxc.webApi.get('" + path + "');"));
    // jquery examples, they differ based on the scenario
    var endPointGetter = virtual ? "$2sxc.http.apiUrl('" + path + "')" : "'" + path + "'";
    if (scenario.inSameSite) {
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery inside DNN', "This example uses jQuery instead of the $2sxc to do the AJAX call.\n      It shows you how to resolve the virtual path for use in other ways.", "\nvar endpoint = " + endPointGetter + ";\n$.ajax({\n  url:endpoint,\n  beforeSend: $.dnnSF(" + moduleId + ").setModuleHeaders\n})}).then(data => {\n  console.log('Got this data:', data);\n})"));
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery as single-liner', "The same example as above, just as single-liner so you can test it directly in the F12 console.\n      This will only work if you're on a DNN page with this module.", "$.ajax({url: " + endPointGetter + ", beforeSend: $.dnnSF(" + moduleId + ").setModuleHeaders }).then(data => console.log(data))"));
    }
    else {
        list.push(new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Using jQuery in another Site or External', "This example uses jQuery and doesn't use $2sxc or the DNN ServicesFramework,\n      because they would be either missing, or give wrong context-headers.\n      IMPORTANT: This will only work if you set anonymous permissions on the content-type.", "\nvar endpoint = '" + path + "';\n$.ajax({\nurl:endpoint,\n})}).then(data => {\n  console.log('Got this data:', data);\n})"));
    }
    // return generated snippets
    return list;
}
/** Snippets for basic Post-Create */
function snippetsCreate(scenario, path, moduleId) {
    var showWarning = !scenario.inSameContext;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Basic Example', "This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.", "// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n\n// The object we'll send to get created. It's just a simple object with properties\nvar newThing = {\n  property1: 17,\n  property2: 'Some Text',\n  // related items like tags can be assigned with IDs\n  // which you would usually get from somewhere first\n  propertyPointingToOtherIds: [74,50203],\n};\n\n// now create it and get the id back\nsxc.webApi.post('" + path + "', newThing)\n  .then(data => {\n    console.log('Got this ID information: ', data)\n  });", false, showWarning ? "WARNING: We only prepared the basic example running in the same app. You can of course also run this elsewhere,\n  but you'll have to compare it with the GET examples to be sure you have the right headers etc. " : ''),
    ];
}
/** Snippets for basic Post-Update */
function snippetsUpdate(scenario, path, moduleId) {
    var showWarning = !scenario.inSameContext;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Basic Example', "This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.", "// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n\n// The object we'll send to update the data. It's just a simple object with properties\nvar updateProperty1And2 = {\n  property1: 2742,\n  property2: 'Changed Text',\n};\n\n// now update the item\nsxc.webApi.post('" + path + "', updateProperty1And2)\n  .then(data => {\n    console.log('Update completed', data)\n  });", false, showWarning ? "WARNING: We only prepared the basic example running in the same app. You can of course also run this elsewhere,\n  but you'll have to compare it with the GET examples to be sure you have the right headers etc. " : ''),
    ];
}
/** Snippets for basic Post-Update */
function snippetsDelete(scenario, path, moduleId) {
    var showWarning = !scenario.inSameContext;
    return [
        new ___WEBPACK_IMPORTED_MODULE_0__["CodeSample"]('Basic Example', "This example uses the ModuleId to get the context information.\nTo see other ways to get the context and headers, check out the GET examples.\nNote that this snippet doesn't use real names of properties to add.", "// get the sxc-controller for this module\nvar sxc = $2sxc(" + moduleId + ");\n\n// delete the item\nsxc.webApi.delete('" + path + "')\n  .then(data => {\n    console.log('Delete completed', data)\n  });", false, showWarning ? "WARNING: We only prepared the basic example running in the same app. You can of course also run this elsewhere,\n  but you'll have to compare it with the GET examples to be sure you have the right headers etc. " : ''),
    ];
}


/***/ }),

/***/ "pGpU":
/*!***********************************************!*\
  !*** ./src/app/dev-rest/examples/api-call.ts ***!
  \***********************************************/
/*! exports provided: ApiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCall", function() { return ApiCall; });
var ApiCall = /** @class */ (function () {
    function ApiCall(virtual, verb, url, teaser, instructions, enableButton, code, browseUrl) {
        if (code === void 0) { code = []; }
        if (browseUrl === void 0) { browseUrl = null; }
        this.virtual = virtual;
        this.verb = verb;
        this.url = url;
        this.teaser = teaser;
        this.instructions = instructions;
        this.enableButton = enableButton;
        this.code = code;
        this.browseUrl = browseUrl;
    }
    return ApiCall;
}());



/***/ }),

/***/ "plvx":
/*!**************************************************!*\
  !*** ./src/app/dev-rest/examples/code-sample.ts ***!
  \**************************************************/
/*! exports provided: CodeSample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSample", function() { return CodeSample; });
var CodeSample = /** @class */ (function () {
    function CodeSample(title, description, code, 
    // public wrap = false,
    runInConsole, warning) {
        if (runInConsole === void 0) { runInConsole = false; }
        if (warning === void 0) { warning = ''; }
        this.title = title;
        this.description = description;
        this.code = code;
        this.runInConsole = runInConsole;
        this.warning = warning;
        // the code often has a leading new-line - so we'll trim this
        this.code = this.code.trim();
    }
    return CodeSample;
}());



/***/ }),

/***/ "q/kN":
/*!********************************************!*\
  !*** ./src/app/dev-rest/examples/index.ts ***!
  \********************************************/
/*! exports provided: ApiCall, CodeSample, generateApiCalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-call */ "pGpU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiCall", function() { return _api_call__WEBPACK_IMPORTED_MODULE_0__["ApiCall"]; });

/* harmony import */ var _code_sample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-sample */ "plvx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSample", function() { return _code_sample__WEBPACK_IMPORTED_MODULE_1__["CodeSample"]; });

/* harmony import */ var _generate_samples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-samples */ "iesF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateApiCalls", function() { return _generate_samples__WEBPACK_IMPORTED_MODULE_2__["generateApiCalls"]; });






/***/ }),

/***/ "rsxr":
/*!*******************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/dev-rest/dev-rest.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"templateVars$ | async as data\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>Using REST with {{ data.contentType?.Name }}</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <mat-dialog-content class=\"dialog-component-content fancy-scrollbar-light\" style=\"height: 100%\">\r\n    <!-- TODO: SPM - pls help so scrolling works correctly -->\r\n    <app-selector-with-help label=\"Choose Scenario\" [items]=\"scenarios\" [value]=\"data.scenario.key\"\r\n      (valueChange)=\"changeScenario($event)\">\r\n    </app-selector-with-help>\r\n\r\n    <ng-container *ngTemplateOutlet=\"restTabs\"></ng-container>\r\n  </mat-dialog-content>\r\n\r\n  <ng-template #restTabs>\r\n    <mat-tab-group color=\"accent\">\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"tab-icon\">emoji_objects</mat-icon>\r\n          Introduction\r\n        </ng-template>\r\n        <p class=\"dialog-description\">\r\n          All data can be used in JavaScript, SPAs or anywhere with the REST API\r\n          (see <a href=\"https://docs.2sxc.org/specs/web-api/intro.html\" target=\"_blank\">docs</a>).\r\n          Use this for things like:\r\n        </p>\r\n        <ul>\r\n          <li>Creating SPAs in DNN/2sxc</li>\r\n          <li>Getting data for mobile apps</li>\r\n          <li>Sharing data to other platforms</li>\r\n          <li>Using DNN/2sxc as a headless CMS</li>\r\n        </ul>\r\n        <p class=\"dialog-description\">\r\n          Just set off HTTP <code>GET</code> requests or similar\r\n          to the endpoint like <code>{{ data.root }}</code>. You can find the full list with example code\r\n          in the next tabs.\r\n          Make sure you also read about permissions and HTTP headers.\r\n        </p>\r\n        <h3>Scenarios</h3>\r\n        <ng-container *ngFor=\"let scenario of scenarios\">\r\n          <h4>Scenario: {{ scenario.name }}</h4>\r\n          <p class=\"dialog-description\">\r\n            {{ scenario.description }}\r\n          </p>\r\n          <p class=\"dialog-description\" *ngIf=\"scenario.notes\">\r\n            <em>\r\n              {{ scenario.notes }}\r\n            </em>\r\n          </p>\r\n        </ng-container>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"tab-icon\">code</mat-icon>\r\n          {{ data.scenario.useVirtual ? \"Virtual \" : \"Absolute \"}} REST URLs\r\n        </ng-template>\r\n          <p class=\"dialog-description\" *ngIf=\"data.scenario.useVirtual\">\r\n            Virtual REST URLs are short. They will be resolved internally\r\n            to the full length (based on the dnn-version, current portal, etc.)\r\n            thanks to $2sxc JS API. This happens when you use the\r\n            <a href=\"https://docs.2sxc.org/specs/js/sxcewebapi.html\" target=\"_blank\">\r\n              $2sxc(<em>id-or-htmlnode</em>).webApi.get(...)\r\n            </a>\r\n            or if you use\r\n            <a href=\"https://https://www.npmjs.com/package/@2sic.com/dnn-sxc-angular\" target=\"_blank\">\r\n              dnn-sxc-angular (npm package)\r\n            </a>\r\n            (which also passes url-resolving through $2sxc).\r\n          </p>\r\n          <p class=\"dialog-description\">\r\n            The examples below use real values to make it easier to get started.\r\n            The values used are the current content-type <code>{{ data.contentType.Name }}</code>,\r\n            the current Module ID <code>{{ data.moduleId }}</code>\r\n            and the folder of the current App folder <code>{{ data.folder }}</code> (where needed).\r\n            The code also looked up an item of this type and will use it's ID <code>{{data.itemId}}</code> in the examples.\r\n          </p>\r\n\r\n          <ng-container *ngTemplateOutlet=\"restUrls\"></ng-container>\r\n      </mat-tab>\r\n\r\n      <!-- Permissions explained -->\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"tab-icon\">person</mat-icon>\r\n          Permissions ({{ data.contentType.Permissions.Count }})\r\n          <mat-icon *ngIf=\"data.contentType.Permissions.Count === 0\">warning</mat-icon>\r\n        </ng-template>\r\n          <h3>Permissions ({{ data.contentType.Permissions.Count }})</h3>\r\n          <p class=\"dialog-description\">\r\n            This content-type ({{ data.contentType.Name }}) has {{ data.contentType.Permissions.Count }} permissions configured.\r\n          </p>\r\n          <p class=\"dialog-description warning\" *ngIf=\"data.contentType.Permissions.Count === 0\">\r\n            <mat-icon>warning</mat-icon>\r\n            Warning: you don't have any permissions configured. So only Super-Users (Host) will be able to use the API endpoints.\r\n          </p>\r\n\r\n\r\n          <h4>Super-Users (Host) can use all Endpoints</h4>\r\n          <p class=\"dialog-description\">\r\n            As a super-user you can always access these REST endpoints, so this will make development easy.\r\n            Just remember to change the content-type permissions when you publish your work to public pages.\r\n          </p>\r\n\r\n          <h4>Set permissions for visitors to use this</h4>\r\n          <p class=\"dialog-description\">\r\n            To let JavaScript access the REST endpoints for normal users, you must set the permissions of the content-type.\r\n            Usually you will just want to set it like <em>if user has view-permissions, let him read this content-type</em>.\r\n            In rare cases (eg. JS based forms) you may also want to give it some write permissions. Just be careful.\r\n            If you give write permissions, you will usually <em>only</em> want to give create, but not edit.\r\n          </p>\r\n\r\n          <h4>Setting permissions for use outside of DNN</h4>\r\n          <p class=\"dialog-description\">\r\n            When calling API endpoints from a DNN page you will usually use the <code>$2sxc</code> or the DNN Services-Framework.\r\n            These automatically add some HTTP-Headers (see tab about HTTP Headers) which let DNN determine that the API-Call\r\n            was made on a specific page/module - and DNN uses this to check the permissions.\r\n          </p>\r\n          <p class=\"dialog-description\">\r\n            IF you are calling the endpoint from outside of DNN then these headers will be missing.\r\n            Because of this, permissions saying \"If has VIEW permissions, allow read\" will fail - because DNN cannot determine\r\n            if the user has view permissions.\r\n          </p>\r\n          <p class=\"dialog-description\">\r\n            So to enable use from external, the condition must be \"If has ANONYMOUS permissions, allow ...\".\r\n            Because the ANONYMOUS check passes even if DNN doesn't know what page the module is on.\r\n          </p>\r\n      </mat-tab>\r\n\r\n      <!-- HTTP Headers Explained -->\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"tab-icon\">perm_device_information</mat-icon>\r\n          HTTP headers and &nbsp;<code>auto</code>\r\n        </ng-template>\r\n          <h3>Background</h3>\r\n          <p class=\"dialog-description\">\r\n            It's important that you know that DNN includes special headers in HTTP requests.\r\n            This is to include context, so it can find what page/module you were on.\r\n            The platform needs this because it usually needs to know things like:\r\n          </p>\r\n          <ul>\r\n            <li>What website / language am I on</li>\r\n            <li>What module am I on, and what App is being shown (this is used to resolve the <code>/auto/</code> in the path</li>\r\n            <li>Does the user have VIEW / EDIT / etc. permissions</li>\r\n          </ul>\r\n          <p class=\"dialog-description\">\r\n            When accessing an API from external, there is no real <em>context</em> for the call, which is why you have to replace\r\n            <code>/auto/</code> in the path with <code>/{{ data.folder }}/</code> instead.\r\n          </p>\r\n          <h3>Common Headers when using the API from JS on a DNN Page</h3>\r\n          <p class=\"dialog-description\">\r\n            These are the headers which are needed in DNN by default:\r\n          </p>\r\n          <ol>\r\n            <li><code>TabId</code>: this is the page id, a number</li>\r\n            <li><code>ModuleId</code>: this is the module id, a number</li>\r\n            <li><code>RequestVerificationToken</code>: this is a crypto key to prove that the request originated from the same site. It's only included in POST/PUT/DELETE requests. </li>\r\n          </ol>\r\n          <p class=\"dialog-description\">\r\n            These are the headers which 2sxc sometimes adds:\r\n          </p>\r\n          <ol>\r\n            <li><code>ContentBlockId</code>: the unit of content we're editing/changing or</li>\r\n            <li><code>PageId</code>: we're trying to use this new header instead of TabId, which is just an odd name. Still WIP</li>\r\n          </ol>\r\n          <h3>Usually this happens automatically</h3>\r\n          <p class=\"dialog-description\">\r\n            When you use an helper object of 2sxc (like <code>$2sxc</code> or <code>dnn-sxc-angular</code>).\r\n          </p>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n  </ng-template>\r\n\r\n\r\n\r\n  <!-- REST Tab showing the urls and code snippets -->\r\n  <ng-template #restUrls>\r\n    <mat-accordion multi=\"true\">\r\n      <mat-expansion-panel *ngFor=\"let apiCall of data.apiCalls\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <code>{{apiCall.verb}}</code>: <code class=\"route-in-title\">{{ apiCall.url }}</code>\r\n            <span> &nbsp;to {{ apiCall.teaser }} </span>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <mat-panel-description style=\"display: block;\">\r\n          <h4>{{ apiCall.instructions }}</h4>\r\n          <p class=\"dialog-description\">\r\n            HTTP Verb: <code>{{apiCall.verb}}</code> <br>\r\n            {{ data.scenario.useVirtual ? 'Virtual' : 'Absolute'}} Url: <code>{{ apiCall.url }}</code>\r\n          </p>\r\n          <p class=\"dialog-description\" *ngIf=\"apiCall.enableButton\">\r\n            <button mat-raised-button (click)=\"callApiGet(apiCall.url)\">Call and Output to Console</button>\r\n            <a *ngIf=\"!data.scenario.useVirtual && apiCall.browseUrl\" [href]=\"apiCall.browseUrl\" target=\"_blank\">Open in Browser</a>\r\n          </p>\r\n\r\n          <ng-container *ngFor=\"let code of apiCall.code\">\r\n            <h4>{{ code.title }}</h4>\r\n            <p>{{ code.description }}</p>\r\n            <pre style=\"word-wrap: pre-wrap\">{{ code.code }}</pre>\r\n            <p *ngIf=\"code.warning\" class=\"warning\">\r\n              <mat-icon>warning</mat-icon>\r\n              {{ code.warning }}\r\n            </p>\r\n          </ng-container>\r\n\r\n        </mat-panel-description>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </ng-template>\r\n\r\n\r\n</ng-container>\r\n");

/***/ }),

/***/ "uDA9":
/*!*********************************************!*\
  !*** ./src/app/dev-rest/dev-rest.module.ts ***!
  \*********************************************/
/*! exports provided: DevRestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestModule", function() { return DevRestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "3Uyd");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var projects_edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! projects/edit */ "geKs");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! . */ "PJ+w");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "KoVM");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _dev_rest_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dev-rest-routing.module */ "xFiT");
/* harmony import */ var _dev_rest_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dev-rest.component */ "Ztmg");





















var DevRestModule = /** @class */ (function () {
    function DevRestModule() {
    }
    DevRestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _dev_rest_component__WEBPACK_IMPORTED_MODULE_20__["DevRestComponent"],
                ___WEBPACK_IMPORTED_MODULE_14__["SelectorWithHelpComponent"],
                ___WEBPACK_IMPORTED_MODULE_14__["HelpPopupComponent"],
            ],
            entryComponents: [
                _dev_rest_component__WEBPACK_IMPORTED_MODULE_20__["DevRestComponent"],
                ___WEBPACK_IMPORTED_MODULE_14__["SelectorWithHelpComponent"],
                ___WEBPACK_IMPORTED_MODULE_14__["HelpPopupComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dev_rest_routing_module__WEBPACK_IMPORTED_MODULE_19__["DevRestRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_18__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_17__["Context"],
                _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_16__["ContentTypesService"],
                _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_15__["AppDialogConfigService"],
                // ?
                projects_edit__WEBPACK_IMPORTED_MODULE_13__["EntityService"],
                projects_edit__WEBPACK_IMPORTED_MODULE_13__["EavService"],
            ]
        })
    ], DevRestModule);
    return DevRestModule;
}());



/***/ }),

/***/ "xFiT":
/*!*****************************************************!*\
  !*** ./src/app/dev-rest/dev-rest-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DevRestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRestRoutingModule", function() { return DevRestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "nXrb");
/* harmony import */ var _dev_rest_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dev-rest-dialog.config */ "/XEv");





var routes = [
    { path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__["DialogEntryComponent"], data: { dialog: _dev_rest_dialog_config__WEBPACK_IMPORTED_MODULE_4__["devRestDialog"], title: 'REST API' } }
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



/***/ })

}]);
//# sourceMappingURL=dev-rest-dev-rest-module.js.map