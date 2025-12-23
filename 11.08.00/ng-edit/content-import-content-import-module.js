(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-import-content-import-module"],{

/***/ "GX8n":
/*!*******************************************************************!*\
  !*** ./src/app/content-import/services/content-import.service.ts ***!
  \*******************************************************************/
/*! exports provided: ContentImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentImportService", function() { return ContentImportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _edit_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../edit/shared/services/entity.service */ "b67o");
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ "YW/4");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");









var ContentImportService = /** @class */ (function () {
    function ContentImportService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentImportService.prototype.evaluateContent = function (formValues) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_7__["toBase64"])(formValues.file)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (fileBase64) {
            var requestData = {
                AppId: _this.context.appId.toString(),
                DefaultLanguage: formValues.defaultLanguage,
                ContentType: formValues.contentType,
                ContentBase64: fileBase64,
                ResourcesReferences: formValues.resourcesReferences,
                ClearEntities: formValues.clearEntities,
            };
            return (_this.http.post(_this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_6__["webApiEntityRoot"] + 'XmlPreview'), requestData));
        }));
    };
    ContentImportService.prototype.importContent = function (formValues) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Object(_shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_7__["toBase64"])(formValues.file)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (fileBase64) {
            var requestData = {
                AppId: _this.context.appId.toString(),
                DefaultLanguage: formValues.defaultLanguage,
                ContentType: formValues.contentType,
                ContentBase64: fileBase64,
                ResourcesReferences: formValues.resourcesReferences,
                ClearEntities: formValues.clearEntities,
            };
            return (_this.http.post(_this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services_entity_service__WEBPACK_IMPORTED_MODULE_6__["webApiEntityRoot"] + 'XmlUpload'), requestData));
        }));
    };
    ContentImportService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_8__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentImportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_8__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentImportService);
    return ContentImportService;
}());



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

/***/ "LWif":
/*!****************************************************************!*\
  !*** ./src/app/content-import/content-import-dialog.config.ts ***!
  \****************************************************************/
/*! exports provided: contentImportDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentImportDialog", function() { return contentImportDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var contentImportDialog = {
    name: 'IMPORT_CONTENT_TYPE_DIALOG',
    initContext: false,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ContentImportComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./content-import.component */ "SL64"))];
                    case 1:
                        ContentImportComponent = (_a.sent()).ContentImportComponent;
                        return [2 /*return*/, ContentImportComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "NDCb":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/content-import/content-import.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog-form-wrapper\" appDragAndDrop [allowedFileTypes]=\"'xml'\" (filesDropped)=\"filesDropped($event)\"\r\n  *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">{{ data.contentType?.Name }} Import Data</div>\r\n  </div>\r\n\r\n  <p class=\"dialog-description\">\r\n    This will import content-items into 2sxc. It requires that you already defined the content-type before you try\r\n    importing, and that you created the import-file using the template provided by the Export. Please visit\r\n    <a href=\"https://2sxc.org/help\" target=\"_blank\">https://2sxc.org/help</a> for more instructions.\r\n  </p>\r\n\r\n  <ng-container *ngIf=\"formValues != null\">\r\n    <ng-container [ngSwitch]=\"data.viewStateSelected\">\r\n\r\n      <!-- FORM -->\r\n      <form #ngForm=\"ngForm\" class=\"dialog-form\" *ngSwitchCase=\"1\">\r\n        <div class=\"dialog-form-content fancy-scrollbar-light\">\r\n          <div>\r\n            <button mat-raised-button matTooltip=\"Open file browser\" (click)=\"fileInput.click()\">\r\n              <span>{{ formValues.file ? formValues.file.name : 'Select or drop file' }}</span>\r\n            </button>\r\n            <input #fileInput type=\"file\" (change)=\"fileChange($event)\" class=\"hide\" />\r\n          </div>\r\n\r\n          <div>\r\n            <p class=\"field-label\">References to pages / files</p>\r\n            <mat-radio-group [(ngModel)]=\"formValues.resourcesReferences\" name=\"ResourcesReferences\">\r\n              <mat-radio-button value=\"Keep\">\r\n                Import links as written in the file (for example /Portals/...)\r\n              </mat-radio-button>\r\n              <mat-radio-button value=\"Resolve\">\r\n                Try to resolve paths to references\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n\r\n          <div>\r\n            <p class=\"field-label\">Clear all other entities</p>\r\n            <mat-radio-group [(ngModel)]=\"formValues.clearEntities\" name=\"ClearEntities\">\r\n              <mat-radio-button value=\"None\">\r\n                Keep all entities not found in import\r\n              </mat-radio-button>\r\n              <mat-radio-button value=\"All\">\r\n                Remove all entities not found in import\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n\r\n          <p class=\"hint\">Remember to backup your DNN first!</p>\r\n        </div>\r\n\r\n        <div class=\"dialog-form-actions\">\r\n          <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n          <button mat-raised-button color=\"accent\" [disabled]=\"!formValues.file || !formValues.file.name\"\r\n            (click)=\"evaluateContent()\">\r\n            Preview Import\r\n          </button>\r\n        </div>\r\n      </form>\r\n      <!-- END FORM -->\r\n\r\n      <!-- WAITING -->\r\n      <p *ngSwitchCase=\"0\" class=\"progress-message\">Please wait while processing...</p>\r\n      <!-- END WAITING -->\r\n\r\n      <!-- EVALUATION RESULT -->\r\n      <ng-container *ngSwitchCase=\"2\">\r\n        <ng-container *ngIf=\"data.evaluationResult\">\r\n          <!-- DETAILS / STATISTICS -->\r\n          <div *ngIf=\"data.evaluationResult.Success\" class=\"dialog-component-content fancy-scrollbar-light\">\r\n            <p class=\"evaluation__title\">Try to import file '{{ formValues.file.name }}'</p>\r\n            <p class=\"evaluation__title\">File contains:</p>\r\n            <ul class=\"evaluation__content\">\r\n              <li>{{ data.evaluationResult.Detail.DocumentElementsCount }} content-items (records/entities)</li>\r\n              <li>{{ data.evaluationResult.Detail.LanguagesInDocumentCount }} languages</li>\r\n              <li>{{ data.evaluationResult.Detail.AttributeNamesInDocument.length }} columns:\r\n                {{ data.evaluationResult.Detail.AttributeNamesInDocument.join(', ') }}</li>\r\n            </ul>\r\n            <p class=\"evaluation__title\">If you press Import, it will:</p>\r\n            <ul class=\"evaluation__content\">\r\n              <li>Create {{ data.evaluationResult.Detail.AmountOfEntitiesCreated }} content-items</li>\r\n              <li>Update {{ data.evaluationResult.Detail.AmountOfEntitiesUpdated }} content-items</li>\r\n              <li>Delete {{ data.evaluationResult.Detail.AmountOfEntitiesDeleted }} content-items</li>\r\n              <li>Ignore {{ data.evaluationResult.Detail.AttributeNamesNotImported.length }} columns:\r\n                {{ data.evaluationResult.Detail.AttributeNamesNotImported.join(', ') }}</li>\r\n            </ul>\r\n            <p class=\"hint\">Note: The import validates much data and may take several minutes.</p>\r\n          </div>\r\n          <!-- END DETAILS / STATISTICS -->\r\n          <!-- ERRORS -->\r\n          <div *ngIf=\"!data.evaluationResult.Success\" class=\"dialog-component-content fancy-scrollbar-light\">\r\n            <p class=\"evaluation__title\">Try to import file '{{ formValues.file.name }}'</p>\r\n            <ul class=\"evaluation__content\">\r\n              <li *ngFor=\"let error of data.evaluationResult.Detail\">\r\n                <div>{{ errors[error.ErrorCode] }}</div>\r\n                <div *ngIf=\"error.ErrorDetail\"><i>Details: {{ error.ErrorDetail }}</i></div>\r\n                <div *ngIf=\"error.LineNumber\"><i>Line-no: {{ error.LineNumber }}</i></div>\r\n                <div *ngIf=\"error.LineDetail\"><i>Line-details: {{ error.LineDetail }}</i></div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <!-- END ERRORS -->\r\n          <div class=\"dialog-component-actions\">\r\n            <button mat-raised-button (click)=\"back()\">Back</button>\r\n            <button mat-raised-button color=\"accent\" [disabled]=\"!data.evaluationResult.Success\"\r\n              (click)=\"importContent()\">\r\n              Import\r\n            </button>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n      <!-- END EVALUATION RESULT -->\r\n\r\n      <!-- IMPORT RESULT -->\r\n      <div *ngSwitchCase=\"3\">\r\n        <div *ngIf=\"data.importResult\" class=\"progress-message\">\r\n          <p *ngIf=\"data.importResult.Success\">Import done.</p>\r\n          <p *ngIf=\"!data.importResult.Success\">Import failed.</p>\r\n        </div>\r\n        <div class=\"dialog-component-actions\">\r\n          <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">Close</button>\r\n        </div>\r\n      </div>\r\n      <!-- END IMPORT RESULT -->\r\n    </ng-container>\r\n  </ng-container>\r\n</div>\r\n");

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

/***/ "SL64":
/*!************************************************************!*\
  !*** ./src/app/content-import/content-import.component.ts ***!
  \************************************************************/
/*! exports provided: ContentImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentImportComponent", function() { return ContentImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_content_import_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-import.component.html */ "NDCb");
/* harmony import */ var _content_import_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-import.component.scss */ "wgrd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "KoVM");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _services_content_import_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/content-import.service */ "GX8n");











var ContentImportComponent = /** @class */ (function () {
    function ContentImportComponent(dialogData, dialogRef, route, contentImportService, appDialogConfigService, contentTypesService) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.route = route;
        this.contentImportService = contentImportService;
        this.appDialogConfigService = appDialogConfigService;
        this.contentTypesService = contentTypesService;
        this.hostClass = 'dialog-component';
        this.contentType$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.viewStates = {
            waiting: 0,
            default: 1,
            evaluated: 2,
            imported: 3,
        };
        this.viewStateSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.viewStates.default);
        this.evaluationResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.importResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.contentType$, this.loading$, this.viewStateSelected$, this.evaluationResult$, this.importResult$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 5), contentType = _b[0], loading = _b[1], viewStateSelected = _b[2], evaluationResult = _b[3], importResult = _b[4];
            return ({ contentType: contentType, loading: loading, viewStateSelected: viewStateSelected, evaluationResult: evaluationResult, importResult: importResult });
        }));
        this.errors = {
            0: 'Unknown error occured.',
            1: 'Selected content-type does not exist.',
            2: 'Document is not a valid XML file.',
            3: 'Selected content-type does not match the content-type in the XML file.',
            4: 'The language is not supported.',
            5: 'The document does not specify all languages for all entities.',
            6: 'Language reference cannot be parsed, the language is not supported.',
            7: 'Language reference cannot be parsed, the read-write protection is not supported.',
            8: 'Value cannot be read, because of it has an invalid format.'
        };
        this.contentTypeStaticName = this.route.snapshot.paramMap.get('contentTypeStaticName');
    }
    ContentImportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading$.next(true);
        var contentType$ = this.contentTypesService.retrieveContentType(this.contentTypeStaticName);
        var dialogSettings$ = this.appDialogConfigService.getDialogSettings();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([contentType$, dialogSettings$]).subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), contentType = _b[0], dialogSettings = _b[1];
            _this.contentType$.next(contentType);
            _this.formValues = {
                defaultLanguage: dialogSettings.Context.Language.Primary,
                contentType: _this.contentTypeStaticName,
                file: _this.dialogData.files != null ? _this.dialogData.files[0] : null,
                resourcesReferences: 'Keep',
                clearEntities: 'None',
            };
            _this.loading$.next(false);
        });
    };
    ContentImportComponent.prototype.ngOnDestroy = function () {
        this.contentType$.complete();
        this.loading$.complete();
        this.viewStateSelected$.complete();
        this.evaluationResult$.complete();
        this.importResult$.complete();
    };
    ContentImportComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ContentImportComponent.prototype.evaluateContent = function () {
        var _this = this;
        this.viewStateSelected$.next(this.viewStates.waiting);
        this.contentImportService.evaluateContent(this.formValues).subscribe(function (result) {
            _this.evaluationResult$.next(result);
            _this.viewStateSelected$.next(_this.viewStates.evaluated);
        });
    };
    ContentImportComponent.prototype.importContent = function () {
        var _this = this;
        this.viewStateSelected$.next(this.viewStates.waiting);
        this.contentImportService.importContent(this.formValues).subscribe(function (result) {
            _this.importResult$.next(result);
            _this.viewStateSelected$.next(_this.viewStates.imported);
        });
    };
    ContentImportComponent.prototype.back = function () {
        this.viewStateSelected$.next(this.viewStates.default);
        this.evaluationResult$.next(null);
    };
    ContentImportComponent.prototype.fileChange = function (event) {
        this.formValues.file = event.target.files[0];
    };
    ContentImportComponent.prototype.filesDropped = function (files) {
        var importFile = files[0];
        this.formValues.file = importFile;
    };
    ContentImportComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_content_import_service__WEBPACK_IMPORTED_MODULE_10__["ContentImportService"] },
        { type: _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_8__["AppDialogConfigService"] },
        { type: _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__["ContentTypesService"] }
    ]; };
    ContentImportComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ContentImportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-content-import',
            template: _raw_loader_content_import_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_content_import_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_content_import_service__WEBPACK_IMPORTED_MODULE_10__["ContentImportService"],
            _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_8__["AppDialogConfigService"],
            _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__["ContentTypesService"]])
    ], ContentImportComponent);
    return ContentImportComponent;
}());



/***/ }),

/***/ "W/vD":
/*!*********************************************************!*\
  !*** ./src/app/content-import/content-import.module.ts ***!
  \*********************************************************/
/*! exports provided: ContentImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentImportModule", function() { return ContentImportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "F1o0");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "KoVM");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _content_import_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content-import-routing.module */ "mgEf");
/* harmony import */ var _content_import_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content-import.component */ "SL64");
/* harmony import */ var _services_content_import_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/content-import.service */ "GX8n");

















var ContentImportModule = /** @class */ (function () {
    function ContentImportModule() {
    }
    ContentImportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _content_import_component__WEBPACK_IMPORTED_MODULE_15__["ContentImportComponent"],
            ],
            entryComponents: [
                _content_import_component__WEBPACK_IMPORTED_MODULE_15__["ContentImportComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _content_import_routing_module__WEBPACK_IMPORTED_MODULE_14__["ContentImportRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_13__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_12__["Context"],
                _services_content_import_service__WEBPACK_IMPORTED_MODULE_16__["ContentImportService"],
                _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_10__["AppDialogConfigService"],
                _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__["ContentTypesService"],
            ]
        })
    ], ContentImportModule);
    return ContentImportModule;
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

/***/ "mgEf":
/*!*****************************************************************!*\
  !*** ./src/app/content-import/content-import-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContentImportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentImportRoutingModule", function() { return ContentImportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "nXrb");
/* harmony import */ var _content_import_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-import-dialog.config */ "LWif");





var routes = [
    { path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__["DialogEntryComponent"], data: { dialog: _content_import_dialog_config__WEBPACK_IMPORTED_MODULE_4__["contentImportDialog"] } },
];
var ContentImportRoutingModule = /** @class */ (function () {
    function ContentImportRoutingModule() {
    }
    ContentImportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContentImportRoutingModule);
    return ContentImportRoutingModule;
}());



/***/ }),

/***/ "wgrd":
/*!**************************************************************!*\
  !*** ./src/app/content-import/content-import.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".field-label {\n  font-size: 18px;\n  margin: 24px 0 0;\n}\n\n.mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0;\n}\n\n.mat-radio-button {\n  margin: 5px;\n  font-size: 14px;\n}\n\n.hint {\n  font-size: 18px;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\n.progress-message {\n  font-size: 18px;\n}\n\n.evaluation__title {\n  font-size: 18px;\n  margin: 24px 0 0;\n  font-weight: bold;\n}\n\n.evaluation__content {\n  font-size: 14px;\n}\n\n.evaluation__content li {\n  padding: 2px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWltcG9ydC9jb250ZW50LWltcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtBQURKOztBQUdJO0VBQ0UsY0FBQTtBQUROIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9jb250ZW50LWltcG9ydC9jb250ZW50LWltcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbjogMjRweCAwIDA7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaGludCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnByb2dyZXNzLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmV2YWx1YXRpb24ge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMjRweCAwIDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=content-import-content-import-module.js.map