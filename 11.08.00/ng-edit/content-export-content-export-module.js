(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-export-content-export-module"],{

/***/ "+hKU":
/*!*********************************************************!*\
  !*** ./src/app/content-export/content-export.module.ts ***!
  \*********************************************************/
/*! exports provided: ContentExportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExportModule", function() { return ContentExportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "F1o0");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "KoVM");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _content_export_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content-export-routing.module */ "oywW");
/* harmony import */ var _content_export_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./content-export.component */ "7lgs");
/* harmony import */ var _services_content_export_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/content-export.service */ "Bwh1");


















var ContentExportModule = /** @class */ (function () {
    function ContentExportModule() {
    }
    ContentExportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _content_export_component__WEBPACK_IMPORTED_MODULE_16__["ContentExportComponent"],
            ],
            entryComponents: [
                _content_export_component__WEBPACK_IMPORTED_MODULE_16__["ContentExportComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _content_export_routing_module__WEBPACK_IMPORTED_MODULE_15__["ContentExportRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_14__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_13__["Context"],
                _services_content_export_service__WEBPACK_IMPORTED_MODULE_17__["ContentExportService"],
                _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_11__["AppDialogConfigService"],
                _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_12__["ContentTypesService"],
            ]
        })
    ], ContentExportModule);
    return ContentExportModule;
}());



/***/ }),

/***/ "7lgs":
/*!************************************************************!*\
  !*** ./src/app/content-export/content-export.component.ts ***!
  \************************************************************/
/*! exports provided: ContentExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExportComponent", function() { return ContentExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_export_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-export.component.html */ "NFic");
/* harmony import */ var _content_export_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-export.component.scss */ "lIh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "KoVM");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _services_content_export_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/content-export.service */ "Bwh1");










var ContentExportComponent = /** @class */ (function () {
    function ContentExportComponent(dialogRef, route, contentExportService, appDialogConfigService, contentTypesService) {
        this.dialogRef = dialogRef;
        this.route = route;
        this.contentExportService = contentExportService;
        this.appDialogConfigService = appDialogConfigService;
        this.contentTypesService = contentTypesService;
        this.hostClass = 'dialog-component';
        this.hasIdList = false;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
        var selectedIds = this.route.snapshot.paramMap.get('selectedIds');
        this.hasIdList = !!selectedIds;
        if (this.hasIdList) {
            this.itemIds = selectedIds.split(',').map(function (id) { return parseInt(id, 10); });
        }
    }
    ContentExportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading$.next(true);
        var contentType$ = this.contentTypesService.retrieveContentType(this.contentTypeStaticName);
        var dialogSettings$ = this.appDialogConfigService.getDialogSettings();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([contentType$, dialogSettings$]).subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), contentType = _b[0], dialogSettings = _b[1];
            _this.contentType$.next(contentType);
            var languages = dialogSettings.Context.Language.All;
            _this.languages = Object.keys(languages).map(function (key) { return ({ key: key, name: languages[key] }); });
            _this.formValues = {
                defaultLanguage: dialogSettings.Context.Language.Primary,
                contentTypeStaticName: _this.contentTypeStaticName,
                language: '',
                recordExport: _this.hasIdList ? 'Selection' : 'All',
                languageReferences: 'Link',
                resourcesReferences: 'Link',
            };
            _this.loading$.next(false);
        });
    };
    ContentExportComponent.prototype.ngOnDestroy = function () {
        this.contentType$.complete();
        this.loading$.complete();
    };
    ContentExportComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ContentExportComponent.prototype.exportContent = function () {
        this.contentExportService.exportContent(this.formValues, this.hasIdList && this.formValues.recordExport === 'Selection' ? this.itemIds : null);
    };
    ContentExportComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_content_export_service__WEBPACK_IMPORTED_MODULE_9__["ContentExportService"] },
        { type: _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_7__["AppDialogConfigService"] },
        { type: _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_8__["ContentTypesService"] }
    ]; };
    ContentExportComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ContentExportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-export',
            template: _raw_loader_content_export_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_export_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_content_export_service__WEBPACK_IMPORTED_MODULE_9__["ContentExportService"],
            _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_7__["AppDialogConfigService"],
            _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_8__["ContentTypesService"]])
    ], ContentExportComponent);
    return ContentExportComponent;
}());



/***/ }),

/***/ "J2dV":
/*!****************************************************************!*\
  !*** ./src/app/content-export/content-export-dialog.config.ts ***!
  \****************************************************************/
/*! exports provided: contentExportDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentExportDialog", function() { return contentExportDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var contentExportDialog = {
    name: 'EXPORT_CONTENT_TYPE_DIALOG',
    initContext: true,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ContentExportComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./content-export.component */ "7lgs"))];
                    case 1:
                        ContentExportComponent = (_a.sent()).ContentExportComponent;
                        return [2 /*return*/, ContentExportComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "JXuk":
/*!**********************************************!*\
  !*** ../edit/shared/services/eav.service.ts ***!
  \**********************************************/
/*! exports provided: webApiEditRoot, EavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiEditRoot", function() { return webApiEditRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EavService", function() { return EavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ng-dialogs/src/app/shared/constants/session.constants */ "0ELX");
/* harmony import */ var _ng_dialogs_src_app_shared_services_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ng-dialogs/src/app/shared/services/context */ "Iv+g");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/item.actions */ "gZep");









var webApiEditRoot = 'cms/edit/';
var EavService = /** @class */ (function () {
    function EavService(http, store, dnnContext, 
    /** Used to fetch form data and fill up eavConfig. Do not use anywhere else */
    context) {
        this.http = http;
        this.store = store;
        this.dnnContext = dnnContext;
        this.context = context;
        /**
         * Tells subscribed custom components that they should submit their values,
         * e.g. form is going to be saved and we don't want to miss any values.
         * Custom components run outside Angular zone and we have to wait for their values to update.
         */
        this.forceConnectorSave$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Temporary solution to circumvent value not being emitted on language change. Fix language change!  */
        this.formValueChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Temporary solution to circumvent disabled not being emitted on language change. Fix language change!  */
        this.formDisabledChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    // spm TODO: ngOnDestroy only fires in services provided in component
    EavService.prototype.ngOnDestroy = function () {
        this.forceConnectorSave$.complete();
        this.formValueChange$.complete();
        this.formDisabledChange$.complete();
    };
    /** Create EavConfiguration from sessionStorage */
    EavService.prototype.setEavConfig = function (editDialogContext) {
        this.eavConfig = {
            zoneId: this.context.zoneId.toString(),
            appId: this.context.appId.toString(),
            appRoot: editDialogContext.App.Url,
            lang: editDialogContext.Language.Current,
            langPri: editDialogContext.Language.Primary,
            langs: editDialogContext.Language.All,
            moduleId: this.context.moduleId.toString(),
            partOfPage: sessionStorage.getItem(_ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__["keyPartOfPage"]),
            portalRoot: sessionStorage.getItem(_ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__["keyPortalRoot"]),
            tabId: this.context.tabId.toString(),
            systemRoot: window.location.pathname.split('/dist/')[0] + '/',
            versioningOptions: this.getVersioningOptions(sessionStorage.getItem(_ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__["keyPartOfPage"]) === 'true', sessionStorage.getItem(_ng_dialogs_src_app_shared_constants_session_constants__WEBPACK_IMPORTED_MODULE_6__["keyPublishing"])),
        };
    };
    EavService.prototype.fetchFormData = function (items) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiEditRoot + 'load'), items, {
            params: { appId: this.context.appId.toString() }
        });
    };
    EavService.prototype.saveItem = function (item) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_8__["SaveItemAttributesValuesAction"](item));
    };
    EavService.prototype.saveItemSuccess = function (data) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_8__["SaveItemAttributesValuesSuccessAction"](data));
    };
    EavService.prototype.saveItemError = function (error) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_8__["SaveItemAttributesValuesErrorAction"](error));
    };
    EavService.prototype.saveFormData = function (body) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiEditRoot + 'save'), body, {
            params: { appId: this.eavConfig.appId.toString(), partOfPage: this.eavConfig.partOfPage }
        });
    };
    EavService.prototype.getVersioningOptions = function (partOfPage, publishing) {
        if (!partOfPage) {
            return { show: true, hide: true, branch: true };
        }
        var publish = publishing || '';
        switch (publish) {
            case '':
            case 'DraftOptional':
                return { show: true, hide: true, branch: true };
            case 'DraftRequired':
                return { branch: true, hide: true };
            default: {
                console.error('invalid versioning requiremenets: ' + publish);
                return {};
            }
        }
    };
    EavService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] },
        { type: _ng_dialogs_src_app_shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"] }
    ]; };
    EavService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"],
            _ng_dialogs_src_app_shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"]])
    ], EavService);
    return EavService;
}());



/***/ }),

/***/ "NFic":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-export/content-export.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">Export {{ (contentType$ | async)?.Name }}</div>\r\n</div>\r\n\r\n<p class=\"dialog-description\">\r\n  This will generate an XML file which you can edit in Excel. If you just want to import new data, use this to\r\n  export the schema that you can then fill in using Excel. Please visit\r\n  <a href=\"https://2sxc.org/help\" target=\"_blank\">https://2sxc.org/help</a> for more instructions.\r\n</p>\r\n\r\n<form #ngForm=\"ngForm\" class=\"dialog-form\" *ngIf=\"(loading$ | async) === false\">\r\n  <div class=\"dialog-form-content fancy-scrollbar-light\">\r\n    <div>\r\n      <mat-form-field appearance=\"standard\" color=\"accent\">\r\n        <mat-label>Languages</mat-label>\r\n        <mat-select [(ngModel)]=\"formValues.language\" name=\"Language\">\r\n          <mat-option value=\"\">All</mat-option>\r\n          <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.key\">{{ lang.key }}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div>\r\n      <p class=\"field-label\">Export data</p>\r\n      <mat-radio-group [(ngModel)]=\"formValues.recordExport\" name=\"RecordExport\">\r\n        <mat-radio-button value=\"Blank\">No, just export blank data schema (for new data import)\r\n        </mat-radio-button>\r\n        <mat-radio-button value=\"All\">Yes, export all content-items</mat-radio-button>\r\n        <mat-radio-button *ngIf=\"hasIdList\" value=\"Selection\">\r\n          Export selected {{ itemIds.length }} items\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n\r\n    <div>\r\n      <p class=\"field-label\">Value references to other languages</p>\r\n      <mat-radio-group [(ngModel)]=\"formValues.languageReferences\" name=\"LanguageReferences\"\r\n        [disabled]=\"formValues.recordExport === 'Blank'\">\r\n        <mat-radio-button value=\"Link\">Keep references to other languages (for re-import)\r\n        </mat-radio-button>\r\n        <mat-radio-button value=\"Resolve\">Replace references with values</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n\r\n    <div>\r\n      <p class=\"field-label\">File / page references</p>\r\n      <mat-radio-group [(ngModel)]=\"formValues.resourcesReferences\" name=\"ResourcesReferences\"\r\n        [disabled]=\"formValues.recordExport === 'Blank'\">\r\n        <mat-radio-button value=\"Link\">Keep references (for re-import, for example Page:4711)\r\n        </mat-radio-button>\r\n        <mat-radio-button value=\"Resolve\">Replace references with real URLs (for example\r\n          /Portals/0...)\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-form-actions\">\r\n    <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n    <button mat-raised-button color=\"accent\" [disabled]=\"!ngForm.form.valid\" (click)=\"exportContent()\">\r\n      Export Data\r\n    </button>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "S36y":
/*!**********************************************************************!*\
  !*** ./src/app/app-administration/services/content-types.service.ts ***!
  \**********************************************************************/
/*! exports provided: webApiTypeRoot, ContentTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiTypeRoot", function() { return webApiTypeRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesService", function() { return ContentTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");






var webApiTypeRoot = 'admin/type/';
var ContentTypesService = /** @class */ (function () {
    function ContentTypesService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentTypesService.prototype.apiUrl = function (name) {
        return this.dnnContext.$2sxc.http.apiUrl(name);
    };
    ContentTypesService.prototype.retrieveContentType = function (staticName) {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'get'), {
            params: { appId: this.context.appId.toString(), contentTypeId: staticName }
        });
    };
    ContentTypesService.prototype.retrieveContentTypes = function (scope) {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'list'), {
            params: { appId: this.context.appId.toString(), scope: scope }
        });
    };
    ContentTypesService.prototype.getScopes = function () {
        return this.http.get(this.apiUrl(webApiTypeRoot + 'scopes'), {
            params: { appId: this.context.appId.toString() }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (scopes) {
            var scopeOptions = Object.keys(scopes).map(function (key) { return ({ name: scopes[key], value: key }); });
            return scopeOptions;
        }));
    };
    ContentTypesService.prototype.save = function (contentType) {
        return this.http.post(this.apiUrl(webApiTypeRoot + 'save'), contentType, {
            params: { appid: this.context.appId.toString() },
        });
    };
    ContentTypesService.prototype.delete = function (contentType) {
        return this.http.delete(this.apiUrl(webApiTypeRoot + 'delete'), {
            params: { appid: this.context.appId.toString(), staticName: contentType.StaticName },
        });
    };
    ContentTypesService.prototype.import = function (files) {
        var e_1, _a;
        var formData = new FormData();
        try {
            for (var files_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                formData.append('File', file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.http.post(this.apiUrl(webApiTypeRoot + 'import'), formData, {
            params: { appId: this.context.appId.toString(), zoneId: this.context.zoneId.toString() }
        });
    };
    ContentTypesService.prototype.createGhost = function (sourceStaticName) {
        return this.http.post(this.apiUrl(webApiTypeRoot + 'addghost'), null, {
            params: { appid: this.context.appId.toString(), sourceStaticName: sourceStaticName },
        });
    };
    ContentTypesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentTypesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentTypesService);
    return ContentTypesService;
}());



/***/ }),

/***/ "b67o":
/*!*************************************************!*\
  !*** ../edit/shared/services/entity.service.ts ***!
  \*************************************************/
/*! exports provided: webApiEntityRoot, webApiEntityList, EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiEntityRoot", function() { return webApiEntityRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiEntityList", function() { return webApiEntityList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var projects_ng_dialogs_src_app_shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ng-dialogs/src/app/shared/services/context */ "Iv+g");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _eav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eav.service */ "JXuk");







var webApiEntityRoot = 'admin/entity/';
var webApiEntityList = 'admin/entity/list';
var EntityService = /** @class */ (function () {
    function EntityService(http, eavService, 
    // todo: SPM - this was using EavService before, but that resulted in an empty eavConfig in my code
    // so I tried context like the ContentTypeService uses and that works
    // - why? and is it bad?
    context, dnnContext) {
        this.http = http;
        this.eavService = eavService;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    EntityService.prototype.getAvailableEntities = function (filter, contentTypeName) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_eav_service__WEBPACK_IMPORTED_MODULE_6__["webApiEditRoot"] + 'EntityPicker'), filter, 
        // TODO: SPM - CHECK
        { params: { contentTypeName: contentTypeName, appId: this. /*eavService.eavConfig*/context.appId.toString() },
        });
    };
    // Experimental 2dm
    EntityService.prototype.reactiveEntities = function (params) {
        var _this = this;
        return params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (p) { return p !== null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (p) { return _this.getAvailableEntities(p.filter, p.contentTypeName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])()); }));
    };
    EntityService.prototype.delete = function (contentType, entityId, force) {
        return this.http.delete(this.dnnContext.$2sxc.http.apiUrl(webApiEntityRoot + 'delete'), {
            params: { contentType: contentType, id: entityId, appId: this.eavService.eavConfig.appId.toString(), force: force.toString() },
        });
    };
    EntityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _eav_service__WEBPACK_IMPORTED_MODULE_6__["EavService"] },
        { type: projects_ng_dialogs_src_app_shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    EntityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _eav_service__WEBPACK_IMPORTED_MODULE_6__["EavService"],
            projects_ng_dialogs_src_app_shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"],
            _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], EntityService);
    return EntityService;
}());



/***/ }),

/***/ "gZep":
/*!****************************************************!*\
  !*** ../edit/shared/store/actions/item.actions.ts ***!
  \****************************************************/
/*! exports provided: SAVE_ITEM_ATTRIBUTES_VALUES, SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS, SAVE_ITEM_ATTRIBUTES_VALUES_ERROR, SaveItemAttributesValuesAction, SaveItemAttributesValuesSuccessAction, SaveItemAttributesValuesErrorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM_ATTRIBUTES_VALUES", function() { return SAVE_ITEM_ATTRIBUTES_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS", function() { return SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM_ATTRIBUTES_VALUES_ERROR", function() { return SAVE_ITEM_ATTRIBUTES_VALUES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveItemAttributesValuesAction", function() { return SaveItemAttributesValuesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveItemAttributesValuesSuccessAction", function() { return SaveItemAttributesValuesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveItemAttributesValuesErrorAction", function() { return SaveItemAttributesValuesErrorAction; });
// Item Attributes
var SAVE_ITEM_ATTRIBUTES_VALUES = '[Item] SAVE_ITEM_ATTRIBUTES_VALUES';
var SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS = '[Item] SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS';
var SAVE_ITEM_ATTRIBUTES_VALUES_ERROR = '[Item] SAVE_ITEM_ATTRIBUTES_VALUES_ERROR';
/** Save (submit) */
var SaveItemAttributesValuesAction = /** @class */ (function () {
    function SaveItemAttributesValuesAction(item) {
        this.item = item;
        this.type = SAVE_ITEM_ATTRIBUTES_VALUES;
    }
    return SaveItemAttributesValuesAction;
}());

var SaveItemAttributesValuesSuccessAction = /** @class */ (function () {
    function SaveItemAttributesValuesSuccessAction(data) {
        this.data = data;
        this.type = SAVE_ITEM_ATTRIBUTES_VALUES_SUCCESS;
    }
    return SaveItemAttributesValuesSuccessAction;
}());

var SaveItemAttributesValuesErrorAction = /** @class */ (function () {
    function SaveItemAttributesValuesErrorAction(error) {
        this.error = error;
        this.type = SAVE_ITEM_ATTRIBUTES_VALUES_ERROR;
    }
    return SaveItemAttributesValuesErrorAction;
}());



/***/ }),

/***/ "lIh4":
/*!**************************************************************!*\
  !*** ./src/app/content-export/content-export.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".field-label {\n  font-size: 18px;\n  margin: 24px 0 0;\n}\n\n.mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0;\n}\n\n.mat-radio-button {\n  margin: 5px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWV4cG9ydC9jb250ZW50LWV4cG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvY29udGVudC1leHBvcnQvY29udGVudC1leHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDI0cHggMCAwO1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "oywW":
/*!*****************************************************************!*\
  !*** ./src/app/content-export/content-export-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContentExportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExportRoutingModule", function() { return ContentExportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "nXrb");
/* harmony import */ var _content_export_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-export-dialog.config */ "J2dV");





var routes = [
    { path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__["DialogEntryComponent"], data: { dialog: _content_export_dialog_config__WEBPACK_IMPORTED_MODULE_4__["contentExportDialog"] } },
];
var ContentExportRoutingModule = /** @class */ (function () {
    function ContentExportRoutingModule() {
    }
    ContentExportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContentExportRoutingModule);
    return ContentExportRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=content-export-content-export-module.js.map