(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visual-query-visual-query-module"],{

/***/ "/wWL":
/*!*****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/query-result/query-result.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: QueryResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryResultComponent", function() { return QueryResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_query_result_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./query-result.component.html */ "Vsrf");
/* harmony import */ var _query_result_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query-result.component.scss */ "X3uf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/visual-query.service */ "hWMO");






var QueryResultComponent = /** @class */ (function () {
    function QueryResultComponent(dialogData, dialogRef, visualQueryService) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.visualQueryService = visualQueryService;
    }
    QueryResultComponent.prototype.ngOnInit = function () {
        var _a, _b, _c, _d;
        var pipeline = this.visualQueryService.pipelineModel$.value.Pipeline;
        var params = ((_b = (_a = pipeline.Params) === null || _a === void 0 ? void 0 : _a.split('\n')) !== null && _b !== void 0 ? _b : []).filter(function (el) { return !!el; });
        var testParams = ((_d = (_c = pipeline.TestParameters) === null || _c === void 0 ? void 0 : _c.split('\n')) !== null && _d !== void 0 ? _d : []).filter(function (el) { return !!el; });
        this.parameters = [].concat(params, testParams);
        this.timeUsed = this.dialogData.result.QueryTimer.Milliseconds;
        this.ticksUsed = this.dialogData.result.QueryTimer.Ticks;
        this.top = this.dialogData.top;
        this.optionsForTop = [25, 100, 1000, 0];
        this.result = this.dialogData.result.Query;
        this.debugStream = this.dialogData.debugStream;
        this.sources = this.dialogData.result.Sources;
        this.streams = this.dialogData.result.Streams;
    };
    QueryResultComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    QueryResultComponent.prototype.show = function (top) {
        if (top === this.top) {
            return;
        }
        if (this.debugStream) {
            this.visualQueryService.debugStream(this.debugStream.original, top);
        }
        else {
            this.visualQueryService.runPipeline(top);
        }
        this.closeDialog();
    };
    QueryResultComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _services_visual_query_service__WEBPACK_IMPORTED_MODULE_5__["VisualQueryService"] }
    ]; };
    QueryResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-query-result',
            template: _raw_loader_query_result_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_query_result_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_visual_query_service__WEBPACK_IMPORTED_MODULE_5__["VisualQueryService"]])
    ], QueryResultComponent);
    return QueryResultComponent;
}());



/***/ }),

/***/ "6uNs":
/*!*****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/run-explorer/run-explorer.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RunExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunExplorerComponent", function() { return RunExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_run_explorer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./run-explorer.component.html */ "XSd5");
/* harmony import */ var _run_explorer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./run-explorer.component.scss */ "SIvJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dev_rest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dev-rest */ "LBgr");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/visual-query.service */ "hWMO");
/* harmony import */ var _run_explorer_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./run-explorer.helpers */ "RpEq");










var RunExplorerComponent = /** @class */ (function () {
    function RunExplorerComponent(router, route, context, visualQueryService) {
        this.router = router;
        this.route = route;
        this.context = context;
        this.visualQueryService = visualQueryService;
    }
    RunExplorerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pipelineModel$ = this.visualQueryService.pipelineModel$;
        this.warnings$ = this.visualQueryService.pipelineModel$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (pipelineModel) { return Object(_run_explorer_helpers__WEBPACK_IMPORTED_MODULE_9__["calculateWarnings"])(pipelineModel, _this.context); }));
    };
    RunExplorerComponent.prototype.editPipeline = function () {
        this.visualQueryService.editPipelineEntity();
    };
    RunExplorerComponent.prototype.openParamsHelp = function () {
        window.open('https://r.2sxc.org/QueryParams', '_blank');
    };
    RunExplorerComponent.prototype.saveAndRunQuery = function (save, run) {
        this.visualQueryService.saveAndRun(save, run);
    };
    RunExplorerComponent.prototype.openRestApi = function () {
        var queryGuid = this.visualQueryService.pipelineModel$.value.Pipeline.EntityGuid;
        this.router.navigate([_dev_rest__WEBPACK_IMPORTED_MODULE_6__["GoToDevRest"].goToQuery(queryGuid)], { relativeTo: this.route });
    };
    RunExplorerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"] },
        { type: _services_visual_query_service__WEBPACK_IMPORTED_MODULE_8__["VisualQueryService"] }
    ]; };
    RunExplorerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-run-explorer',
            template: _raw_loader_run_explorer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_run_explorer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"],
            _services_visual_query_service__WEBPACK_IMPORTED_MODULE_8__["VisualQueryService"]])
    ], RunExplorerComponent);
    return RunExplorerComponent;
}());



/***/ }),

/***/ "BvqO":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/visual-query/add-explorer/add-explorer.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editor-active-explorer fancy-scrollbar-dark\" *ngIf=\"sorted$ | async as sorted\">\r\n\r\n  <mat-slide-toggle labelPosition=\"before\" (change)=\"toggleDifficulty($event)\">\r\n    Show Advanced\r\n  </mat-slide-toggle>\r\n\r\n  <ng-container *ngFor=\"let group of sorted | keyvalue; trackBy: trackGroups\">\r\n    <div class=\"collapsible\" [matTooltip]=\"guiTypes[group.key].UiHint || group.key\" matTooltipShowDelay=\"750\"\r\n      (click)=\"toggleItem(group.key)\">\r\n      <mat-icon>{{ guiTypes[group.key].Icon || guiTypes.Unknown.Icon }}</mat-icon>\r\n      <span>{{ group.key }}</span>\r\n    </div>\r\n\r\n    <div class=\"list\" *ngIf=\"toggledItems.includes(group.key)\">\r\n      <div class=\"list-item\" *ngFor=\"let dataSource of group.value; trackBy: trackDataSources\"\r\n        [matTooltip]=\"dataSource.UiHint || dataSource.Name\" matTooltipShowDelay=\"750\"\r\n        (click)=\"addDataSource(dataSource)\">\r\n        <mat-icon>{{ dataSource.Icon || guiTypes.Unknown.Icon }}</mat-icon>\r\n        <span>{{ dataSource.Name }}</span>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "FW8/":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/add-explorer/add-explorer.helpers.ts ***!
  \***************************************************************************************/
/*! exports provided: filterAndSortDataSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAndSortDataSources", function() { return filterAndSortDataSources; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/cloneDeep */ "XIp8");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "qb9A");



function filterAndSortDataSources(dataSources, maxDifficulty) {
    var e_1, _a;
    if (!dataSources) {
        return;
    }
    var cloned = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_1__["default"])(dataSources);
    var filtered = cloned.filter(function (dataSource) {
        return dataSource.Difficulty <= maxDifficulty
            && dataSource.PartAssemblyAndType !== _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_2__["eavConstants"].pipelineDesigner.outDataSource.PartAssemblyAndType;
    });
    filtered.sort(function (a, b) { return a.Name.toLocaleLowerCase().localeCompare(b.Name.toLocaleLowerCase()); });
    var sorted = {};
    try {
        for (var filtered_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(filtered), filtered_1_1 = filtered_1.next(); !filtered_1_1.done; filtered_1_1 = filtered_1.next()) {
            var dataSource = filtered_1_1.value;
            var type = dataSource.PrimaryType;
            if (sorted[type]) {
                sorted[type].push(dataSource);
            }
            else {
                sorted[type] = [dataSource];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (filtered_1_1 && !filtered_1_1.done && (_a = filtered_1.return)) _a.call(filtered_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return sorted;
}


/***/ }),

/***/ "M2LD":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/visual-query/stream-error-result/stream-error-result.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">\r\n    <div>Stream Error Results</div>\r\n    <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<br />\r\n\r\n<pre>{{ errorData | json }}</pre>\r\n\r\n<div>\r\n  <button mat-button matTooltip=\"Open 2sxc Insights\" (click)=\"openInsights()\">\r\n    <mat-icon>speed</mat-icon>\r\n    <span>Insights</span>\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "PBR4":
/*!*********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/visual-query-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: VisualQueryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualQueryRoutingModule", function() { return VisualQueryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "EaDK");
/* harmony import */ var _dev_rest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dev-rest */ "LBgr");
/* harmony import */ var _visual_query_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visual-query.component */ "RqJz");






var routes = [
    {
        path: '', component: _visual_query_component__WEBPACK_IMPORTED_MODULE_5__["VisualQueryComponent"],
        children: [
            _dev_rest__WEBPACK_IMPORTED_MODULE_4__["GoToDevRest"].route,
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~5cd8229e"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~8dad88b1"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edi~24510ec4"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~replace-content-replace-content-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "32/c")).then(function (m) { return m.EditModule; }); },
                data: { history: false },
            },
        ]
    },
];
var VisualQueryRoutingModule = /** @class */ (function () {
    function VisualQueryRoutingModule() {
    }
    VisualQueryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VisualQueryRoutingModule);
    return VisualQueryRoutingModule;
}());



/***/ }),

/***/ "RllY":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/visual-query/plumb-editor/plumb-editor.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #domRoot id=\"pipeline-root\" *ngIf=\"(templateModel$ | async) as templateModel\">\r\n  <!-- do not use trackBy, jsPlumb drag stops working properly after delete -->\r\n  <ng-container *ngIf=\"!hardReset\">\r\n    <div #domDataSource *ngFor=\"let dataSource of templateModel.pipelineDataSources\"\r\n      [id]=\"dataSrcIdPrefix + dataSource.EntityGuid\" class=\"dataSource\" [ngStyle]=\"{\r\n        'top': dataSource.VisualDesignerData.Top + 'px',\r\n        'left': dataSource.VisualDesignerData.Left + 'px',\r\n        'min-width': dataSource.VisualDesignerData.Width ? dataSource.VisualDesignerData.Width + 'px' : null\r\n      }\">\r\n\r\n      <div class=\"actions left\">\r\n        <mat-icon class=\"type-info\" [title]=\"templateModel.typeInfos[dataSource.EntityGuid].UiHint\">\r\n          {{ templateModel.typeInfos[dataSource.EntityGuid].Icon }}\r\n        </mat-icon>\r\n\r\n        <mat-icon class=\"configure\" title=\"Configure data source\" appMousedownStopPropagation\r\n          *ngIf=\"templateModel.allowEdit && templateModel.typeInfos[dataSource.EntityGuid].EnableConfig\"\r\n          (click)=\"configureDataSource(dataSource)\">\r\n          settings\r\n        </mat-icon>\r\n\r\n        <mat-icon class=\"help\" title=\"Help for this data source\" appMousedownStopPropagation\r\n          *ngIf=\"templateModel.typeInfos[dataSource.EntityGuid].HelpLink\"\r\n          (click)=\"openHelp(templateModel.typeInfos[dataSource.EntityGuid].HelpLink)\">\r\n          help_outline\r\n        </mat-icon>\r\n      </div>\r\n\r\n      <div class=\"actions right\">\r\n        <mat-icon class=\"delete\" title=\"Delete\" appMousedownStopPropagation\r\n          *ngIf=\"templateModel.allowEdit && !isOutDataSource(dataSource)\" (click)=\"remove(dataSource)\">\r\n          delete\r\n        </mat-icon>\r\n      </div>\r\n\r\n      <div class=\"name\" title=\"Click to edit name\" appMousedownStopPropagation\r\n        (click)=\"templateModel.allowEdit && editName(dataSource)\">\r\n        <span>{{ dataSource.Name || '(no name)' }}</span>\r\n        <mat-icon class=\"show-hover-inline\">edit</mat-icon>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"description\" title=\"Click to edit description\" appMousedownStopPropagation\r\n        (click)=\"templateModel.allowEdit && editDescription(dataSource)\">\r\n        <span>{{ dataSource.Description }}</span>\r\n        <mat-icon class=\"show-hover-inline\">edit</mat-icon>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"typename\" [title]=\"dataSource.PartAssemblyAndType\">\r\n        Type: {{ getTypeName(dataSource.PartAssemblyAndType) }}\r\n      </div>\r\n\r\n      <mat-icon class=\"add-endpoint\" title=\"Drag a new Out-Connection\"\r\n        *ngIf=\"templateModel.allowEdit && templateModel.typeInfos[dataSource.EntityGuid].DynamicOut\">\r\n        arrow_drop_up\r\n      </mat-icon>\r\n\r\n      <mat-icon class=\"many-in\" title=\"This data source supports multiple In-Connections\"\r\n        *ngIf=\"templateModel.allowEdit && templateModel.typeInfos[dataSource.EntityGuid].DynamicIn\">\r\n        arrow_drop_up\r\n      </mat-icon>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "RpEq":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/run-explorer/run-explorer.helpers.ts ***!
  \***************************************************************************************/
/*! exports provided: calculateWarnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateWarnings", function() { return calculateWarnings; });
/**
 * Check if there are special warnings the developer should know.
 * Typically when the test ModuleId is different from the one we're currently working on
 */
function calculateWarnings(pipelineModel, context) {
    var _a, _b;
    var warnings = [];
    try {
        var queryParams = ((_a = pipelineModel.Pipeline.Params) === null || _a === void 0 ? void 0 : _a.split(/\r?\n/)) || [];
        var testParams = ((_b = pipelineModel.Pipeline.TestParameters) === null || _b === void 0 ? void 0 : _b.split(/\r?\n/)) || [];
        queryParams.forEach(function (param) {
            param = param === null || param === void 0 ? void 0 : param.trim();
            if (!param) {
                return;
            }
            // Check if the syntax on Query Parameters is off.
            // It should contain [...]=...
            // But it's easy to forget the [ and ] brackets
            var paramSyntax = /^[a-zA-Z0-9]+=(.*)$/gmi;
            var matched = paramSyntax.test(param);
            if (!matched) {
                warnings.push("\n          A <em>Query Parameter</em> seems wrong: <br>\n          <code>" + param + "</code> <br>\n          It should use the syntax: <br>\n          <code>key=value</code> <br>\n          or resolve to a token like: <br>\n          <code>key=[source:key]</code>\n        ");
            }
        });
        testParams.forEach(function (param) {
            param = param === null || param === void 0 ? void 0 : param.trim();
            if (!param) {
                return;
            }
            // Check if the syntax on Test Parameters is off.
            // It should contain [...]=...
            // But it's easy to forget the [ and ] brackets
            var testParamSyntax = /^\[[a-zA-Z]+:[a-zA-Z0-9]+\]=(.*)$/gmi;
            var matched = testParamSyntax.test(param);
            if (!matched) {
                warnings.push("\n          A <em>Test Parameter</em> seems wrong: <br>\n          <code>" + param + "</code> <br>\n          It should use the syntax: <br>\n          <code>[source:key]=value</code>\n        ");
            }
            // Check if we should show the warning about the test ModuleId.
            // This is because in the old days, the ModuleId wasn't auto-filled, so people had to add it as a test value.
            // Now it's not necessary any more
            var midRegex = /^\[module:moduleid\]=([0-9]*)$/gmi;
            var midMatch = midRegex.exec(param); // capture the ModuleId
            if (midMatch) {
                var testMid = midMatch[1];
                var urlMid = context.moduleId.toString();
                if (testMid !== urlMid) {
                    warnings.push("\n            Your test ModuleId (" + testMid + ") is different from the current ModuleId (" + urlMid + ").\n            Note that 2sxc 9.33 automatically provides the ModuleId - so you usually do not need to set it any more.\n          ");
                }
            }
        });
    }
    catch (error) {
        console.error('Something went wrong in calculateWarnings for params', error);
    }
    return warnings;
}


/***/ }),

/***/ "RqJz":
/*!****************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/visual-query.component.ts ***!
  \****************************************************************************/
/*! exports provided: VisualQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualQueryComponent", function() { return VisualQueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visual_query_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visual-query.component.html */ "cshZ");
/* harmony import */ var _visual_query_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual-query.component.scss */ "Tywt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plumb-editor/plumb-editor.component */ "zFfS");
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/visual-query.service */ "hWMO");








var VisualQueryComponent = /** @class */ (function () {
    function VisualQueryComponent(context, route, visualQueryService) {
        this.context = context;
        this.route = route;
        this.visualQueryService = visualQueryService;
        this.explorer = {
            run: 'run',
            add: 'add'
        };
        this.activeExplorer = this.explorer.run;
        this.context.init(this.route);
    }
    VisualQueryComponent.prototype.ngOnInit = function () {
        this.visualQueryService.init();
    };
    VisualQueryComponent.prototype.toggleExplorer = function (explorer) {
        this.activeExplorer = (this.activeExplorer === explorer) ? null : explorer;
    };
    VisualQueryComponent.prototype.openHelp = function () {
        window.open('https://r.2sxc.org/visual-query', '_blank');
    };
    VisualQueryComponent.ctorParameters = function () { return [
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_visual_query_service__WEBPACK_IMPORTED_MODULE_7__["VisualQueryService"] }
    ]; };
    VisualQueryComponent.propDecorators = {
        plumbEditor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_6__["PlumbEditorComponent"],] }]
    };
    VisualQueryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-visual-query',
            template: _raw_loader_visual_query_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [_services_visual_query_service__WEBPACK_IMPORTED_MODULE_7__["VisualQueryService"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_visual_query_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_visual_query_service__WEBPACK_IMPORTED_MODULE_7__["VisualQueryService"]])
    ], VisualQueryComponent);
    return VisualQueryComponent;
}());



/***/ }),

/***/ "SIvJ":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/run-explorer/run-explorer.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  padding: 24px;\n}\n\n.actions,\n.footer-actions {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n\n.actions .action:not(:last-of-type),\n.footer-actions .action:not(:last-of-type) {\n  margin-bottom: 8px;\n}\n\n.parameters,\n.warnings,\n.description {\n  margin: 16px 0;\n}\n\n.parameters .title,\n.warnings .title,\n.description .title {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n}\n\n.parameters .title .mat-icon,\n.warnings .title .mat-icon,\n.description .title .mat-icon {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.parameters .values,\n.warnings .values {\n  margin: 0;\n  padding-left: 16px;\n}\n\n.parameters .values li,\n.warnings .values li {\n  padding: 1px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJ1bi1leHBsb3Jlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUNFOztFQUNFLGtCQUFBO0FBRUo7O0FBRUE7OztFQUdFLGNBQUE7QUFDRjs7QUFDRTs7O0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURJOzs7RUFDRSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFLTjs7QUFFRTs7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBSTs7RUFDRSxjQUFBO0FBR04iLCJmaWxlIjoicnVuLWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zLFxyXG4uZm9vdGVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuXHJcbiAgLmFjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtZXRlcnMsXHJcbi53YXJuaW5ncyxcclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IDE2cHggMDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhcmFtZXRlcnMsXHJcbi53YXJuaW5ncyB7XHJcbiAgLnZhbHVlcyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBwYWRkaW5nOiAxcHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC5mb290ZXItYWN0aW9ucyB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4vLyB9XHJcbiJdfQ== */");

/***/ }),

/***/ "Tx43":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/add-explorer/add-explorer.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-slide-toggle {\n  margin: 6px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.collapsible {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  padding: 3px 0;\n}\n\n.collapsible:hover {\n  background-color: #2a2d2e;\n}\n\n.collapsible .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  margin-left: 8px;\n  margin-right: 4px;\n}\n\n.list .list-item {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 4px 0 4px 24px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.list .list-item:hover {\n  background-color: #2a2d2e;\n}\n\n.list .list-item .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  margin-left: 6px;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1leHBsb3Jlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQURGOztBQUdFO0VBQ0UseUJBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGSiIsImZpbGUiOiJhZGQtZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2xsYXBzaWJsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcGFkZGluZzogM3B4IDA7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0NSwgNDYpO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3QgLmxpc3QtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiA0cHggMCA0cHggMjRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0NSwgNDYpO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Tywt":
/*!******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/visual-query.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-side-toolbar {\n  display: flex;\n  flex-direction: column;\n}\n.editor-side-toolbar .spacer {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlzdWFsLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSiIsImZpbGUiOiJ2aXN1YWwtcXVlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yLXNpZGUtdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Vsrf":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/visual-query/query-result/query-result.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">\r\n    <div>\r\n      Query Results\r\n      <ng-container *ngIf=\"debugStream\">\r\n        for Stream: \"{{ debugStream.name }}\" on Source: \"{{ debugStream.sourceName }}\"\r\n      </ng-container>\r\n    </div>\r\n    <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<p class=\"dialog-description\">\r\n  The Full result was logged to the Browser Console. Further down you'll find more debug-infos.\r\n  Executed in {{ timeUsed }}ms ({{ ticksUsed }} ticks)\r\n</p>\r\n\r\n<mat-tab-group dynamicHeight color=\"accent\">\r\n  <mat-tab>\r\n    <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Results\">\r\n      <span>Results</span>\r\n    </div>\r\n\r\n    <p class=\"description\">\r\n      <ng-container *ngIf=\"top === 0\">Showing All results</ng-container>\r\n      <ng-container *ngIf=\"top !== 0\">Showing top {{ top }} results</ng-container>\r\n      <button mat-button *ngFor=\"let option of optionsForTop\" (click)=\"show(option)\">\r\n        Show\r\n        <ng-container *ngIf=\"option === 0\">All</ng-container>\r\n        <ng-container *ngIf=\"option !== 0\">{{ option }}</ng-container>\r\n      </button>\r\n    </p>\r\n    <pre>{{ result | json }}</pre>\r\n  </mat-tab>\r\n\r\n  <mat-tab *ngIf=\"parameters?.length\">\r\n    <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Parameters\">\r\n      <span>Parameters</span>\r\n    </div>\r\n\r\n    <br />\r\n    <ul class=\"description\">\r\n      <li *ngFor=\"let param of parameters\">{{ param }}</li>\r\n    </ul>\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Sources\">\r\n      <span>Sources</span>\r\n    </div>\r\n\r\n    <br />\r\n    <table class=\"description\">\r\n      <tr>\r\n        <th>Guid</th>\r\n        <th>Type</th>\r\n        <th>Configuration</th>\r\n        <th>Error</th>\r\n      </tr>\r\n      <tr *ngFor=\"let source of sources | keyvalue\">\r\n        <td>\r\n          <pre>{{ source.value.Guid }}</pre>\r\n        </td>\r\n        <td>{{ source.value.Type }}</td>\r\n        <td>\r\n          <ol>\r\n            <li *ngFor=\"let config of source.value.Configuration | keyvalue\">\r\n              <b>{{ config.key }}</b>=<em>{{ config.value }}</em>\r\n            </li>\r\n          </ol>\r\n        </td>\r\n        <td>{{ source.value.Error }}</td>\r\n      </tr>\r\n    </table>\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Streams\">\r\n      <span>Streams</span>\r\n    </div>\r\n\r\n    <br />\r\n    <table class=\"description\">\r\n      <tr>\r\n        <th>Source</th>\r\n        <th>Target</th>\r\n        <th>Items</th>\r\n        <th>Error</th>\r\n      </tr>\r\n      <tr *ngFor=\"let stream of streams\">\r\n        <td>\r\n          <pre>{{ stream.Source + \":\" + stream.SourceOut }}</pre>\r\n        </td>\r\n        <td>\r\n          <pre>{{ stream.Target + \":\" + stream.TargetIn }}</pre>\r\n        </td>\r\n        <td>{{ stream.Count }}</td>\r\n        <td>{{ stream.Error }}</td>\r\n      </tr>\r\n    </table>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n");

/***/ }),

/***/ "X3uf":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/query-result/query-result.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\n  font-size: 14px;\n}\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow-x: auto;\n}\n\nth {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHF1ZXJ5LXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InF1ZXJ5LXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5wcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDkuNXB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "XSd5":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/visual-query/run-explorer/run-explorer.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editor-active-explorer fancy-scrollbar-dark\" *ngIf=\"(pipelineModel$ | async) as pipelineModel\">\r\n\r\n  <div class=\"wrapper\">\r\n    <div class=\"actions\">\r\n      <button mat-raised-button class=\"action\" color=\"accent\" (click)=\"saveAndRunQuery(true, true)\">\r\n        Save and run\r\n      </button>\r\n      <button mat-raised-button class=\"action\" (click)=\"saveAndRunQuery(false, true)\">\r\n        Run\r\n      </button>\r\n      <button mat-raised-button class=\"action\" (click)=\"saveAndRunQuery(true, false)\">\r\n        Save\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"parameters\">\r\n      <div class=\"title\">\r\n        <div>Query Parameters</div>\r\n        <div>\r\n          <button mat-icon-button matTooltip=\"Edit parameters\" (click)=\"editPipeline()\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Query Params Docs\" (click)=\"openParamsHelp()\">\r\n            <mat-icon>info</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <ul class=\"values\" *ngIf=\"pipelineModel.Pipeline.Params?.length\">\r\n        <li *ngFor=\"let param of pipelineModel.Pipeline.Params?.split('\\n')\">\r\n          {{ param }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"parameters\">\r\n      <div class=\"title\">Test Parameters</div>\r\n      <ul class=\"values\" *ngIf=\"pipelineModel.Pipeline.TestParameters?.length\">\r\n        <li *ngFor=\"let param of pipelineModel.Pipeline.TestParameters?.split('\\n')\">\r\n          {{ param }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"(warnings$ | async) as warnings\">\r\n      <div class=\"warnings\" *ngIf=\"warnings.length\">\r\n        <div class=\"title\">\r\n          <span>Warnings</span>\r\n          <mat-icon style=\"color: red\">warning</mat-icon>\r\n        </div>\r\n        <ol class=\"values\">\r\n          <li *ngFor=\"let warning of warnings\" [innerHTML]=\"warning\">\r\n          </li>\r\n        </ol>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <div class=\"description\" *ngIf=\"pipelineModel.Pipeline.Description\">\r\n      <div class=\"title\">Query Description</div>\r\n      <div>{{ pipelineModel.Pipeline.Description }}</div>\r\n    </div>\r\n\r\n    <div class=\"footer-actions\">\r\n      <button mat-raised-button class=\"action\" (click)=\"openRestApi()\">\r\n        Use in JSON / REST API\r\n        <mat-icon svgIcon=\"code-curly\"></mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "cshZ":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/visual-query/visual-query.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n<div class=\"editor-root\">\r\n  <div class=\"editor-side-toolbar\">\r\n    <div class=\"button\" matTooltip=\"Run\" [ngClass]=\"{ 'active': activeExplorer === explorer.run }\"\r\n      (click)=\"toggleExplorer(explorer.run)\">\r\n      <mat-icon>play_arrow</mat-icon>\r\n    </div>\r\n    <div class=\"button\" matTooltip=\"Add\" [ngClass]=\"{ 'active': activeExplorer === explorer.add }\"\r\n      (click)=\"toggleExplorer(explorer.add)\">\r\n      <mat-icon>add</mat-icon>\r\n    </div>\r\n    <div class=\"spacer\"></div>\r\n    <div class=\"button\" matTooltip=\"Help\" (click)=\"openHelp()\">\r\n      <mat-icon>help_outline</mat-icon>\r\n    </div>\r\n  </div>\r\n\r\n  <app-run-explorer [hidden]=\"activeExplorer !== explorer.run\"></app-run-explorer>\r\n\r\n  <app-add-explorer [hidden]=\"activeExplorer !== explorer.add\"></app-add-explorer>\r\n\r\n  <app-plumb-editor></app-plumb-editor>\r\n</div>\r\n");

/***/ }),

/***/ "h01k":
/*!*********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/plumb-editor/plumber.helper.ts ***!
  \*********************************************************************************/
/*! exports provided: dataSrcIdPrefix, Plumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSrcIdPrefix", function() { return dataSrcIdPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plumber", function() { return Plumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "qb9A");


var dataSrcIdPrefix = 'dataSource_';
var Plumber = /** @class */ (function () {
    function Plumber(jsPlumbRoot, pipelineModel, dataSources, onConnectionsChanged, onDragend, onDebugStream) {
        var _this = this;
        this.jsPlumbRoot = jsPlumbRoot;
        this.pipelineModel = pipelineModel;
        this.dataSources = dataSources;
        this.onConnectionsChanged = onConnectionsChanged;
        this.onDragend = onDragend;
        this.onDebugStream = onDebugStream;
        this.lineCount = 0;
        this.linePaintDefault = {
            stroke: '#61B7CF',
            strokeWidth: 4,
            outlineStroke: 'white',
            outlineWidth: 2,
        };
        this.lineColors = [
            '#009688', '#00bcd4', '#3f51b5', '#9c27b0', '#e91e63',
            '#db4437', '#ff9800', '#60a917', '#60a917', '#008a00',
            '#00aba9', '#1ba1e2', '#0050ef', '#6a00ff', '#aa00ff',
            '#f472d0', '#d80073', '#a20025', '#e51400', '#fa6800',
            '#f0a30a', '#e3c800', '#825a2c', '#6d8764', '#647687',
            '#76608a', '#a0522d',
        ];
        this.maxCols = this.lineColors.length - 1;
        this.uuidColorMap = {};
        this.bulkDelete = false;
        this.instance = window.jsPlumb.getInstance(this.getInstanceDefaults(this.jsPlumbRoot));
        this.instance.batch(function () {
            _this.initDomDataSources();
            _this.initWirings();
            _this.bindEvents();
        });
        // spm NOTE: repaint after initial paint fixes:
        // Error: <svg> attribute width: Expected length, "-Infinity".
        this.instance.repaintEverything();
    }
    Plumber.prototype.destroy = function () {
        this.instance.reset();
        this.instance.unbindContainer();
    };
    Plumber.prototype.removeEndpointsOnDataSource = function (pipelineDataSourceGuid) {
        var _this = this;
        var elementId = dataSrcIdPrefix + pipelineDataSourceGuid;
        this.bulkDelete = true;
        this.instance.batch(function () {
            _this.instance.selectEndpoints({ element: elementId }).delete();
        });
        this.bulkDelete = false;
    };
    Plumber.prototype.getAllConnections = function () {
        var connectionInfos = this.instance.getAllConnections().map(function (connection) {
            var wire = {
                From: connection.sourceId.replace(dataSrcIdPrefix, ''),
                Out: connection.endpoints[0].getOverlay('endpointLabel').label,
                To: connection.targetId.replace(dataSrcIdPrefix, ''),
                In: connection.endpoints[1].getOverlay('endpointLabel').label,
            };
            return wire;
        });
        return connectionInfos;
    };
    Plumber.prototype.getStreamsOut = function () {
        var streamsOut = [];
        this.instance.selectEndpoints({ target: dataSrcIdPrefix + 'Out' }).each(function (endpoint) {
            streamsOut.push(endpoint.getOverlay('endpointLabel').label);
        });
        var streamsOutStr = streamsOut.join(',');
        return streamsOutStr;
    };
    Plumber.prototype.putEntityCountOnConnections = function (result) {
        var _this = this;
        var _a;
        (_a = result.Streams) === null || _a === void 0 ? void 0 : _a.forEach(function (stream) {
            var _a, _b;
            var sourceElementId = dataSrcIdPrefix + stream.Source;
            var outTargets = ['00000000-0000-0000-0000-000000000000', _this.pipelineModel.Pipeline.EntityGuid];
            var targetElementId = outTargets.includes(stream.Target) ? dataSrcIdPrefix + 'Out' : dataSrcIdPrefix + stream.Target;
            var fromUuid = sourceElementId + '_out_' + stream.SourceOut;
            var toUuid = targetElementId + '_in_' + stream.TargetIn;
            var sEndp = _this.instance.getEndpoint(fromUuid);
            (_b = (_a = sEndp === null || sEndp === void 0 ? void 0 : sEndp.connections) === null || _a === void 0 ? void 0 : _a.filter(function (connection) { return connection.endpoints[1].getUuid() === toUuid; })) === null || _b === void 0 ? void 0 : _b.forEach(function (connection) {
                var label = !stream.Error ? stream.Count.toString() : '';
                var cssClass = 'streamEntitiesCount ' + (!stream.Error ? '' : 'streamEntitiesError');
                connection.setLabel({
                    label: label,
                    cssClass: cssClass,
                    events: {
                        click: function (labelOverlay) {
                            if (!_this.pipelineModel.Pipeline.AllowEdit) {
                                return;
                            }
                            _this.onDebugStream(stream);
                        },
                    },
                });
            });
        });
    };
    Plumber.prototype.nextLinePaintStyle = function (uuid) {
        return (this.uuidColorMap[uuid] ||
            (this.uuidColorMap[uuid] = Object.assign({}, this.linePaintDefault, { stroke: this.lineColors[this.lineCount++ % this.maxCols] })));
    };
    Plumber.prototype.getInstanceDefaults = function (container) {
        var defaults = {
            Container: container,
            Connector: ['Bezier', { curviness: 70 }],
            PaintStyle: this.nextLinePaintStyle('dummy'),
            HoverPaintStyle: {
                stroke: '#216477',
                strokeWidth: 4,
                outlineStroke: 'white',
                outlineWidth: 2,
            },
        };
        return defaults;
    };
    /** Create sources, targets and endpoints */
    Plumber.prototype.initDomDataSources = function () {
        var e_1, _a;
        var _this = this;
        var _b, _c;
        var _loop_1 = function (pipelineDataSource) {
            var domDataSource = this_1.jsPlumbRoot.querySelector('#' + dataSrcIdPrefix + pipelineDataSource.EntityGuid);
            if (!domDataSource) {
                return "continue";
            }
            var dataSource = this_1.dataSources.find(function (ds) { return ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType; });
            if (!dataSource) {
                return "continue";
            }
            if (this_1.pipelineModel.Pipeline.AllowEdit) {
                // WARNING! Must happen before instance.makeSource()
                this_1.instance.draggable(domDataSource, {
                    grid: [20, 20],
                    stop: function (event) {
                        var element = event.el;
                        var pipelineDataSourceGuid = element.id.replace(dataSrcIdPrefix, '');
                        var position = {
                            Top: event.finalPos[1],
                            Left: event.finalPos[0],
                        };
                        setTimeout(function () { _this.onDragend(pipelineDataSourceGuid, position); });
                    }
                });
            }
            // Add Out-Endpoints from Definition
            (_b = dataSource.Out) === null || _b === void 0 ? void 0 : _b.forEach(function (name) {
                _this.addEndpoint(domDataSource, name, false, pipelineDataSource);
            });
            // Add In-Endpoints from Definition
            (_c = dataSource.In) === null || _c === void 0 ? void 0 : _c.forEach(function (name) {
                _this.addEndpoint(domDataSource, name, true, pipelineDataSource);
            });
            // Make DataSource a Target for new Endpoints (if .In is an Array)
            if (dataSource.In) {
                var targetEndpointUnlimited = this_1.buildTargetEndpoint();
                targetEndpointUnlimited.maxConnections = -1;
                this_1.instance.makeTarget(domDataSource, targetEndpointUnlimited);
            }
            if (dataSource.DynamicOut) {
                this_1.instance.makeSource(domDataSource, this_1.buildSourceEndpoint(), { filter: '.add-endpoint' });
            }
        };
        var this_1 = this;
        try {
            for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.pipelineModel.DataSources), _e = _d.next(); !_e.done; _e = _d.next()) {
                var pipelineDataSource = _e.value;
                _loop_1(pipelineDataSource);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Create wires */
    Plumber.prototype.initWirings = function () {
        var _this = this;
        var _a;
        (_a = this.pipelineModel.Pipeline.StreamWiring) === null || _a === void 0 ? void 0 : _a.forEach(function (wire) {
            // read connections from Pipeline
            var sourceElementId = dataSrcIdPrefix + wire.From;
            var fromUuid = sourceElementId + '_out_' + wire.Out;
            var targetElementId = dataSrcIdPrefix + wire.To;
            var toUuid = targetElementId + '_in_' + wire.In;
            // Ensure In-Endpoint exist
            if (!_this.instance.getEndpoint(fromUuid)) {
                var domDataSource = _this.jsPlumbRoot.querySelector('#' + sourceElementId);
                if (!domDataSource) {
                    return;
                }
                var guid_1 = domDataSource.id.replace(dataSrcIdPrefix, '');
                var pipelineDataSource = _this.pipelineModel.DataSources.find(function (pipeDataSource) { return pipeDataSource.EntityGuid === guid_1; });
                _this.addEndpoint(domDataSource, wire.Out, false, pipelineDataSource);
            }
            // Ensure Out-Endpoint exist
            if (!_this.instance.getEndpoint(toUuid)) {
                var domDataSource = _this.jsPlumbRoot.querySelector('#' + targetElementId);
                if (!domDataSource) {
                    return;
                }
                var guid_2 = domDataSource.id.replace(dataSrcIdPrefix, '');
                var pipelineDataSource = _this.pipelineModel.DataSources.find(function (pipeDataSource) { return pipeDataSource.EntityGuid === guid_2; });
                _this.addEndpoint(domDataSource, wire.In, true, pipelineDataSource);
            }
            try {
                _this.instance.connect({
                    uuids: [fromUuid, toUuid],
                    paintStyle: _this.nextLinePaintStyle(fromUuid),
                });
            }
            catch (e) {
                console.error({ message: 'Connection failed', from: fromUuid, to: toUuid });
            }
        });
    };
    Plumber.prototype.addEndpoint = function (domDataSource, endpointName, isIn, pipelineDataSource) {
        var _this = this;
        var _a, _b, _c;
        var dataSource = this.dataSources.find(function (d) { return d.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType; });
        var isDynamic = isIn
            ? !((_a = dataSource.In) === null || _a === void 0 ? void 0 : _a.some(function (name) { return _this.getEndpointInfo(name, false); }))
            : !((_b = dataSource.Out) === null || _b === void 0 ? void 0 : _b.some(function (name) { return _this.getEndpointInfo(name, false); }));
        var endpointInfo = this.getEndpointInfo(endpointName, isDynamic);
        var style;
        if (isDynamic) {
            style = 'dynamic';
        }
        else if (!endpointInfo.required) {
            style = '';
        }
        else {
            var wireExists = (_c = this.pipelineModel.Pipeline.StreamWiring) === null || _c === void 0 ? void 0 : _c.some(function (wire) {
                var targetElementId = dataSrcIdPrefix + wire.To;
                var targetEndpointName = wire.In;
                return targetElementId === domDataSource.id && targetEndpointName === endpointInfo.name;
            });
            style = wireExists ? '' : 'required';
        }
        var uuid = domDataSource.id + (isIn ? '_in_' : '_out_') + endpointInfo.name;
        var model = isIn ? this.buildTargetEndpoint(style) : this.buildSourceEndpoint(style);
        // Endpoints on Out-DataSource must be always enabled
        var params = {
            uuid: uuid,
            enabled: this.pipelineModel.Pipeline.AllowEdit
                || pipelineDataSource.EntityGuid === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_1__["eavConstants"].pipelineDesigner.outDataSource.EntityGuid
        };
        var endPoint = this.instance.addEndpoint(domDataSource, model, params);
        endPoint.getOverlay('endpointLabel').setLabel(endpointInfo.name);
    };
    Plumber.prototype.buildSourceEndpoint = function (style) {
        var _a;
        var sourceEndpoint = {
            paintStyle: { fill: 'transparent', radius: 10 },
            cssClass: (_a = 'sourceEndpoint ' + style) !== null && _a !== void 0 ? _a : '',
            maxConnections: -1,
            isSource: true,
            anchor: ['Continuous', { faces: ['top'] }],
            overlays: this.getEndpointOverlays(true)
        };
        return sourceEndpoint;
    };
    Plumber.prototype.buildTargetEndpoint = function (style) {
        var _a;
        var targetEndpoint = {
            paintStyle: { fill: 'transparent', radius: 10 },
            cssClass: (_a = 'targetEndpoint ' + style) !== null && _a !== void 0 ? _a : '',
            maxConnections: 1,
            isTarget: true,
            anchor: ['Continuous', { faces: ['bottom'] }],
            overlays: this.getEndpointOverlays(false),
            dropOptions: { hoverClass: 'hover', activeClass: 'active' }
        };
        return targetEndpoint;
    };
    Plumber.prototype.getEndpointOverlays = function (isSource) {
        var _this = this;
        return [
            [
                'Label',
                {
                    id: 'endpointLabel',
                    location: [0.5, isSource ? 0 : 1],
                    label: 'Default',
                    cssClass: isSource ? 'endpointSourceLabel' : 'endpointTargetLabel',
                    events: {
                        click: function (labelOverlay) {
                            if (!_this.pipelineModel.Pipeline.AllowEdit) {
                                return;
                            }
                            var newLabel = prompt('Rename stream', labelOverlay.label);
                            if (!newLabel) {
                                return;
                            }
                            labelOverlay.setLabel(newLabel);
                            setTimeout(function () { _this.onConnectionsChanged(); });
                        },
                    },
                }
            ]
        ];
    };
    Plumber.prototype.bindEvents = function () {
        var _this = this;
        this.instance.bind('connectionDetached', function (info) {
            if (_this.bulkDelete) {
                return;
            }
            var domDataSource = info.target;
            var pipelineDataSource = _this.pipelineModel.DataSources.find(function (pipelineDS) { return pipelineDS.EntityGuid === domDataSource.id.replace(dataSrcIdPrefix, ''); });
            var dataSource = _this.dataSources.find(function (ds) { return ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType; });
            var label = info.targetEndpoint.getOverlay('endpointLabel').label;
            var isDynamic = !dataSource.In.some(function (name) { return _this.getEndpointInfo(name, false).name === label; });
            if (isDynamic) {
                _this.instance.deleteEndpoint(info.targetEndpoint);
                setTimeout(function () { _this.onConnectionsChanged(); });
            }
            else {
                setTimeout(function () { _this.onConnectionsChanged(); });
            }
        });
        this.instance.bind('connection', function (info) {
            if (info.sourceId === info.targetId) {
                setTimeout(function () {
                    _this.instance.deleteConnection(info.connection, { fireEvent: false });
                    setTimeout(function () { _this.onConnectionsChanged(); });
                });
                return;
            }
            var endpointLabel = info.targetEndpoint.getOverlay('endpointLabel');
            var labelPrompt = endpointLabel.getLabel();
            var endpoints = _this.instance.getEndpoints(info.target.id);
            var targetEndpointHasSameLabel = endpoints.some(function (endpoint) {
                var label = endpoint.getOverlay('endpointLabel').getLabel();
                return label === labelPrompt &&
                    info.targetEndpoint.id !== endpoint.id &&
                    endpoint.canvas.classList.contains('targetEndpoint');
            });
            if (targetEndpointHasSameLabel) {
                endpointLabel.setLabel("PleaseRename" + Math.floor(Math.random() * 99999));
            }
            setTimeout(function () { _this.onConnectionsChanged(); });
        });
    };
    Plumber.prototype.getEndpointInfo = function (endpointName, isDynamic) {
        var name;
        var required;
        if (isDynamic) {
            name = endpointName;
            required = false;
        }
        else {
            var trimmed = endpointName.trim();
            required = trimmed.endsWith('*');
            name = !required ? trimmed : trimmed.substring(0, trimmed.length - 1);
        }
        var endpointInfo = {
            name: name,
            required: required,
        };
        return endpointInfo;
    };
    return Plumber;
}());



/***/ }),

/***/ "hWMO":
/*!***********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/services/visual-query.service.ts ***!
  \***********************************************************************************/
/*! exports provided: VisualQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualQueryService", function() { return VisualQueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/cloneDeep */ "XIp8");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../permissions/services/metadata.service */ "LQlA");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "qb9A");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ "X9FW");
/* harmony import */ var _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../query-result/query-result.component */ "/wWL");
/* harmony import */ var _stream_error_result_stream_error_result_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../stream-error-result/stream-error-result.component */ "yC2S");
/* harmony import */ var _query_definition_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./query-definition.service */ "qrHF");
















var VisualQueryService = /** @class */ (function () {
    function VisualQueryService(router, route, queryDefinitionService, titleService, snackBar, dialog, viewContainerRef, zone, metadataService, contentTypesService, changeDetectorRef) {
        this.router = router;
        this.route = route;
        this.queryDefinitionService = queryDefinitionService;
        this.titleService = titleService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.zone = zone;
        this.metadataService = metadataService;
        this.contentTypesService = contentTypesService;
        this.changeDetectorRef = changeDetectorRef;
        this.pipelineModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.dataSources$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.putEntityCountOnConnections$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.pipelineId = parseInt(this.route.snapshot.paramMap.get('pipelineId'), 10);
        this.doRefresh = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    VisualQueryService.prototype.ngOnDestroy = function () {
        this.pipelineModel$.complete();
        this.dataSources$.complete();
        this.putEntityCountOnConnections$.complete();
        this.subscription.unsubscribe();
    };
    VisualQueryService.prototype.init = function () {
        var _this = this;
        this.fetchDataSources(function () { return _this.fetchPipeline(); });
        this.attachKeyboardSave();
        this.refreshOnChildClosed();
    };
    VisualQueryService.prototype.editPipelineEntity = function () {
        var _this = this;
        // save Pipeline, then open Edit Dialog
        this.savePipeline(function () {
            var form = {
                items: [{ EntityId: _this.pipelineModel$.value.Pipeline.EntityId }],
            };
            var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_12__["convertFormToUrl"])(form);
            _this.doRefresh = true;
            _this.router.navigate(["edit/" + formUrl], { relativeTo: _this.route });
        });
    };
    VisualQueryService.prototype.saveAndRun = function (save, run) {
        var _this = this;
        if (save && run) {
            this.savePipeline(function () { _this.runPipeline(); });
        }
        else if (save) {
            this.savePipeline();
        }
        else if (run) {
            this.runPipeline();
        }
    };
    VisualQueryService.prototype.addDataSource = function (dataSource) {
        var pipelineModel = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_6__["default"])(this.pipelineModel$.value);
        var newPipelineDataSource = {
            Description: '',
            EntityGuid: 'unsaved' + (pipelineModel.DataSources.length + 1),
            EntityId: undefined,
            Name: dataSource.Name,
            PartAssemblyAndType: dataSource.PartAssemblyAndType,
            VisualDesignerData: { Top: 100, Left: 100 },
        };
        pipelineModel.DataSources.push(newPipelineDataSource);
        this.pipelineModel$.next(pipelineModel);
        this.savePipeline();
    };
    VisualQueryService.prototype.removeDataSource = function (pipelineDataSourceGuid, connections, streamsOut) {
        var pipelineModel = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_6__["default"])(this.pipelineModel$.value);
        pipelineModel.DataSources = pipelineModel.DataSources.filter(function (pipelineDS) { return pipelineDS.EntityGuid !== pipelineDataSourceGuid; });
        pipelineModel.Pipeline.StreamWiring = connections;
        pipelineModel.Pipeline.StreamsOut = streamsOut;
        this.pipelineModel$.next(pipelineModel);
    };
    VisualQueryService.prototype.renameDataSource = function (pipelineDataSourceGuid, name) {
        var pipelineModel = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_6__["default"])(this.pipelineModel$.value);
        var pipelineDataSource = pipelineModel.DataSources.find(function (pipelineDS) { return pipelineDS.EntityGuid === pipelineDataSourceGuid; });
        pipelineDataSource.Name = name;
        this.pipelineModel$.next(pipelineModel);
    };
    VisualQueryService.prototype.changeDataSourceDescription = function (pipelineDataSourceGuid, description) {
        var pipelineModel = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_6__["default"])(this.pipelineModel$.value);
        var pipelineDataSource = pipelineModel.DataSources.find(function (pipelineDS) { return pipelineDS.EntityGuid === pipelineDataSourceGuid; });
        pipelineDataSource.Description = description;
        this.pipelineModel$.next(pipelineModel);
    };
    VisualQueryService.prototype.changeConnections = function (connections, streamsOut) {
        var pipelineModel = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_6__["default"])(this.pipelineModel$.value);
        pipelineModel.Pipeline.StreamWiring = connections;
        pipelineModel.Pipeline.StreamsOut = streamsOut;
        this.pipelineModel$.next(pipelineModel);
    };
    VisualQueryService.prototype.changeDataSourcePosition = function (pipelineDataSourceGuid, position) {
        var pipelineModel = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_6__["default"])(this.pipelineModel$.value);
        var pipelineDataSource = pipelineModel.DataSources.find(function (pipelineDS) { return pipelineDS.EntityGuid === pipelineDataSourceGuid; });
        if (!pipelineDataSource) {
            // spm NOTE: fixes problem where dataSource position can't be updated if dataSource with guid unsavedXX gets saved while dragging.
            // Can happen if dataSource is just added and user drags it and save happens.
            return;
        }
        pipelineDataSource.VisualDesignerData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, pipelineDataSource.VisualDesignerData), position);
        this.pipelineModel$.next(pipelineModel);
    };
    VisualQueryService.prototype.editDataSource = function (pipelineDataSource) {
        var _this = this;
        var dataSource = this.dataSources$.value.find(function (ds) { return ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType; });
        // const contentTypeName = dataSource?.ContentType
        //   ?? '|Config ' + this.queryDefinitionService.typeNameFilter(pipelineDataSource.PartAssemblyAndType, 'classFullName');
        var contentTypeName = dataSource.ContentType;
        var typeId = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_11__["eavConstants"].metadata.entity.type;
        var keyType = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_11__["eavConstants"].keyTypes.guid;
        var key = pipelineDataSource.EntityGuid;
        // query for existing Entity
        this.metadataService.getMetadata(typeId, keyType, key, contentTypeName).subscribe(function (metadata) {
            // edit existing Entity
            if (metadata.length) {
                var form = {
                    items: [{ EntityId: metadata[0].Id }],
                };
                var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_12__["convertFormToUrl"])(form);
                _this.router.navigate(["edit/" + formUrl], { relativeTo: _this.route });
                return;
            }
            // Check if the type exists, and if yes, create new Entity
            _this.contentTypesService.retrieveContentType(contentTypeName /*, { ignoreErrors: 'true' } */).subscribe({
                next: function (contentType) {
                    var form = {
                        items: [{
                                ContentTypeName: contentTypeName,
                                For: {
                                    Target: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_11__["eavConstants"].metadata.entity.target,
                                    Guid: key,
                                }
                            }],
                    };
                    var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_12__["convertFormToUrl"])(form);
                    _this.router.navigate(["edit/" + formUrl], { relativeTo: _this.route });
                },
                error: function (error) {
                    alert('Server reports error - this usually means that this data-source doesn\'t have any configuration');
                }
            });
        });
    };
    VisualQueryService.prototype.savePipeline = function (callback) {
        var _this = this;
        this.snackBar.open('Saving...');
        this.queryDefinitionService.savePipeline(this.pipelineModel$.value).subscribe({
            next: function (pipelineModel) {
                _this.snackBar.open('Saved', null, { duration: 2000 });
                _this.pipelineModel$.next(pipelineModel);
                if (callback != null) {
                    callback();
                }
            },
            error: function (error) {
                _this.snackBar.open('Save Pipeline failed', null, { duration: 2000 });
            }
        });
    };
    VisualQueryService.prototype.runPipeline = function (top) {
        var _this = this;
        if (top === void 0) { top = 25; }
        this.snackBar.open('Running query...');
        this.queryDefinitionService.runPipeline(this.pipelineModel$.value.Pipeline.EntityId, top).subscribe({
            next: function (pipelineResult) {
                _this.snackBar.open('Query worked', null, { duration: 2000 });
                _this.showQueryResult(pipelineResult, top);
                console.warn(pipelineResult);
                // push cloned pipelineModel to reset jsPlumb
                _this.pipelineModel$.next(Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.pipelineModel$.value));
                setTimeout(function () { _this.putEntityCountOnConnections$.next(pipelineResult); });
            },
            error: function (error) {
                _this.snackBar.open('Query failed', null, { duration: 2000 });
            }
        });
    };
    VisualQueryService.prototype.debugStream = function (stream, top) {
        var _this = this;
        if (top === void 0) { top = 25; }
        if (stream.Error) {
            this.showStreamErrorResult(stream);
            return;
        }
        if (stream.Count === 0) {
            return;
        }
        this.snackBar.open('Running stream...');
        var pipelineId = this.pipelineModel$.value.Pipeline.EntityId;
        this.queryDefinitionService.debugStream(pipelineId, stream.Source, stream.SourceOut, top).subscribe({
            next: function (streamResult) {
                _this.snackBar.open('Stream worked', null, { duration: 2000 });
                var pipelineDataSource = _this.pipelineModel$.value.DataSources.find(function (ds) { return ds.EntityGuid === stream.Source; });
                var debugStream = {
                    name: stream.SourceOut,
                    source: stream.Source,
                    sourceName: pipelineDataSource.Name,
                    original: stream,
                };
                _this.showQueryResult(streamResult, top, debugStream);
                console.warn(streamResult);
            },
            error: function (error) {
                _this.snackBar.open('Stream failed', null, { duration: 2000 });
            },
        });
    };
    VisualQueryService.prototype.fetchPipeline = function (reloadingSnackBar) {
        var _this = this;
        if (reloadingSnackBar === void 0) { reloadingSnackBar = false; }
        if (reloadingSnackBar) {
            this.snackBar.open('Reloading query, please wait...');
        }
        this.queryDefinitionService.fetchPipeline(this.pipelineId, this.dataSources$.value).subscribe(function (pipelineModel) {
            if (reloadingSnackBar) {
                _this.snackBar.open('Query reloaded', null, { duration: 2000 });
            }
            _this.pipelineModel$.next(pipelineModel);
            _this.titleService.setTitle(pipelineModel.Pipeline.Name + " - Visual Query");
        });
    };
    VisualQueryService.prototype.showQueryResult = function (result, top, debugStream) {
        var dialogData = {
            result: result,
            debugStream: debugStream,
            top: top,
        };
        this.dialog.open(_query_result_query_result_component__WEBPACK_IMPORTED_MODULE_13__["QueryResultComponent"], {
            autoFocus: false,
            backdropClass: 'dialog-backdrop',
            closeOnNavigation: false,
            data: dialogData,
            panelClass: ['dialog-panel', "dialog-panel-medium", 'no-scrollbar'],
            // spm NOTE: position used to force align-items: flex-start; on cdk-global-overlay-wrapper.
            // Real top margin is overwritten in css e.g. dialog-panel-large
            position: { top: '0' },
            viewContainerRef: this.viewContainerRef,
        });
        this.changeDetectorRef.markForCheck();
    };
    VisualQueryService.prototype.showStreamErrorResult = function (stream) {
        var dialogData = {
            errorData: stream.ErrorData,
        };
        this.dialog.open(_stream_error_result_stream_error_result_component__WEBPACK_IMPORTED_MODULE_14__["StreamErrorResultComponent"], {
            autoFocus: false,
            backdropClass: 'dialog-backdrop',
            closeOnNavigation: false,
            data: dialogData,
            panelClass: ['dialog-panel', "dialog-panel-medium", 'no-scrollbar'],
            // spm NOTE: position used to force align-items: flex-start; on cdk-global-overlay-wrapper.
            // Real top margin is overwritten in css e.g. dialog-panel-large
            position: { top: '0' },
            viewContainerRef: this.viewContainerRef,
        });
        this.changeDetectorRef.markForCheck();
    };
    VisualQueryService.prototype.fetchDataSources = function (callback) {
        var _this = this;
        this.queryDefinitionService.fetchDataSources().subscribe(function (dataSources) {
            _this.dataSources$.next(dataSources);
            callback();
        });
    };
    VisualQueryService.prototype.attachKeyboardSave = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(window, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function () { return !_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) {
                var CTRL_S = (navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey) && event.keyCode === 83;
                return CTRL_S;
            })).subscribe(function (event) {
                event.preventDefault();
                _this.zone.run(function () { _this.savePipeline(); });
            }));
        });
    };
    VisualQueryService.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(!!this.route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () { return !!_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function () {
            var refresh = _this.doRefresh;
            _this.doRefresh = false;
            return refresh;
        })).subscribe(function () {
            _this.fetchPipeline(true);
        }));
    };
    VisualQueryService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _query_definition_service__WEBPACK_IMPORTED_MODULE_15__["QueryDefinitionService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_10__["MetadataService"] },
        { type: _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__["ContentTypesService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    VisualQueryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _query_definition_service__WEBPACK_IMPORTED_MODULE_15__["QueryDefinitionService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_10__["MetadataService"],
            _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__["ContentTypesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], VisualQueryService);
    return VisualQueryService;
}());



/***/ }),

/***/ "m+qR":
/*!*********************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/stream-error-result/stream-error-result.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\n  font-size: 14px;\n}\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow-x: auto;\n}\n\n.mat-icon {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0cmVhbS1lcnJvci1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzdHJlYW0tZXJyb3ItcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogOS41cHg7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "oV/i":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/plumb-editor/plumb-editor.helpers.ts ***!
  \***************************************************************************************/
/*! exports provided: guiTypes, calculateTypeInfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiTypes", function() { return guiTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTypeInfos", function() { return calculateTypeInfos; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var guiTypes = {
    Cache: { Name: 'Cache', Icon: 'history', UiHint: 'Caching of data' },
    Filter: { Name: 'Filter', Icon: 'filter_list', UiHint: 'Filter data - usually returning less items than came in' },
    Logic: { Name: 'Logic', Icon: 'share', UiHint: 'Logic operations - usually choosing between different streams' },
    Lookup: { Name: 'Lookup', Icon: 'search', UiHint: 'Lookup operation - usually looking for other data based on a criteria' },
    Modify: { Name: 'Modify', Icon: 'edit_attributes', UiHint: 'Modify data - usually changing, adding or removing values' },
    Security: { Name: 'Security', Icon: 'account_circle', UiHint: 'Security - usually limit what the user sees based on his identity' },
    Sort: { Name: 'Sort', Icon: 'sort', UiHint: 'Sort the items' },
    Source: { Name: 'Source', Icon: 'cloud_upload', UiHint: 'Source of new data - usually SQL, CSV or similar' },
    Target: { Name: 'Target', Icon: 'adjust', UiHint: 'Target - usually just a destination of data' },
    Unknown: { Name: 'Unknown', Icon: 'fiber_manual_record', UiHint: 'Unknown type' },
    Debug: { Name: 'Debug', Icon: 'bug_report', UiHint: 'Debugging Tools' },
    System: { Name: 'System', Icon: 'military_tech', UiHint: 'System Data' },
};
function calculateTypeInfos(pipelineDataSources, dataSources) {
    var e_1, _a;
    var typeInfos = {};
    var _loop_1 = function (pipelineDataSource) {
        var typeInfo = void 0;
        var dataSource = dataSources.find(function (ds) { return ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType; });
        if (dataSource) {
            typeInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (dataSource.PrimaryType ? guiTypes[dataSource.PrimaryType] : guiTypes.Unknown));
            if (dataSource.Icon != null) {
                typeInfo.Icon = dataSource.Icon;
            }
            if (dataSource.DynamicIn != null) {
                typeInfo.DynamicIn = dataSource.DynamicIn;
            }
            if (dataSource.DynamicOut != null) {
                typeInfo.DynamicOut = dataSource.DynamicOut;
            }
            if (dataSource.HelpLink != null) {
                typeInfo.HelpLink = dataSource.HelpLink;
            }
            if (dataSource.EnableConfig != null) {
                typeInfo.EnableConfig = dataSource.EnableConfig;
            }
            if (dataSource.UiHint != null) {
                typeInfo.UiHint = dataSource.UiHint;
            }
        }
        if (!typeInfo) {
            typeInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, guiTypes.Unknown);
        }
        typeInfos[pipelineDataSource.EntityGuid] = typeInfo;
    };
    try {
        for (var pipelineDataSources_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(pipelineDataSources), pipelineDataSources_1_1 = pipelineDataSources_1.next(); !pipelineDataSources_1_1.done; pipelineDataSources_1_1 = pipelineDataSources_1.next()) {
            var pipelineDataSource = pipelineDataSources_1_1.value;
            _loop_1(pipelineDataSource);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (pipelineDataSources_1_1 && !pipelineDataSources_1_1.done && (_a = pipelineDataSources_1.return)) _a.call(pipelineDataSources_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return typeInfos;
}


/***/ }),

/***/ "oexl":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/plumb-editor/plumb-editor.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbHVtYi1lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "pirr":
/*!*************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/visual-query.module.ts ***!
  \*************************************************************************/
/*! exports provided: VisualQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualQueryModule", function() { return VisualQueryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../permissions/services/metadata.service */ "LQlA");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-explorer/add-explorer.component */ "uimg");
/* harmony import */ var _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plumb-editor/plumb-editor.component */ "zFfS");
/* harmony import */ var _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./query-result/query-result.component */ "/wWL");
/* harmony import */ var _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./run-explorer/run-explorer.component */ "6uNs");
/* harmony import */ var _services_query_definition_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/query-definition.service */ "qrHF");
/* harmony import */ var _stream_error_result_stream_error_result_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./stream-error-result/stream-error-result.component */ "yC2S");
/* harmony import */ var _visual_query_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./visual-query-routing.module */ "PBR4");
/* harmony import */ var _visual_query_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./visual-query.component */ "RqJz");






















var VisualQueryModule = /** @class */ (function () {
    function VisualQueryModule() {
    }
    VisualQueryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _visual_query_component__WEBPACK_IMPORTED_MODULE_21__["VisualQueryComponent"],
                _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_17__["RunExplorerComponent"],
                _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_14__["AddExplorerComponent"],
                _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_15__["PlumbEditorComponent"],
                _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_16__["QueryResultComponent"],
                _stream_error_result_stream_error_result_component__WEBPACK_IMPORTED_MODULE_19__["StreamErrorResultComponent"],
            ],
            entryComponents: [
                _visual_query_component__WEBPACK_IMPORTED_MODULE_21__["VisualQueryComponent"],
                _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_17__["RunExplorerComponent"],
                _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_14__["AddExplorerComponent"],
                _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_15__["PlumbEditorComponent"],
                _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_16__["QueryResultComponent"],
                _stream_error_result_stream_error_result_component__WEBPACK_IMPORTED_MODULE_19__["StreamErrorResultComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_13__["SharedComponentsModule"],
                _visual_query_routing_module__WEBPACK_IMPORTED_MODULE_20__["VisualQueryRoutingModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_12__["Context"],
                _services_query_definition_service__WEBPACK_IMPORTED_MODULE_18__["QueryDefinitionService"],
                _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_11__["MetadataService"],
                _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_10__["ContentTypesService"],
            ],
        })
    ], VisualQueryModule);
    return VisualQueryModule;
}());



/***/ }),

/***/ "qrHF":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/services/query-definition.service.ts ***!
  \***************************************************************************************/
/*! exports provided: QueryDefinitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDefinitionService", function() { return QueryDefinitionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-administration/services */ "uw4a");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "qb9A");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");








var QueryDefinitionService = /** @class */ (function () {
    function QueryDefinitionService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    QueryDefinitionService.prototype.fetchPipeline = function (pipelineEntityId, dataSources) {
        var _this = this;
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_app_administration_services__WEBPACK_IMPORTED_MODULE_5__["webApiQueryGet"]), {
            params: { appId: this.context.appId.toString(), id: pipelineEntityId.toString() }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pipelineModel) {
            // if pipeline is new, populate it with default model
            if (!pipelineModel.DataSources.length) {
                _this.buildDefaultModel(pipelineModel, dataSources);
            }
            _this.fixPipelineDataSources(pipelineModel.DataSources);
            return pipelineModel;
        }));
    };
    QueryDefinitionService.prototype.buildDefaultModel = function (pipelineModel, dataSources) {
        var e_1, _a;
        var templateDataSources = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.defaultPipeline.dataSources;
        var _loop_1 = function (templateDS) {
            var dataSource = dataSources.find(function (ds) { return ds.PartAssemblyAndType === templateDS.PartAssemblyAndType; });
            var pipelineDataSource = {
                Description: '',
                EntityGuid: templateDS.EntityGuid,
                EntityId: undefined,
                Name: dataSource.Name,
                PartAssemblyAndType: templateDS.PartAssemblyAndType,
                VisualDesignerData: templateDS.VisualDesignerData,
            };
            pipelineModel.DataSources.push(pipelineDataSource);
        };
        try {
            for (var templateDataSources_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(templateDataSources), templateDataSources_1_1 = templateDataSources_1.next(); !templateDataSources_1_1.done; templateDataSources_1_1 = templateDataSources_1.next()) {
                var templateDS = templateDataSources_1_1.value;
                _loop_1(templateDS);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (templateDataSources_1_1 && !templateDataSources_1_1.done && (_a = templateDataSources_1.return)) _a.call(templateDataSources_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        pipelineModel.Pipeline.StreamWiring = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.defaultPipeline.streamWiring;
    };
    QueryDefinitionService.prototype.fixPipelineDataSources = function (pipelineDataSources) {
        var e_2, _a;
        var _b;
        var outDataSourceExists = pipelineDataSources.some(function (pipelineDS) { return pipelineDS.EntityGuid === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.outDataSource.EntityGuid; });
        if (!outDataSourceExists) {
            var outDs = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.outDataSource;
            var outDsConst = {
                Description: outDs.Description,
                EntityGuid: outDs.EntityGuid,
                EntityId: undefined,
                Name: outDs.Name,
                PartAssemblyAndType: outDs.PartAssemblyAndType,
                VisualDesignerData: outDs.VisualDesignerData,
            };
            pipelineDataSources.push(outDsConst);
        }
        try {
            for (var pipelineDataSources_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(pipelineDataSources), pipelineDataSources_1_1 = pipelineDataSources_1.next(); !pipelineDataSources_1_1.done; pipelineDataSources_1_1 = pipelineDataSources_1.next()) {
                var pipelineDataSource = pipelineDataSources_1_1.value;
                (_b = pipelineDataSource.VisualDesignerData) !== null && _b !== void 0 ? _b : (pipelineDataSource.VisualDesignerData = { Top: 50, Left: 50 });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (pipelineDataSources_1_1 && !pipelineDataSources_1_1.done && (_a = pipelineDataSources_1.return)) _a.call(pipelineDataSources_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    QueryDefinitionService.prototype.fetchDataSources = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_app_administration_services__WEBPACK_IMPORTED_MODULE_5__["webApiQueryDataSources"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dataSources) {
            var outDs = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.outDataSource;
            var outDsConst = {
                ContentType: undefined,
                Difficulty: _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.dataSourceDifficulties.default,
                DynamicIn: true,
                DynamicOut: false,
                EnableConfig: undefined,
                HelpLink: undefined,
                Icon: undefined,
                In: outDs.In,
                Name: outDs.Name,
                Out: undefined,
                PartAssemblyAndType: outDs.PartAssemblyAndType,
                PrimaryType: outDs.PrimaryType,
                UiHint: undefined,
            };
            dataSources.push(outDsConst);
            return dataSources;
        }));
    };
    QueryDefinitionService.prototype.typeNameFilter = function (input, format) {
        var globalParts = input.split(', ');
        switch (format) {
            case 'classFullName':
                var classFullName = globalParts[0];
                return classFullName;
            case 'className':
                var classFullNameParts = globalParts[0].split('.');
                var className = classFullNameParts[classFullNameParts.length - 1];
                return className;
            default:
                return input;
        }
    };
    /** Save the current query and reload entire definition as returned from server */
    QueryDefinitionService.prototype.savePipeline = function (pipelineModel) {
        var _this = this;
        var pipeline = pipelineModel.Pipeline;
        var dataSources = pipelineModel.DataSources;
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(_app_administration_services__WEBPACK_IMPORTED_MODULE_5__["webApiQuerySave"]), { pipeline: pipeline, dataSources: dataSources }, { params: { appId: this.context.appId.toString(), Id: pipeline.EntityId.toString() } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (newPipelineModel) {
            _this.fixPipelineDataSources(newPipelineModel.DataSources);
            return newPipelineModel;
        }));
    };
    /** `top` - fetch first X items */
    QueryDefinitionService.prototype.runPipeline = function (id, top) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_app_administration_services__WEBPACK_IMPORTED_MODULE_5__["webApiQueryRun"]), {
            params: { appId: this.context.appId.toString(), id: id.toString(), top: top.toString() }
        });
    };
    /** `top` - fetch first X items */
    QueryDefinitionService.prototype.debugStream = function (id, source, sourceOut, top) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_app_administration_services__WEBPACK_IMPORTED_MODULE_5__["webApiQueryDebugStream"]), {
            params: { appId: this.context.appId.toString(), id: id.toString(), from: source, out: sourceOut, top: top.toString() }
        });
    };
    QueryDefinitionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    QueryDefinitionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], QueryDefinitionService);
    return QueryDefinitionService;
}());



/***/ }),

/***/ "uimg":
/*!*****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/add-explorer/add-explorer.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExplorerComponent", function() { return AddExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_explorer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-explorer.component.html */ "BvqO");
/* harmony import */ var _add_explorer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-explorer.component.scss */ "Tx43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _edit_shared_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../edit/shared/helpers */ "AmCw");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "qb9A");
/* harmony import */ var _plumb_editor_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../plumb-editor/plumb-editor.helpers */ "oV/i");
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/visual-query.service */ "hWMO");
/* harmony import */ var _add_explorer_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-explorer.helpers */ "FW8/");











var AddExplorerComponent = /** @class */ (function () {
    function AddExplorerComponent(visualQueryService) {
        this.visualQueryService = visualQueryService;
        this.toggledItems = [];
        this.guiTypes = _plumb_editor_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_8__["guiTypes"];
        this.difficulties = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_7__["eavConstants"].pipelineDesigner.dataSourceDifficulties;
        this.difficulty$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.difficulties.default);
    }
    AddExplorerComponent.prototype.ngOnInit = function () {
        this.sorted$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.visualQueryService.dataSources$, this.difficulty$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), dataSources = _b[0], difficulty = _b[1];
            return Object(_add_explorer_helpers__WEBPACK_IMPORTED_MODULE_10__["filterAndSortDataSources"])(dataSources, difficulty);
        }));
    };
    AddExplorerComponent.prototype.ngOnDestroy = function () {
        this.difficulty$.complete();
    };
    AddExplorerComponent.prototype.toggleDifficulty = function (event) {
        var difficulty = event.checked ? this.difficulties.advanced : this.difficulties.default;
        this.difficulty$.next(difficulty);
    };
    AddExplorerComponent.prototype.addDataSource = function (dataSource) {
        this.visualQueryService.addDataSource(dataSource);
    };
    AddExplorerComponent.prototype.toggleItem = function (item) {
        _edit_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["GeneralHelpers"].toggleInArray(item, this.toggledItems);
    };
    AddExplorerComponent.prototype.trackGroups = function (index, type) {
        return type.key;
    };
    AddExplorerComponent.prototype.trackDataSources = function (index, dataSource) {
        return dataSource.PartAssemblyAndType;
    };
    AddExplorerComponent.ctorParameters = function () { return [
        { type: _services_visual_query_service__WEBPACK_IMPORTED_MODULE_9__["VisualQueryService"] }
    ]; };
    AddExplorerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-explorer',
            template: _raw_loader_add_explorer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_add_explorer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_visual_query_service__WEBPACK_IMPORTED_MODULE_9__["VisualQueryService"]])
    ], AddExplorerComponent);
    return AddExplorerComponent;
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

/***/ "yC2S":
/*!*******************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/stream-error-result/stream-error-result.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: StreamErrorResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamErrorResultComponent", function() { return StreamErrorResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stream_error_result_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stream-error-result.component.html */ "M2LD");
/* harmony import */ var _stream_error_result_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stream-error-result.component.scss */ "m+qR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





var StreamErrorResultComponent = /** @class */ (function () {
    function StreamErrorResultComponent(dialogData, dialogRef) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
    }
    StreamErrorResultComponent.prototype.ngOnInit = function () {
        this.errorData = this.dialogData.errorData;
    };
    StreamErrorResultComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    StreamErrorResultComponent.prototype.openInsights = function () {
        window.open(window.$2sxc.http.apiUrl('sys/insights/logs?key=web-api'), '_blank');
    };
    StreamErrorResultComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    StreamErrorResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-stream-error-result',
            template: _raw_loader_stream_error_result_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_stream_error_result_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], StreamErrorResultComponent);
    return StreamErrorResultComponent;
}());



/***/ }),

/***/ "zFfS":
/*!*****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/visual-query/plumb-editor/plumb-editor.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PlumbEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlumbEditorComponent", function() { return PlumbEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plumb_editor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plumb-editor.component.html */ "RllY");
/* harmony import */ var _plumb_editor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plumb-editor.component.scss */ "oexl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "qb9A");
/* harmony import */ var _shared_helpers_load_scripts_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/helpers/load-scripts.helper */ "uQjM");
/* harmony import */ var _services_query_definition_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/query-definition.service */ "qrHF");
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/visual-query.service */ "hWMO");
/* harmony import */ var _plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plumb-editor.helpers */ "oV/i");
/* harmony import */ var _plumber_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plumber.helper */ "h01k");



// tslint:disable-next-line:max-line-length









var jsPlumbUrl = 'https://cdnjs.cloudflare.com/ajax/libs/jsPlumb/2.14.5/js/jsplumb.min.js';
var PlumbEditorComponent = /** @class */ (function () {
    function PlumbEditorComponent(visualQueryService, queryDefinitionService, changeDetectorRef) {
        this.visualQueryService = visualQueryService;
        this.queryDefinitionService = queryDefinitionService;
        this.changeDetectorRef = changeDetectorRef;
        this.dataSrcIdPrefix = _plumber_helper__WEBPACK_IMPORTED_MODULE_11__["dataSrcIdPrefix"];
        this.hardReset = false;
        this.scriptLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    PlumbEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_shared_helpers_load_scripts_helper__WEBPACK_IMPORTED_MODULE_7__["loadScripts"])([{ test: 'jsPlumb', src: jsPlumbUrl }], function () {
            _this.scriptLoaded$.next(true);
        });
        this.subscription.add(this.visualQueryService.putEntityCountOnConnections$.subscribe(function (result) {
            _this.plumber.putEntityCountOnConnections(result);
        }));
        this.templateModel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.visualQueryService.pipelineModel$, this.visualQueryService.dataSources$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), pipelineModel = _b[0], dataSources = _b[1];
            if (pipelineModel == null || dataSources == null) {
                return;
            }
            // workaround for jsPlumb not working with dom elements which it initialized on previously.
            // This wipes dom entirely and gives us new elements
            _this.hardReset = true;
            _this.changeDetectorRef.detectChanges();
            _this.hardReset = false;
            var templateModel = {
                pipelineDataSources: pipelineModel.DataSources,
                typeInfos: Object(_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_10__["calculateTypeInfos"])(pipelineModel.DataSources, dataSources),
                allowEdit: pipelineModel.Pipeline.AllowEdit,
            };
            return templateModel;
        }));
    };
    PlumbEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // https://stackoverflow.com/questions/37087864/execute-a-function-when-ngfor-finished-in-angular-2/37088348#37088348
        var domDataSourcesLoaded$ = this.domDataSourcesRef.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return true; }));
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.scriptLoaded$, domDataSourcesLoaded$]).subscribe(function (_a) {
            var _b;
            var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), scriptLoaded = _c[0], domDataSourcesLoaded = _c[1];
            if (!scriptLoaded || !domDataSourcesLoaded) {
                return;
            }
            (_b = _this.plumber) === null || _b === void 0 ? void 0 : _b.destroy();
            _this.plumber = new _plumber_helper__WEBPACK_IMPORTED_MODULE_11__["Plumber"](_this.domRootRef.nativeElement, _this.visualQueryService.pipelineModel$.value, _this.visualQueryService.dataSources$.value, _this.onConnectionsChanged.bind(_this), _this.onDragend.bind(_this), _this.onDebugStream.bind(_this));
        }));
    };
    PlumbEditorComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.plumber) === null || _a === void 0 ? void 0 : _a.destroy();
        this.scriptLoaded$.complete();
        this.subscription.unsubscribe();
    };
    PlumbEditorComponent.prototype.onConnectionsChanged = function () {
        var connections = this.plumber.getAllConnections();
        var streamsOut = this.plumber.getStreamsOut();
        this.visualQueryService.changeConnections(connections, streamsOut);
    };
    PlumbEditorComponent.prototype.onDragend = function (pipelineDataSourceGuid, position) {
        this.visualQueryService.changeDataSourcePosition(pipelineDataSourceGuid, position);
    };
    PlumbEditorComponent.prototype.onDebugStream = function (stream) {
        this.visualQueryService.debugStream(stream);
    };
    PlumbEditorComponent.prototype.configureDataSource = function (dataSource) {
        // ensure dataSource entity is saved
        if (dataSource.EntityGuid.includes('unsaved')) {
            this.visualQueryService.saveAndRun(true, false);
        }
        else {
            this.visualQueryService.editDataSource(dataSource);
        }
    };
    PlumbEditorComponent.prototype.getTypeName = function (partAssemblyAndType) {
        if (partAssemblyAndType.length === 36 && (partAssemblyAndType.split('-').length - 1) === 4) {
            // partAssemblyAndType is guid
            return partAssemblyAndType.substring(0, 10) + '…';
        }
        return this.queryDefinitionService.typeNameFilter(partAssemblyAndType, 'className');
    };
    PlumbEditorComponent.prototype.isOutDataSource = function (pipelineDataSource) {
        return pipelineDataSource.PartAssemblyAndType === _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.outDataSource.PartAssemblyAndType;
    };
    PlumbEditorComponent.prototype.remove = function (pipelineDataSource) {
        if (!confirm("Delete " + pipelineDataSource.Name + " data source?")) {
            return;
        }
        this.plumber.removeEndpointsOnDataSource(pipelineDataSource.EntityGuid);
        var connections = this.plumber.getAllConnections();
        var streamsOut = this.plumber.getStreamsOut();
        this.visualQueryService.removeDataSource(pipelineDataSource.EntityGuid, connections, streamsOut);
    };
    PlumbEditorComponent.prototype.openHelp = function (url) {
        window.open(url, '_blank');
    };
    PlumbEditorComponent.prototype.editName = function (dataSource) {
        var _a;
        var newName = (_a = prompt('Rename data source', dataSource.Name)) === null || _a === void 0 ? void 0 : _a.trim();
        if (newName == null || newName === '') {
            return;
        }
        this.visualQueryService.renameDataSource(dataSource.EntityGuid, newName);
    };
    PlumbEditorComponent.prototype.editDescription = function (dataSource) {
        var _a;
        var newDescription = (_a = prompt('Edit description', dataSource.Description)) === null || _a === void 0 ? void 0 : _a.trim();
        if (newDescription == null) {
            return;
        }
        this.visualQueryService.changeDataSourceDescription(dataSource.EntityGuid, newDescription);
    };
    PlumbEditorComponent.ctorParameters = function () { return [
        { type: _services_visual_query_service__WEBPACK_IMPORTED_MODULE_9__["VisualQueryService"] },
        { type: _services_query_definition_service__WEBPACK_IMPORTED_MODULE_8__["QueryDefinitionService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    PlumbEditorComponent.propDecorators = {
        domRootRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['domRoot',] }],
        domDataSourcesRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['domDataSource',] }]
    };
    PlumbEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-plumb-editor',
            template: _raw_loader_plumb_editor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [":host { display: block; width: 100%; height: 100%; }", _plumb_editor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_visual_query_service__WEBPACK_IMPORTED_MODULE_9__["VisualQueryService"],
            _services_query_definition_service__WEBPACK_IMPORTED_MODULE_8__["QueryDefinitionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], PlumbEditorComponent);
    return PlumbEditorComponent;
}());



/***/ })

}]);
//# sourceMappingURL=visual-query-visual-query-module.js.map