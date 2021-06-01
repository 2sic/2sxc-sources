(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-export-content-export-module"],{

/***/ "H5Vl":
/*!**********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-export/content-export.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".field-label {\n  font-size: 18px;\n  margin: 24px 0 0;\n}\n\n.mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0;\n}\n\n.mat-radio-button {\n  margin: 5px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGVudC1leHBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoiY29udGVudC1leHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmllbGQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDI0cHggMCAwO1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */");

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

/***/ "r9P8":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/content-export/content-export.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">Export {{ (contentType$ | async)?.Name }}</div>\r\n</div>\r\n\r\n<p class=\"dialog-description\">\r\n  This will generate an XML file which you can edit in Excel. If you just want to import new data, use this to\r\n  export the schema that you can then fill in using Excel. Please visit\r\n  <a href=\"https://2sxc.org/help\" target=\"_blank\">https://2sxc.org/help</a> for more instructions.\r\n</p>\r\n\r\n<form #ngForm=\"ngForm\" class=\"dialog-form\" *ngIf=\"(loading$ | async) === false\">\r\n  <div class=\"dialog-form-content fancy-scrollbar-light\">\r\n    <div>\r\n      <mat-form-field appearance=\"standard\" color=\"accent\">\r\n        <mat-label>Languages</mat-label>\r\n        <mat-select [(ngModel)]=\"formValues.language\" name=\"Language\">\r\n          <mat-option value=\"\">All</mat-option>\r\n          <mat-option *ngFor=\"let lang of languages\" [value]=\"lang.key\">{{ lang.key }}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div>\r\n      <p class=\"field-label\">Export data</p>\r\n      <mat-radio-group [(ngModel)]=\"formValues.recordExport\" name=\"RecordExport\">\r\n        <mat-radio-button value=\"Blank\">No, just export blank data schema (for new data import)\r\n        </mat-radio-button>\r\n        <mat-radio-button value=\"All\">Yes, export all content-items</mat-radio-button>\r\n        <mat-radio-button *ngIf=\"hasIdList\" value=\"Selection\">\r\n          Export selected {{ itemIds.length }} items\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n\r\n    <div>\r\n      <p class=\"field-label\">Value references to other languages</p>\r\n      <mat-radio-group [(ngModel)]=\"formValues.languageReferences\" name=\"LanguageReferences\"\r\n        [disabled]=\"formValues.recordExport === 'Blank'\">\r\n        <mat-radio-button value=\"Link\">Keep references to other languages (for re-import)\r\n        </mat-radio-button>\r\n        <mat-radio-button value=\"Resolve\">Replace references with values</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n\r\n    <div>\r\n      <p class=\"field-label\">File / page references</p>\r\n      <mat-radio-group [(ngModel)]=\"formValues.resourcesReferences\" name=\"ResourcesReferences\"\r\n        [disabled]=\"formValues.recordExport === 'Blank'\">\r\n        <mat-radio-button value=\"Link\">Keep references (for re-import, for example Page:4711)\r\n        </mat-radio-button>\r\n        <mat-radio-button value=\"Resolve\">Replace references with real URLs (for example\r\n          /Portals/0...)\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"dialog-form-actions\">\r\n    <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n    <button mat-raised-button color=\"accent\" [disabled]=\"!ngForm.form.valid\" (click)=\"exportContent()\">\r\n      Export Data\r\n    </button>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "txqZ":
/*!*****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-export/content-export.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContentExportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExportModule", function() { return ContentExportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "r3uf");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _content_export_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content-export-routing.module */ "xaeT");
/* harmony import */ var _content_export_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./content-export.component */ "vpZa");
/* harmony import */ var _services_content_export_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/content-export.service */ "VNq2");


















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



/***/ }),

/***/ "vpZa":
/*!********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-export/content-export.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContentExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExportComponent", function() { return ContentExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_export_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-export.component.html */ "r9P8");
/* harmony import */ var _content_export_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-export.component.scss */ "H5Vl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_administration_services_app_dialog_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-administration/services/app-dialog-config.service */ "r3uf");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _services_content_export_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/content-export.service */ "VNq2");










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

/***/ "wjjL":
/*!************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-export/content-export-dialog.config.ts ***!
  \************************************************************************************/
/*! exports provided: contentExportDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentExportDialog", function() { return contentExportDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

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
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./content-export.component */ "vpZa"))];
                    case 1:
                        ContentExportComponent = (_a.sent()).ContentExportComponent;
                        return [2 /*return*/, ContentExportComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "xaeT":
/*!*************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-export/content-export-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ContentExportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentExportRoutingModule", function() { return ContentExportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _content_export_dialog_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-export-dialog.config */ "wjjL");





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