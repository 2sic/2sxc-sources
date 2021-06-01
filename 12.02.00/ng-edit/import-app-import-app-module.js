(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["import-app-import-app-module"],{

/***/ "6SVJ":
/*!*****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/import-app/import-app-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ImportAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAppRoutingModule", function() { return ImportAppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _import_app_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import-app-dialog.config */ "T1ft");





var routes = [
    { path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__["DialogEntryComponent"], data: { dialog: _import_app_dialog_config__WEBPACK_IMPORTED_MODULE_4__["importAppDialog"] } }
];
var ImportAppRoutingModule = /** @class */ (function () {
    function ImportAppRoutingModule() {
    }
    ImportAppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ImportAppRoutingModule);
    return ImportAppRoutingModule;
}());



/***/ }),

/***/ "BToE":
/*!*******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/import-app/services/import-app.service.ts ***!
  \*******************************************************************************/
/*! exports provided: webApiAppRoot, ImportAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiAppRoot", function() { return webApiAppRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAppService", function() { return ImportAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");





var webApiAppRoot = 'admin/app/';
var ImportAppService = /** @class */ (function () {
    function ImportAppService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ImportAppService.prototype.importApp = function (file, changedName) {
        var formData = new FormData();
        formData.append('File', file);
        formData.append('Name', changedName ? changedName : '');
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiAppRoot + 'Import'), formData, {
            params: { zoneId: this.context.zoneId.toString() }
        });
    };
    ImportAppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ImportAppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_4__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ImportAppService);
    return ImportAppService;
}());



/***/ }),

/***/ "Fo6F":
/*!**************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/import-app/import-app.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".import-result-box {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1wb3J0LWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiaW1wb3J0LWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbXBvcnQtcmVzdWx0LWJveCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "QT2M":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/import-app/import-app.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div appDragAndDrop [allowedFileTypes]=\"'zip'\" (filesDropped)=\"filesDropped($event)\"\r\n  *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">Import App</div>\r\n  </div>\r\n\r\n  <mat-spinner *ngIf=\"data.isImporting\" mode=\"indeterminate\" diameter=\"20\" color=\"accent\"></mat-spinner>\r\n\r\n  <p class=\"dialog-description\">\r\n    Select an app package (zip) from your computer to import an app. New apps can be downloaded on\r\n    <a href=\"https://2sxc.org/apps\">https://2sxc.org/apps</a>.\r\n    For further help visit <a href=\"https://2sxc.org/en/help?tag=import-app\" target=\"_blank\">2sxc Help</a>.\r\n  </p>\r\n\r\n  <div>\r\n    <button mat-raised-button matTooltip=\"Open file browser\" [disabled]=\"data.isImporting\" (click)=\"fileInput.click()\">\r\n      <span>{{ data.importFile ? data.importFile.name : 'Select or drop file' }}</span>\r\n    </button>\r\n    <input #fileInput type=\"file\" (change)=\"fileChange($event)\" class=\"hide\" />\r\n  </div>\r\n\r\n  <div class=\"dialog-component-content fancy-scrollbar-light import-result-box\" *ngIf=\"data.importResult\">\r\n    <div *ngIf=\"data.importResult.Success\" class=\"sxc-message sxc-message-info\">\r\n      The import has been done. See the messages below for more information.\r\n    </div>\r\n    <div *ngIf=\"!data.importResult.Success\" class=\"sxc-message sxc-message-error\">\r\n      The import failed. See the messages below for more information.\r\n    </div>\r\n    <div *ngFor=\"let message of data.importResult.Messages\" class=\"sxc-message\" [ngClass]=\"{\r\n      'sxc-message-warning': message.MessageType === 0,\r\n      'sxc-message-success': message.MessageType === 1,\r\n      'sxc-message-error': message.MessageType === 2\r\n    }\">\r\n      {{ message.Text }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <ng-container *ngIf=\"!data.importResult?.Success\">\r\n      <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\" [disabled]=\"!data.importFile || data.isImporting || !!data.importResult\"\r\n        (click)=\"importApp()\">\r\n        Import\r\n      </button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.importResult?.Success\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"closeDialog()\">Close</button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "T1ft":
/*!****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/import-app/import-app-dialog.config.ts ***!
  \****************************************************************************/
/*! exports provided: importAppDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importAppDialog", function() { return importAppDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var importAppDialog = {
    name: 'IMPORT_APP_DIALOG',
    initContext: true,
    panelSize: 'medium',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ImportAppComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./import-app.component */ "cHhz"))];
                    case 1:
                        ImportAppComponent = (_a.sent()).ImportAppComponent;
                        return [2 /*return*/, ImportAppComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "cHhz":
/*!************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/import-app/import-app.component.ts ***!
  \************************************************************************/
/*! exports provided: ImportAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAppComponent", function() { return ImportAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_import_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./import-app.component.html */ "QT2M");
/* harmony import */ var _import_app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import-app.component.scss */ "Fo6F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_import_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/import-app.service */ "BToE");









var ImportAppComponent = /** @class */ (function () {
    function ImportAppComponent(dialogData, dialogRef, importAppService, snackBar) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.importAppService = importAppService;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.isImporting$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.importFile$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.importResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.isImporting$, this.importFile$, this.importResult$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), isImporting = _b[0], importFile = _b[1], importResult = _b[2];
            return ({ isImporting: isImporting, importFile: importFile, importResult: importResult });
        }));
    }
    ImportAppComponent.prototype.ngOnInit = function () {
        if (this.dialogData.files != null) {
            this.importFile$.next(this.dialogData.files[0]);
            this.importApp();
        }
    };
    ImportAppComponent.prototype.ngOnDestroy = function () {
        this.isImporting$.complete();
        this.importFile$.complete();
        this.importResult$.complete();
    };
    ImportAppComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ImportAppComponent.prototype.filesDropped = function (files) {
        var importFile = files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
        this.importApp();
    };
    ImportAppComponent.prototype.fileChange = function (event) {
        var importFile = event.target.files[0];
        this.importFile$.next(importFile);
        this.importResult$.next(null);
    };
    ImportAppComponent.prototype.importApp = function (changedName) {
        var _this = this;
        this.isImporting$.next(true);
        this.importAppService.importApp(this.importFile$.value, changedName).subscribe({
            next: function (result) {
                var _a, _b, _c;
                _this.isImporting$.next(false);
                _this.importResult$.next(result);
                // The app could not be installed because the app-folder already exists. Install app in a different folder?
                if (((_c = (_b = (_a = _this.importResult$.value) === null || _a === void 0 ? void 0 : _a.Messages) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.MessageType) === 0) {
                    var folderName = prompt(_this.importResult$.value.Messages[0].Text + ' Would you like to install it using another folder name?');
                    if (!folderName) {
                        return;
                    }
                    _this.importApp(folderName);
                }
            },
            error: function (error) {
                _this.isImporting$.next(false);
                _this.importResult$.next(null);
                _this.snackBar.open('Import failed. Please check console for more information', null, { duration: 3000 });
            },
        });
    };
    ImportAppComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_import_app_service__WEBPACK_IMPORTED_MODULE_8__["ImportAppService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    ImportAppComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ImportAppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-import-app',
            template: _raw_loader_import_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_import_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_import_app_service__WEBPACK_IMPORTED_MODULE_8__["ImportAppService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ImportAppComponent);
    return ImportAppComponent;
}());



/***/ }),

/***/ "nfsb":
/*!*********************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/import-app/import-app.module.ts ***!
  \*********************************************************************/
/*! exports provided: ImportAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAppModule", function() { return ImportAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _import_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./import-app-routing.module */ "6SVJ");
/* harmony import */ var _import_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./import-app.component */ "cHhz");
/* harmony import */ var _services_import_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/import-app.service */ "BToE");













var ImportAppModule = /** @class */ (function () {
    function ImportAppModule() {
    }
    ImportAppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _import_app_component__WEBPACK_IMPORTED_MODULE_11__["ImportAppComponent"],
            ],
            entryComponents: [
                _import_app_component__WEBPACK_IMPORTED_MODULE_11__["ImportAppComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _import_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["ImportAppRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_8__["Context"],
                _services_import_app_service__WEBPACK_IMPORTED_MODULE_12__["ImportAppService"],
            ]
        })
    ], ImportAppModule);
    return ImportAppModule;
}());



/***/ })

}]);
//# sourceMappingURL=import-app-import-app-module.js.map