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
    panelSize: 'fullscreen',
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

/***/ "5KZe":
/*!************************************************!*\
  !*** ./src/app/dev-rest/data/selector-data.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "8t2+":
/*!***********************************************!*\
  !*** ./src/app/dev-rest/data/environments.ts ***!
  \***********************************************/
/*! exports provided: Environments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environments", function() { return Environments; });
var Environments = [
    {
        key: 'dnn7',
        name: 'DNN 7 or higher',
        rootPath: '/desktopmodules/2sxc/api/',
        description: 'DNN 7 had a longer API-root path, which still works in later versions of DNN',
    },
    {
        key: 'dnn8',
        name: 'DNN 8 or higher',
        rootPath: '/api/2sxc/',
        description: 'DNN 8+ has a shorter root path, with doesn\'t work in DNN 7',
    },
];


/***/ }),

/***/ "PGSh":
/*!************************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/dev-rest/selector-with-help/selector-with-help.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field color=\"accent\">\r\n  <mat-label>{{ label }}</mat-label>\r\n  <mat-select [value]=\"value\" (selectionChange)=\"selectionChange($event.value)\">\r\n    <mat-option *ngFor=\"let item of items\" [value]=\"item.key\">{{ item.name }}</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<button mat-icon-button (click)=\"showHelp()\">\r\n  <mat-icon>help_outline</mat-icon>\r\n</button>\r\n");

/***/ }),

/***/ "PJ+w":
/*!***********************************!*\
  !*** ./src/app/dev-rest/index.ts ***!
  \***********************************/
/*! exports provided: AccessScenarios, Environments, HelpPopupComponent, SelectorWithHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_access_scenarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/access-scenarios */ "dkei");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessScenarios", function() { return _data_access_scenarios__WEBPACK_IMPORTED_MODULE_0__["AccessScenarios"]; });

/* harmony import */ var _data_environments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/environments */ "8t2+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Environments", function() { return _data_environments__WEBPACK_IMPORTED_MODULE_1__["Environments"]; });

/* harmony import */ var _data_selector_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/selector-data */ "5KZe");
/* empty/unused harmony star reexport *//* harmony import */ var _help_popup_help_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-popup/help-popup.component */ "10hl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelpPopupComponent", function() { return _help_popup_help_popup_component__WEBPACK_IMPORTED_MODULE_3__["HelpPopupComponent"]; });

/* harmony import */ var _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selector-with-help/selector-with-help.component */ "4N8g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectorWithHelpComponent", function() { return _selector_with_help_selector_with_help_component__WEBPACK_IMPORTED_MODULE_4__["SelectorWithHelpComponent"]; });








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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! . */ "PJ+w");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "KoVM");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");















var pathToContent = 'app/{appname}/content/{typename}';
var DevRestComponent = /** @class */ (function () {
    function DevRestComponent(dialogRef, route, snackBar, http, contentTypesService, appDialogConfigService, 
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
        this.context = context;
        this.dnnContext = dnnContext;
        this.hostClass = 'dialog-component dialog-component--no-actions';
        /** List of all known environments */
        this.environments = ___WEBPACK_IMPORTED_MODULE_11__["Environments"];
        /** List of scenarios */
        this.scenarios = ___WEBPACK_IMPORTED_MODULE_11__["AccessScenarios"];
        this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
        this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](null);
        this.dialogSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](null);
        this.currentEnv$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](this.environments[0]);
        this.currentScenario$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](this.scenarios[0]);
        this.modeInternal$ = this.currentScenario$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (scenario) { return scenario.key === 'internal'; }));
        this.root$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])([this.contentType$, /* this.currentEnv$, */ this.currentScenario$, this.dialogSettings$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), contentType = _b[0], /* env, */ scenario = _b[1], dialogSettings = _b[2];
            if (contentType == null || dialogSettings == null) {
                return '';
            }
            var internal = scenario === ___WEBPACK_IMPORTED_MODULE_11__["AccessScenarios"][0];
            // const root = internal ? '' : dnnContext.$2sxc.http.apiUrl() // env.rootPath;
            var resolved = pathToContent
                .replace('{typename}', contentType.Name)
                .replace('{appname}', internal ? 'auto' : encodeURI(dialogSettings.Context.App.Folder));
            return internal ? resolved : dnnContext.$2sxc.http.apiUrl(resolved);
        }));
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])([this.contentType$, this.currentEnv$, this.currentScenario$, this.modeInternal$, this.root$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 5), contentType = _b[0], currentEnv = _b[1], currentScenario = _b[2], modeInternal = _b[3], root = _b[4];
            return ({
                contentType: contentType,
                currentEnv: currentEnv,
                currentScenario: currentScenario,
                modeInternal: modeInternal,
                root: root,
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
        this.currentEnv$.complete();
        this.currentScenario$.complete();
    };
    DevRestComponent.prototype.changeEnv = function (env) {
        this.currentEnv$.next(env);
    };
    DevRestComponent.prototype.changeScenario = function (scenario) {
        this.currentScenario$.next(scenario);
    };
    DevRestComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    // todo: 2dm - probably open a dialog showing the results etc.
    DevRestComponent.prototype.callApiGet = function (url) {
        this.http.get(url).subscribe(function (res) {
            console.log(res);
        });
        this.openSnackBar('API call dispatched - to see it, you should have the console (F12) open.', 'API call');
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
        { type: _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_13__["ContentTypesService"] },
        { type: _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_12__["AppDialogConfigService"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_14__["Context"] },
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
            styles: [_dev_rest_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_13__["ContentTypesService"],
            _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_12__["AppDialogConfigService"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_14__["Context"],
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvZGV2LXJlc3QvZGV2LXJlc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dkei":
/*!***************************************************!*\
  !*** ./src/app/dev-rest/data/access-scenarios.ts ***!
  \***************************************************/
/*! exports provided: AccessScenarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessScenarios", function() { return AccessScenarios; });
var AccessScenarios = [
    {
        key: 'internal',
        name: 'Internal-Access from an App',
        description: 'Internal access means that your JS code is running in a DNN-module on a DNN-page. This is the default access. In this scenario, various headers are included in the request, incl. the module it\'s coming from, which allows various automatic things to happen. This results in simpler REST requests.',
        notes: 'This mode also makes it easier to re-distribute your app, as you can perform API calls relative to the module that\'s hosting it. This means, that even if you export/import the app to another system, the API-calls stay the same.',
    },
    {
        key: 'external',
        name: 'External access',
        description: 'External access means that the JS code could be on another page / module in DNN (which is not the same app), or it could be coming from a mobile App, or another website altogether. In this case, automatic app-detection can\'t work, as various headers are missing, and you must access the endpoint more explicitly.',
        notes: 'This mode requires you to define the exact, full URL, so if you create copies of this app on another system, the URL must be updated to access that system specifically.',
    },
];


/***/ }),

/***/ "rsxr":
/*!*******************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/dev-rest/dev-rest.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"templateVars$ | async as data\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>Using REST with {{ data.contentType?.Name }}</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light\">\r\n    <p class=\"dialog-description\">\r\n      All data can easily be used in JavaScript using a REST API.\r\n    </p>\r\n\r\n    <p class=\"dialog-description\">\r\n      <em>\r\n        Important: As a host-user you can always access these REST endpoints, but\r\n        if you want to use them in a public UI, you must remember to set the\r\n        permissions to allow this.\r\n      </em>\r\n    </p>\r\n\r\n    <div>\r\n      <app-selector-with-help label=\"Choose Scenario\" [items]=\"scenarios\" [value]=\"data.currentScenario.key\"\r\n        (valueChange)=\"changeScenario($event)\">\r\n      </app-selector-with-help>\r\n\r\n      <app-selector-with-help *ngIf=\"!data.modeInternal\" label=\"Choose DNN Version\" [items]=\"environments\"\r\n        [value]=\"data.currentEnv.key\" (valueChange)=\"changeEnv($event)\">\r\n      </app-selector-with-help>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"data.modeInternal; then internal; else external\"></ng-container>\r\n  </div>\r\n\r\n\r\n  <ng-template #internal>\r\n    <mat-tab-group color=\"accent\">\r\n      <mat-tab label=\"Virtual REST URLs\">\r\n        <ng-template matTabContent>\r\n          <p class=\"dialog-description\">\r\n            Virtual REST URLs are shorter URLs, which are automatically resolved\r\n            to the full length (based on the dnn-version, current portal, etc.)\r\n            thanks to $2sxc. This happens when you use the\r\n            <a href=\"https://github.com/2sic/2sxc/wiki/javascript-sxc-webapi\" target=\"_blank\">\r\n              $2sxc.webApi(...)\r\n            </a>\r\n            or if you use\r\n            <a href=\"https://www.npmjs.com/package/@2sic.com/dnn-sxc-angular\" target=\"_blank\">\r\n              dnn-sxc-angular (npm package)\r\n            </a>\r\n            (which also passes url-resolving through $2sxc).\r\n          </p>\r\n\r\n          <ng-container *ngTemplateOutlet=\"restUrls\"></ng-container>\r\n        </ng-template>\r\n      </mat-tab>\r\n      <mat-tab label=\"JS Calls using $2sxc\">\r\n        <ng-template matTabContent>\r\n          <p class=\"dialog-description\">\r\n            First you must get the <code>sxc</code> controller for the current module instance.\r\n            The easiest way is to let <code>$2sxc</code> find it, by giving it a html-tag before running any additional\r\n            code.\r\n            $2sxc will then automatically look up everything and return a fully configured controller.\r\n            Note that this is just an example, you will probably do this differently and not use a global variable (bad\r\n            practice).\r\n          </p>\r\n          <pre>\r\n// this assumes a tag like &lt;div id='myGalleryTag'&gt; in your code\r\nvar mySxc = $2sxc(document.getElementById('myGalleryTag'));\r\n        </pre>\r\n\r\n          <p>\r\n            Then...\r\n          </p>\r\n          <pre>\r\n/** get all items - this returns a promise\r\n* so you can do getAll().then(...)\r\n*/\r\nfunction getAll() {{ '{' }}\r\nreturn mySxc.webApi.get('');\r\n{{ '}' }}\r\n\r\nfunction getOne(id) {{ '{' }}\r\nreturn mySxc.webApi.get('' + '/' + id);\r\n{{ '}' }}\r\n        </pre>\r\n        </ng-template>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </ng-template>\r\n\r\n\r\n  <ng-template #external>\r\n    <mat-tab-group color=\"accent\">\r\n      <mat-tab label=\"Full REST URLs\">\r\n        <ng-template matTabContent>\r\n          <ng-container *ngTemplateOutlet=\"restUrls\"></ng-container>\r\n        </ng-template>\r\n      </mat-tab>\r\n      <mat-tab label=\"JS Calls using $2sxc\">\r\n        <ng-template matTabContent>\r\n          todo\r\n        </ng-template>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </ng-template>\r\n\r\n\r\n  <ng-template #restUrls>\r\n    <mat-list>\r\n      <mat-list-item>\r\n        <h3 matLine>Read list of all items</h3>\r\n        <div matLine>\r\n          <code>GET</code>: <code>{{ data.root }}</code>\r\n        </div>\r\n        <button mat-raised-button (click)=\"callApiGet(data.root)\">execute call</button>\r\n        <a *ngIf=\"data.currentScenario?.key === 'external'\" [href]=\"data.root\" target=\"_blank\">open</a>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item>\r\n        <h3 matLine>Read a single item #27</h3>\r\n        <div matLine>\r\n          <code>GET</code>: <code>{{ data.root }}/27</code>\r\n        </div>\r\n        <button mat-raised-button (click)=\"callApiGet(data.root)\">execute call</button>\r\n        <a *ngIf=\"data.currentScenario?.key === 'external'\" [href]=\"data.root\" target=\"_blank\">open</a>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item>\r\n        <h3 matLine>Create an item</h3>\r\n        <div matLine>\r\n          <code>POST</code>: <code>{{ data.root }}</code>\r\n        </div>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item>\r\n        <h3 matLine>Update the item #27</h3>\r\n        <div matLine>\r\n          <code>POST</code>: <code>{{ data.root }}/27</code>\r\n        </div>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item>\r\n        <h3 matLine>Delete the item #27</h3>\r\n        <div matLine>\r\n          <code>DELETE</code>: <code>{{ data.root }}/27</code>\r\n        </div>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </ng-template>\r\n\r\n</ng-container>\r\n");

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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "nKqi");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! . */ "PJ+w");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "KoVM");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _dev_rest_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dev-rest-routing.module */ "xFiT");
/* harmony import */ var _dev_rest_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dev-rest.component */ "Ztmg");



















var DevRestModule = /** @class */ (function () {
    function DevRestModule() {
    }
    DevRestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _dev_rest_component__WEBPACK_IMPORTED_MODULE_18__["DevRestComponent"],
                ___WEBPACK_IMPORTED_MODULE_12__["SelectorWithHelpComponent"],
                ___WEBPACK_IMPORTED_MODULE_12__["HelpPopupComponent"],
            ],
            entryComponents: [
                _dev_rest_component__WEBPACK_IMPORTED_MODULE_18__["DevRestComponent"],
                ___WEBPACK_IMPORTED_MODULE_12__["SelectorWithHelpComponent"],
                ___WEBPACK_IMPORTED_MODULE_12__["HelpPopupComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dev_rest_routing_module__WEBPACK_IMPORTED_MODULE_17__["DevRestRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_16__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_15__["Context"],
                _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_14__["ContentTypesService"],
                _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_13__["AppDialogConfigService"],
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