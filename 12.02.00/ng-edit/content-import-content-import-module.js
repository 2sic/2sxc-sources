(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-import-content-import-module"],{

/***/ "/nU7":
/*!**********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-import/content-import.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".field-label {\n  font-size: 18px;\n  margin: 24px 0 0;\n}\n\n.mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0;\n}\n\n.mat-radio-button {\n  margin: 5px;\n  font-size: 14px;\n}\n\n.hint {\n  font-size: 18px;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\n.progress-message {\n  font-size: 18px;\n}\n\n.evaluation__title {\n  font-size: 18px;\n  margin: 24px 0 0;\n  font-weight: bold;\n}\n\n.evaluation__content {\n  font-size: 14px;\n}\n\n.evaluation__content li {\n  padding: 2px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGVudC1pbXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFESjs7QUFHSTtFQUNFLGNBQUE7QUFETiIsImZpbGUiOiJjb250ZW50LWltcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbjogMjRweCAwIDA7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaGludCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnByb2dyZXNzLW1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmV2YWx1YXRpb24ge1xyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMjRweCAwIDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "77pt":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-import/services/content-import.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ContentImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentImportService", function() { return ContentImportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _edit_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../edit/shared/services */ "5t3I");
/* harmony import */ var _shared_helpers_file_to_base64_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/helpers/file-to-base64.helper */ "LNjK");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");









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
            return _this.http.post(_this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_6__["webApiEntityRoot"] + 'XmlPreview'), requestData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                if (!result.Success) {
                    result.Errors = result.Detail;
                    delete result.Detail;
                }
                return result;
            }));
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
            return _this.http.post(_this.dnnContext.$2sxc.http.apiUrl(_edit_shared_services__WEBPACK_IMPORTED_MODULE_6__["webApiEntityRoot"] + 'XmlUpload'), requestData);
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

/***/ "8VP6":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/content-import/content-import.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog-form-wrapper\" appDragAndDrop [allowedFileTypes]=\"'xml'\" (filesDropped)=\"filesDropped($event)\"\r\n  *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">{{ data.contentType?.Name }} Import Data</div>\r\n  </div>\r\n\r\n  <p class=\"dialog-description\">\r\n    This will import content-items into 2sxc. It requires that you already defined the content-type before you try\r\n    importing, and that you created the import-file using the template provided by the Export. Please visit\r\n    <a href=\"https://2sxc.org/help\" target=\"_blank\">https://2sxc.org/help</a> for more instructions.\r\n  </p>\r\n\r\n  <ng-container *ngIf=\"formValues != null\">\r\n    <ng-container [ngSwitch]=\"data.viewStateSelected\">\r\n\r\n      <!-- FORM -->\r\n      <form #ngForm=\"ngForm\" class=\"dialog-form\" *ngSwitchCase=\"1\">\r\n        <div class=\"dialog-form-content fancy-scrollbar-light\">\r\n          <div>\r\n            <button mat-raised-button matTooltip=\"Open file browser\" (click)=\"fileInput.click()\">\r\n              <span>{{ formValues.file ? formValues.file.name : 'Select or drop file' }}</span>\r\n            </button>\r\n            <input #fileInput type=\"file\" (change)=\"fileChange($event)\" class=\"hide\" />\r\n          </div>\r\n\r\n          <div>\r\n            <p class=\"field-label\">References to pages / files</p>\r\n            <mat-radio-group [(ngModel)]=\"formValues.resourcesReferences\" name=\"ResourcesReferences\">\r\n              <mat-radio-button value=\"Keep\">\r\n                Import links as written in the file (for example /Portals/...)\r\n              </mat-radio-button>\r\n              <mat-radio-button value=\"Resolve\">\r\n                Try to resolve paths to references\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n\r\n          <div>\r\n            <p class=\"field-label\">Clear all other entities</p>\r\n            <mat-radio-group [(ngModel)]=\"formValues.clearEntities\" name=\"ClearEntities\">\r\n              <mat-radio-button value=\"None\">\r\n                Keep all entities not found in import\r\n              </mat-radio-button>\r\n              <mat-radio-button value=\"All\">\r\n                Remove all entities not found in import\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n\r\n          <p class=\"hint\">Remember to backup your DNN first!</p>\r\n        </div>\r\n\r\n        <div class=\"dialog-form-actions\">\r\n          <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n          <button mat-raised-button color=\"accent\" [disabled]=\"!formValues.file || !formValues.file.name\"\r\n            (click)=\"evaluateContent()\">\r\n            Preview Import\r\n          </button>\r\n        </div>\r\n      </form>\r\n      <!-- END FORM -->\r\n\r\n      <!-- WAITING -->\r\n      <p *ngSwitchCase=\"0\" class=\"progress-message\">Please wait while processing...</p>\r\n      <!-- END WAITING -->\r\n\r\n      <!-- EVALUATION RESULT -->\r\n      <ng-container *ngSwitchCase=\"2\">\r\n        <ng-container *ngIf=\"data.evaluationResult\">\r\n          <!-- DETAILS / STATISTICS -->\r\n          <div *ngIf=\"data.evaluationResult.Success\" class=\"dialog-component-content fancy-scrollbar-light\">\r\n            <p class=\"evaluation__title\">Try to import file '{{ formValues.file.name }}'</p>\r\n            <p class=\"evaluation__title\">File contains:</p>\r\n            <ul class=\"evaluation__content\">\r\n              <li>{{ data.evaluationResult.Detail.DocumentElementsCount }} content-items (records/entities)</li>\r\n              <li>{{ data.evaluationResult.Detail.LanguagesInDocumentCount }} languages</li>\r\n              <li>{{ data.evaluationResult.Detail.AttributeNamesInDocument.length }} columns:\r\n                {{ data.evaluationResult.Detail.AttributeNamesInDocument.join(', ') }}</li>\r\n            </ul>\r\n            <p class=\"evaluation__title\">If you press Import, it will:</p>\r\n            <ul class=\"evaluation__content\">\r\n              <li>Create {{ data.evaluationResult.Detail.AmountOfEntitiesCreated }} content-items</li>\r\n              <li>Update {{ data.evaluationResult.Detail.AmountOfEntitiesUpdated }} content-items</li>\r\n              <li>Delete {{ data.evaluationResult.Detail.AmountOfEntitiesDeleted }} content-items</li>\r\n              <li>Ignore {{ data.evaluationResult.Detail.AttributeNamesNotImported.length }} columns:\r\n                {{ data.evaluationResult.Detail.AttributeNamesNotImported.join(', ') }}</li>\r\n            </ul>\r\n            <p class=\"hint\">Note: The import validates much data and may take several minutes.</p>\r\n          </div>\r\n          <!-- END DETAILS / STATISTICS -->\r\n          <!-- ERRORS -->\r\n          <div *ngIf=\"!data.evaluationResult.Success\" class=\"dialog-component-content fancy-scrollbar-light\">\r\n            <p class=\"evaluation__title\">Try to import file '{{ formValues.file.name }}'</p>\r\n            <ul class=\"evaluation__content\">\r\n              <li *ngFor=\"let error of data.evaluationResult.Errors\">\r\n                <div>{{ errors[error.ErrorCode] }}</div>\r\n                <div *ngIf=\"error.ErrorDetail\"><i>Details: {{ error.ErrorDetail }}</i></div>\r\n                <div *ngIf=\"error.LineNumber\"><i>Line-no: {{ error.LineNumber }}</i></div>\r\n                <div *ngIf=\"error.LineDetail\"><i>Line-details: {{ error.LineDetail }}</i></div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <!-- END ERRORS -->\r\n          <div class=\"dialog-component-actions\">\r\n            <button mat-raised-button (click)=\"back()\">Back</button>\r\n            <button mat-raised-button color=\"accent\" [disabled]=\"!data.evaluationResult.Success\"\r\n              (click)=\"importContent()\">\r\n              Import\r\n            </button>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n      <!-- END EVALUATION RESULT -->\r\n\r\n      <!-- IMPORT RESULT -->\r\n      <div *ngSwitchCase=\"3\">\r\n        <div *ngIf=\"data.importResult\" class=\"progress-message\">\r\n          <p *ngIf=\"data.importResult.Success\">Import done.</p>\r\n          <p *ngIf=\"!data.importResult.Success\">Import failed.</p>\r\n        </div>\r\n        <div class=\"dialog-component-actions\">\r\n          <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">Close</button>\r\n        </div>\r\n      </div>\r\n      <!-- END IMPORT RESULT -->\r\n    </ng-container>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "LNjK":
/*!*****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/shared/helpers/file-to-base64.helper.ts ***!
  \*****************************************************************************/
/*! exports provided: toBase64, toString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBase64", function() { return toBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
function toBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result.split(',')[1]);
        };
        reader.onerror = function (error) {
            reject(error);
        };
    });
}
function toString(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = function (error) {
            reject(error);
        };
    });
}


/***/ }),

/***/ "TGEy":
/*!********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-import/content-import.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContentImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentImportComponent", function() { return ContentImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_import_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-import.component.html */ "8VP6");
/* harmony import */ var _content_import_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-import.component.scss */ "/nU7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "r3uf");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _services_content_import_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/content-import.service */ "77pt");











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

/***/ "Y0Bw":
/*!*************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-import/content-import-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ContentImportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentImportRoutingModule", function() { return ContentImportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _content_import_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-import-dialog.config */ "g0dH");





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

/***/ "g0dH":
/*!************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-import/content-import-dialog.config.ts ***!
  \************************************************************************************/
/*! exports provided: contentImportDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentImportDialog", function() { return contentImportDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

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
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./content-import.component */ "TGEy"))];
                    case 1:
                        ContentImportComponent = (_a.sent()).ContentImportComponent;
                        return [2 /*return*/, ContentImportComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "o3TM":
/*!*****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-import/content-import.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContentImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentImportModule", function() { return ContentImportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "r3uf");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _content_import_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content-import-routing.module */ "Y0Bw");
/* harmony import */ var _content_import_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content-import.component */ "TGEy");
/* harmony import */ var _services_content_import_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/content-import.service */ "77pt");

















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

/***/ "r3uf":
/*!**********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/app-dialog-config.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: AppDialogConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDialogConfigService", function() { return AppDialogConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");





var webApiDialogRoot = 'admin/dialog/';
var AppDialogConfigService = /** @class */ (function () {
    function AppDialogConfigService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    AppDialogConfigService.prototype.getDialogSettings = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiDialogRoot + 'settings'), {
            params: { appid: this.context.appId.toString() },
        });
    };
    AppDialogConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    AppDialogConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], AppDialogConfigService);
    return AppDialogConfigService;
}());



/***/ }),

/***/ "uwFg":
/*!******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/app-administration/services/content-types.service.ts ***!
  \******************************************************************************************/
/*! exports provided: webApiTypeRoot, ContentTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiTypeRoot", function() { return webApiTypeRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesService", function() { return ContentTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");






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



/***/ })

}]);
//# sourceMappingURL=content-import-content-import-module.js.map