(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visual-query-visual-query-module"],{

/***/ "+/OZ":
/*!*********************************************************************!*\
  !*** ./src/app/visual-query/query-result/query-result.component.ts ***!
  \*********************************************************************/
/*! exports provided: QueryResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryResultComponent", function() { return QueryResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_query_result_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./query-result.component.html */ "2Dwe");
/* harmony import */ var _query_result_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query-result.component.scss */ "iAG9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");





var QueryResultComponent = /** @class */ (function () {
    function QueryResultComponent(dialogData, dialogRef) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
    }
    QueryResultComponent.prototype.ngOnInit = function () {
        this.testParameters = this.dialogData.testParameters;
        this.timeUsed = this.dialogData.result.QueryTimer.Milliseconds;
        this.ticksUsed = this.dialogData.result.QueryTimer.Ticks;
        this.result = this.dialogData.result.Query;
        this.sources = this.dialogData.result.Sources;
        this.streams = this.dialogData.result.Streams;
    };
    QueryResultComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    QueryResultComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    QueryResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-query-result',
            template: _raw_loader_query_result_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_query_result_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], QueryResultComponent);
    return QueryResultComponent;
}());



/***/ }),

/***/ "2Dwe":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/visual-query/query-result/query-result.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">\r\n    <div>Query Results</div>\r\n    <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n<p class=\"dialog-description\">\r\n  The Full result was logged to the Browser Console. Further down you'll find more debug-infos.\r\n</p>\r\n\r\n<br />\r\n\r\n<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">Parameters & Statistics</div>\r\n</div>\r\n<p class=\"description\">\r\n  Executed in {{ timeUsed }}ms ({{ ticksUsed }} ticks)\r\n</p>\r\n<ul class=\"description\">\r\n  <li *ngFor=\"let param of testParameters?.split('\\n')\">{{ param }}</li>\r\n</ul>\r\n\r\n<br />\r\n\r\n<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">Query Results</div>\r\n</div>\r\n<pre>\r\n  {{ result | json }}\r\n</pre>\r\n\r\n<br />\r\n\r\n<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">Sources</div>\r\n</div>\r\n<table class=\"description\">\r\n  <tr>\r\n    <th>Guid</th>\r\n    <th>Type</th>\r\n    <th>Configuration</th>\r\n    <th>Error</th>\r\n  </tr>\r\n  <tr *ngFor=\"let source of sources | keyvalue\">\r\n    <td>\r\n      <pre>{{ source.value.Guid }}</pre>\r\n    </td>\r\n    <td>{{ source.value.Type }}</td>\r\n    <td>\r\n      <ol>\r\n        <li *ngFor=\"let config of source.value.Configuration | keyvalue\">\r\n          <b>{{ config.key }}</b>=<em>{{ config.value }}</em></li>\r\n      </ol>\r\n    </td>\r\n    <td>{{ source.value.Error }}</td>\r\n  </tr>\r\n</table>\r\n\r\n<br />\r\n\r\n<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">Streams</div>\r\n</div>\r\n<table class=\"description\">\r\n  <tr>\r\n    <th>Source</th>\r\n    <th>Target</th>\r\n    <th>Items</th>\r\n    <th>Error</th>\r\n  </tr>\r\n  <tr *ngFor=\"let stream of streams\">\r\n    <td>\r\n      <pre>{{ stream.Source + \":\" + stream.SourceOut }}</pre>\r\n    </td>\r\n    <td>\r\n      <pre>{{ stream.Target + \":\" + stream.TargetIn }}</pre>\r\n    </td>\r\n    <td>{{ stream.Count }}</td>\r\n    <td>{{ stream.Error }}</td>\r\n  </tr>\r\n</table>\r\n");

/***/ }),

/***/ "8Upm":
/*!*******************************************************************!*\
  !*** ./src/app/visual-query/services/query-definition.service.ts ***!
  \*******************************************************************/
/*! exports provided: QueryDefinitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDefinitionService", function() { return QueryDefinitionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "B5/E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _app_administration_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-administration/services */ "eVkS");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");








var QueryDefinitionService = /** @class */ (function () {
    function QueryDefinitionService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    QueryDefinitionService.prototype.fetchPipeline = function (pipelineEntityId) {
        var _this = this;
        var pipelineModel$ = this.http.get(this.dnnContext.$2sxc.http.apiUrl(_app_administration_services__WEBPACK_IMPORTED_MODULE_5__["webApiQueryGet"]), {
            params: { appId: this.context.appId.toString(), id: pipelineEntityId.toString() }
        });
        return pipelineModel$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pipelineModel) {
            // if pipeline is new, populate it with default model
            if (!pipelineModel.DataSources.length) {
                _this.buildDefaultModel(pipelineModel);
            }
            _this.fixPipelineDataSources(pipelineModel.DataSources);
            return pipelineModel;
        }));
    };
    QueryDefinitionService.prototype.buildDefaultModel = function (pipelineModel) {
        var e_1, _a;
        var templateDataSources = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.defaultPipeline.dataSources;
        try {
            for (var templateDataSources_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(templateDataSources), templateDataSources_1_1 = templateDataSources_1.next(); !templateDataSources_1_1.done; templateDataSources_1_1 = templateDataSources_1.next()) {
                var templateDS = templateDataSources_1_1.value;
                if (templateDS.visualDesignerData == null) {
                    templateDS.visualDesignerData = { Top: 100, Left: 100 };
                }
                var pipelineDataSource = {
                    Description: '',
                    EntityGuid: templateDS.entityGuid || 'unsaved' + (pipelineModel.DataSources.length + 1),
                    EntityId: undefined,
                    Name: this.typeNameFilter(templateDS.partAssemblyAndType, 'className'),
                    PartAssemblyAndType: templateDS.partAssemblyAndType,
                    VisualDesignerData: templateDS.visualDesignerData,
                };
                pipelineModel.DataSources.push(pipelineDataSource);
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
        var outDataSourceExists = pipelineDataSources.some(function (pipelineDS) { return pipelineDS.EntityGuid === 'Out'; });
        if (!outDataSourceExists) {
            var outDs = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.outDataSource;
            var outDsConst = {
                Description: outDs.description,
                EntityGuid: 'Out',
                EntityId: undefined,
                Name: outDs.name,
                PartAssemblyAndType: outDs.className,
                VisualDesignerData: outDs.visualDesignerData,
            };
            pipelineDataSources.push(outDsConst);
        }
        try {
            for (var pipelineDataSources_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(pipelineDataSources), pipelineDataSources_1_1 = pipelineDataSources_1.next(); !pipelineDataSources_1_1.done; pipelineDataSources_1_1 = pipelineDataSources_1.next()) {
                var pipelineDataSource = pipelineDataSources_1_1.value;
                pipelineDataSource.VisualDesignerData = pipelineDataSource.VisualDesignerData || { Top: 50, Left: 50 };
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
        var dataSources$ = this.http.get(this.dnnContext.$2sxc.http.apiUrl(_app_administration_services__WEBPACK_IMPORTED_MODULE_5__["webApiQueryDataSources"]));
        return dataSources$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dataSources) {
            var outDs = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_6__["eavConstants"].pipelineDesigner.outDataSource;
            var outDsConst = {
                ContentType: undefined,
                Difficulty: 100,
                DynamicOut: false,
                EnableConfig: undefined,
                HelpLink: undefined,
                Icon: undefined,
                In: outDs.in,
                Name: outDs.name || outDs.className,
                Out: undefined,
                PartAssemblyAndType: outDs.className,
                PrimaryType: 'Target',
                UiHint: undefined,
                allowNew: false,
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
        }
        return input;
    };
    /** Save the current query and reload entire definition as returned from server */
    QueryDefinitionService.prototype.savePipeline = function (pipelineModel) {
        var _this = this;
        var pipeline = pipelineModel.Pipeline;
        var dataSources = pipelineModel.DataSources;
        var pipelineModel$ = this.http.post(this.dnnContext.$2sxc.http.apiUrl(_app_administration_services__WEBPACK_IMPORTED_MODULE_5__["webApiQuerySave"]), { pipeline: pipeline, dataSources: dataSources }, { params: { appId: this.context.appId.toString(), Id: pipeline.EntityId.toString() } });
        return pipelineModel$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pipeModel) {
            _this.fixPipelineDataSources(pipeModel.DataSources);
            return pipeModel;
        }));
    };
    QueryDefinitionService.prototype.runPipeline = function (id) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(_app_administration_services__WEBPACK_IMPORTED_MODULE_5__["webApiQueryRun"]), {
            params: { appId: this.context.appId.toString(), id: id.toString() }
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

/***/ "8gUn":
/*!*******************************************************************!*\
  !*** ./src/app/visual-query/plumb-editor/plumb-editor.helpers.ts ***!
  \*******************************************************************/
/*! exports provided: guiTypes, calculateTypeInfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiTypes", function() { return guiTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTypeInfos", function() { return calculateTypeInfos; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var guiTypes = {
    Cache: { name: 'Cache', icon: 'history', notes: 'Caching of data' },
    Filter: { name: 'Filter', icon: 'filter_list', notes: 'Filter data - usually returning less items than came in' },
    Logic: { name: 'Logic', icon: 'share', notes: 'Logic operations - usually choosing between different streams' },
    Lookup: { name: 'Lookup', icon: 'search', notes: 'Lookup operation - usually looking for other data based on a criteria' },
    Modify: { name: 'Modify', icon: 'star_half', notes: 'Modify data - usually changing, adding or removing values' },
    Security: { name: 'Security', icon: 'account_circle', notes: 'Security - usually limit what the user sees based on his identity' },
    Sort: { name: 'Sort', icon: 'sort', notes: 'Sort the items' },
    Source: { name: 'Source', icon: 'cloud_upload', notes: 'Source of new data - usually SQL, CSV or similar' },
    Target: { name: 'Target', icon: 'adjust', notes: 'Target - usually just a destination of data' },
    Unknown: { name: 'Unknown', icon: 'fiber_manual_record', notes: 'Unknown type' },
};
function calculateTypeInfos(pipelineDataSources, dataSources) {
    var e_1, _a;
    var typeInfos = {};
    var _loop_1 = function (pipelineDataSource) {
        var typeInfo = void 0;
        var dataSource = dataSources.find(function (ds) { return ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType; });
        if (dataSource) {
            typeInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (dataSource.PrimaryType ? guiTypes[dataSource.PrimaryType] : guiTypes.Unknown));
            if (dataSource.Icon) {
                typeInfo.icon = dataSource.Icon;
            }
            if (dataSource.DynamicOut) {
                typeInfo.dynamicOut = true;
            }
            if (dataSource.HelpLink) {
                typeInfo.helpLink = dataSource.HelpLink;
            }
            if (dataSource.EnableConfig) {
                typeInfo.config = dataSource.EnableConfig;
            }
        }
        if (!typeInfo) {
            typeInfo = guiTypes.Unknown;
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

/***/ "CiNP":
/*!*******************************************************************!*\
  !*** ./src/app/visual-query/run-explorer/run-explorer.helpers.ts ***!
  \*******************************************************************/
/*! exports provided: calculateWarnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateWarnings", function() { return calculateWarnings; });
/**
 * Check if there are special warnings the developer should know.
 * Typically when the test-module-id is different from the one we're currently
 * working on, or if no test-module-id is provided
 */
function calculateWarnings(pipelineModel, context) {
    var warnings = [];
    try { // catch various not-initialized errors
        var regex = /^\[module:moduleid\]=([0-9]*)$/gmi; // capture the mod-id
        var testParams = pipelineModel.Pipeline.TestParameters;
        var matches = regex.exec(testParams);
        var testMid = matches[1];
        var urlMid = context.moduleId.toString();
        if (testMid !== urlMid) {
            warnings.push("Your test moduleid (" + testMid + ") is different from the current moduleid (" + urlMid + "). Note that 2sxc 9.33 automatically provides the moduleid - so you usually do not need to set it any more.");
        }
    }
    catch (error) { }
    return warnings;
}


/***/ }),

/***/ "Kvzz":
/*!*******************************************************************!*\
  !*** ./src/app/visual-query/add-explorer/add-explorer.helpers.ts ***!
  \*******************************************************************/
/*! exports provided: filterAndSortDataSources, toggleInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAndSortDataSources", function() { return filterAndSortDataSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleInArray", function() { return toggleInArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/cloneDeep */ "9RHM");


function filterAndSortDataSources(dataSources, maxDifficulty) {
    var e_1, _a;
    var cloned = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_1__["default"])(dataSources);
    var filtered = cloned.filter(function (dataSource) {
        return (dataSource.Difficulty <= maxDifficulty) && (dataSource.allowNew == null);
    });
    filtered.sort(function (a, b) { return a.Name.toLocaleLowerCase().localeCompare(b.Name.toLocaleLowerCase()); });
    var sorted = {};
    try {
        for (var filtered_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(filtered), filtered_1_1 = filtered_1.next(); !filtered_1_1.done; filtered_1_1 = filtered_1.next()) {
            var dataSource = filtered_1_1.value;
            var type = dataSource.PrimaryType;
            sorted[type] ? sorted[type].push(dataSource) : sorted[type] = [dataSource];
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
function toggleInArray(item, array) {
    var index = array.indexOf(item);
    if (index === -1) {
        array.push(item);
    }
    else {
        array.splice(index, 1);
    }
}


/***/ }),

/***/ "Lpz0":
/*!********************************************************!*\
  !*** ./src/app/visual-query/visual-query.component.ts ***!
  \********************************************************/
/*! exports provided: VisualQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualQueryComponent", function() { return VisualQueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_visual_query_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visual-query.component.html */ "sua8");
/* harmony import */ var _visual_query_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual-query.component.scss */ "e35/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plumb-editor/plumb-editor.component */ "t8rd");
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/visual-query.service */ "Thzz");








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
        window.open('https://2sxc.org/help', '_blank');
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

/***/ "NZOo":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/visual-query/plumb-editor/plumb-editor.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #domRoot id=\"pipeline-root\" *ngIf=\"(templateModel$ | async) as templateModel\">\r\n  <!-- do not use trackBy, jsPlumb drag stops working properly after delete -->\r\n  <ng-container *ngIf=\"!hardReset\">\r\n    <div #domDataSource *ngFor=\"let dataSource of templateModel.pipelineDataSources\"\r\n      [id]=\"dataSrcIdPrefix + dataSource.EntityGuid\" class=\"dataSource\" [ngStyle]=\"{\r\n        'top': dataSource.VisualDesignerData.Top + 'px',\r\n        'left': dataSource.VisualDesignerData.Left + 'px',\r\n        'min-width': dataSource.VisualDesignerData.Width ? dataSource.VisualDesignerData.Width + 'px' : null\r\n      }\">\r\n\r\n      <div class=\"configure\" title=\"Configure data source\" appMousedownStopPropagation\r\n        *ngIf=\"templateModel.allowEdit && templateModel.typeInfos[dataSource.EntityGuid].config\"\r\n        (click)=\"configureDataSource(dataSource)\">\r\n        <mat-icon class=\"eav-icon-settings\">settings</mat-icon>\r\n      </div>\r\n\r\n      <mat-icon class=\"type-info\" [title]=\"templateModel.typeInfos[dataSource.EntityGuid].notes\">\r\n        {{ templateModel.typeInfos[dataSource.EntityGuid].icon }}\r\n      </mat-icon>\r\n\r\n      <div class=\"name noselect\" title=\"Click to edit name\" appMousedownStopPropagation\r\n        (click)=\"templateModel.allowEdit && editName(dataSource)\">\r\n        <span>{{ dataSource.Name || '(no name)' }}</span>\r\n        <mat-icon class=\"show-hover-inline eav-icon-pencil\">edit</mat-icon>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"description noselect\" title=\"Click to edit description\" appMousedownStopPropagation\r\n        (click)=\"templateModel.allowEdit && editDescription(dataSource)\">\r\n        <span>{{ dataSource.Description }}</span>\r\n        <mat-icon class=\"show-hover-inline eav-icon-pencil\">edit</mat-icon>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"typename\" [title]=\"dataSource.PartAssemblyAndType\">\r\n        Type: {{ typeNameFilter(dataSource.PartAssemblyAndType, 'className') }}\r\n      </div>\r\n\r\n      <div class=\"add-endpoint\" title=\"Drag a new Out-Connection\"\r\n        *ngIf=\"templateModel.allowEdit && templateModel.typeInfos[dataSource.EntityGuid].dynamicOut\">\r\n        <mat-icon class=\"new-connection eav-icon-up-dir\">arrow_drop_up</mat-icon>\r\n      </div>\r\n\r\n      <mat-icon class=\"delete eav-icon-cancel\" title=\"Delete\" appMousedownStopPropagation\r\n        *ngIf=\"templateModel.allowEdit\" (click)=\"remove(dataSource)\">\r\n        delete\r\n      </mat-icon>\r\n\r\n      <a class=\"help eav-icon-help-circled\" title=\"Help for this data source\"\r\n        [href]=\"templateModel.typeInfos[dataSource.EntityGuid].helpLink\" target=\"_blank\" appMousedownStopPropagation\r\n        *ngIf=\"templateModel.typeInfos[dataSource.EntityGuid].helpLink\">\r\n        <mat-icon>help_outline</mat-icon>\r\n      </a>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "Q7yC":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/visual-query/run-explorer/run-explorer.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editor-active-explorer fancy-scrollbar-dark\" *ngIf=\"(pipelineModel$ | async) as pipelineModel\">\r\n\r\n  <div class=\"wrapper\">\r\n    <div class=\"actions\">\r\n      <button mat-raised-button class=\"action\" color=\"accent\" (click)=\"saveAndRunQuery(true, true)\">\r\n        Save and run\r\n      </button>\r\n      <button mat-raised-button class=\"action\" (click)=\"saveAndRunQuery(false, true)\">\r\n        Run\r\n      </button>\r\n      <button mat-raised-button class=\"action\" (click)=\"saveAndRunQuery(true, false)\">\r\n        Save\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"parameters\">\r\n      <div class=\"title\">\r\n        <div>Parameters</div>\r\n        <div>\r\n          <button mat-icon-button matTooltip=\"Edit parameters\" (click)=\"editPipeline()\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Query Params Docs\" (click)=\"openParamsHelp()\">\r\n            <mat-icon>info</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <ul class=\"values\" *ngIf=\"pipelineModel.Pipeline.Params?.length\">\r\n        <li *ngFor=\"let param of pipelineModel.Pipeline.Params?.split('\\n')\">\r\n          {{ param }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"parameters\">\r\n      <div class=\"title\">Test Parameters</div>\r\n      <ul class=\"values\" *ngIf=\"pipelineModel.Pipeline.TestParameters?.length\">\r\n        <li *ngFor=\"let param of pipelineModel.Pipeline.TestParameters?.split('\\n')\">\r\n          {{ param }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"(warnings$ | async) as warnings\">\r\n      <div class=\"warnings\" *ngIf=\"warnings.length\">\r\n        <div class=\"title\">\r\n          <span>Warnings</span>\r\n          <mat-icon style=\"color: red\">warning</mat-icon>\r\n        </div>\r\n        <ol class=\"values\">\r\n          <li *ngFor=\"let warning of warnings\">\r\n            {{ warning }}\r\n          </li>\r\n        </ol>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <div class=\"description\" *ngIf=\"pipelineModel.Pipeline.Description\">\r\n      <div class=\"title\">Query Description</div>\r\n      <div>{{ pipelineModel.Pipeline.Description }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "RCwj":
/*!***********************************************************************!*\
  !*** ./src/app/visual-query/run-explorer/run-explorer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  padding: 24px;\n}\n\n.actions {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n\n.actions .action:not(:last-of-type) {\n  margin-bottom: 8px;\n}\n\n.parameters,\n.warnings,\n.description {\n  margin: 16px 0;\n}\n\n.parameters .title,\n.warnings .title,\n.description .title {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n}\n\n.parameters .title .mat-icon,\n.warnings .title .mat-icon,\n.description .title .mat-icon {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.parameters .values,\n.warnings .values {\n  margin: 0;\n  padding-left: 16px;\n}\n\n.parameters .values li,\n.warnings .values li {\n  padding: 1px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC92aXN1YWwtcXVlcnkvcnVuLWV4cGxvcmVyL3J1bi1leHBsb3Jlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxrQkFBQTtBQUNKOztBQUdBOzs7RUFHRSxjQUFBO0FBQUY7O0FBRUU7OztFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBSTs7O0VBQ0UseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBSU47O0FBR0U7O0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7O0VBQ0UsY0FBQTtBQUVOIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC92aXN1YWwtcXVlcnkvcnVuLWV4cGxvcmVyL3J1bi1leHBsb3Jlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG5cclxuICAuYWN0aW9uOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFyYW1ldGVycyxcclxuLndhcm5pbmdzLFxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFyYW1ldGVycyxcclxuLndhcm5pbmdzIHtcclxuICAudmFsdWVzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDFweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Ruon":
/*!*********************************************************************!*\
  !*** ./src/app/visual-query/add-explorer/add-explorer.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExplorerComponent", function() { return AddExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_add_explorer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-explorer.component.html */ "Z5uU");
/* harmony import */ var _add_explorer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-explorer.component.scss */ "mmz0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/visual-query.service */ "Thzz");
/* harmony import */ var _add_explorer_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-explorer.helpers */ "Kvzz");








var AddExplorerComponent = /** @class */ (function () {
    function AddExplorerComponent(visualQueryService) {
        this.visualQueryService = visualQueryService;
        this.toggledItems = [];
        this.difficulties = {
            default: 100,
            advanced: 200,
        };
        this.difficulty$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.difficulties.default);
    }
    AddExplorerComponent.prototype.ngOnInit = function () {
        this.sorted$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.visualQueryService.dataSources$, this.difficulty$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), dataSources = _b[0], difficulty = _b[1];
            if (dataSources == null) {
                return;
            }
            var sorted = Object(_add_explorer_helpers__WEBPACK_IMPORTED_MODULE_7__["filterAndSortDataSources"])(dataSources, difficulty);
            return sorted;
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
        Object(_add_explorer_helpers__WEBPACK_IMPORTED_MODULE_7__["toggleInArray"])(item, this.toggledItems);
    };
    AddExplorerComponent.ctorParameters = function () { return [
        { type: _services_visual_query_service__WEBPACK_IMPORTED_MODULE_6__["VisualQueryService"] }
    ]; };
    AddExplorerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-explorer',
            template: _raw_loader_add_explorer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_add_explorer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_visual_query_service__WEBPACK_IMPORTED_MODULE_6__["VisualQueryService"]])
    ], AddExplorerComponent);
    return AddExplorerComponent;
}());



/***/ }),

/***/ "Thzz":
/*!***************************************************************!*\
  !*** ./src/app/visual-query/services/visual-query.service.ts ***!
  \***************************************************************/
/*! exports provided: VisualQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualQueryService", function() { return VisualQueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/cloneDeep */ "9RHM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../permissions/services/metadata.service */ "ykZ8");
/* harmony import */ var _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/constants/eav.constants */ "o9tz");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/helpers/url-prep.helper */ "uuTa");
/* harmony import */ var _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../query-result/query-result.component */ "+/OZ");
/* harmony import */ var _query_definition_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./query-definition.service */ "8Upm");















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
        this.fetchPipeline();
        this.fetchDataSources();
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
            Name: this.queryDefinitionService.typeNameFilter(dataSource.PartAssemblyAndType, 'className'),
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
        var contentTypeName = (dataSource === null || dataSource === void 0 ? void 0 : dataSource.ContentType) ? dataSource.ContentType
            : '|Config ' + this.queryDefinitionService.typeNameFilter(pipelineDataSource.PartAssemblyAndType, 'classFullName');
        var typeId = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_11__["eavConstants"].metadata.entity.type;
        var keyType = _shared_constants_eav_constants__WEBPACK_IMPORTED_MODULE_11__["eavConstants"].keyTypes.guid;
        var key = pipelineDataSource.EntityGuid;
        // Query for existing Entity
        this.metadataService.getMetadata(typeId, keyType, key, contentTypeName).subscribe(function (metadata) {
            // Edit existing Entity
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
    VisualQueryService.prototype.runPipeline = function () {
        var _this = this;
        this.snackBar.open('Running query...');
        this.queryDefinitionService.runPipeline(this.pipelineModel$.value.Pipeline.EntityId).subscribe({
            next: function (pipelineResult) {
                _this.snackBar.open('Query worked', null, { duration: 2000 });
                // open modal with the results
                var dialogData = {
                    testParameters: _this.pipelineModel$.value.Pipeline.TestParameters,
                    result: pipelineResult,
                };
                _this.dialog.open(_query_result_query_result_component__WEBPACK_IMPORTED_MODULE_13__["QueryResultComponent"], {
                    data: dialogData,
                    backdropClass: 'dialog-backdrop',
                    panelClass: ['dialog-panel', "dialog-panel-medium", 'no-scrollbar'],
                    viewContainerRef: _this.viewContainerRef,
                    autoFocus: false,
                    closeOnNavigation: false,
                    // spm NOTE: used to force align-items: flex-start; on cdk-global-overlay-wrapper.
                    // Real top margin is overwritten in css e.g. dialog-panel-large
                    position: { top: '0' },
                });
                _this.changeDetectorRef.markForCheck();
                console.warn(pipelineResult);
                setTimeout(function () { _this.putEntityCountOnConnections$.next(pipelineResult); });
            },
            error: function (error) {
                _this.snackBar.open('Query failed', null, { duration: 2000 });
            }
        });
    };
    VisualQueryService.prototype.fetchPipeline = function (reloadingSnackBar) {
        var _this = this;
        if (reloadingSnackBar === void 0) { reloadingSnackBar = false; }
        if (reloadingSnackBar) {
            this.snackBar.open('Reloading query, please wait...');
        }
        this.queryDefinitionService.fetchPipeline(this.pipelineId).subscribe(function (pipelineModel) {
            if (reloadingSnackBar) {
                _this.snackBar.open('Query reloaded', null, { duration: 2000 });
            }
            _this.pipelineModel$.next(pipelineModel);
            _this.titleService.setTitle(pipelineModel.Pipeline.Name + " - Visual Query");
        });
    };
    VisualQueryService.prototype.fetchDataSources = function () {
        var _this = this;
        this.queryDefinitionService.fetchDataSources().subscribe(function (dataSources) {
            _this.dataSources$.next(dataSources);
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
        { type: _query_definition_service__WEBPACK_IMPORTED_MODULE_14__["QueryDefinitionService"] },
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
            _query_definition_service__WEBPACK_IMPORTED_MODULE_14__["QueryDefinitionService"],
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

/***/ "TpGC":
/*!*****************************************************!*\
  !*** ./src/app/visual-query/visual-query.module.ts ***!
  \*****************************************************/
/*! exports provided: VisualQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualQueryModule", function() { return VisualQueryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "k8N0");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-administration/services/content-types.service */ "S36y");
/* harmony import */ var _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../permissions/services/metadata.service */ "ykZ8");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-explorer/add-explorer.component */ "Ruon");
/* harmony import */ var _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plumb-editor/plumb-editor.component */ "t8rd");
/* harmony import */ var _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./query-result/query-result.component */ "+/OZ");
/* harmony import */ var _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./run-explorer/run-explorer.component */ "bC2D");
/* harmony import */ var _services_query_definition_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/query-definition.service */ "8Upm");
/* harmony import */ var _visual_query_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./visual-query-routing.module */ "ryMv");
/* harmony import */ var _visual_query_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./visual-query.component */ "Lpz0");




















var VisualQueryModule = /** @class */ (function () {
    function VisualQueryModule() {
    }
    VisualQueryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _visual_query_component__WEBPACK_IMPORTED_MODULE_19__["VisualQueryComponent"],
                _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_16__["RunExplorerComponent"],
                _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_13__["AddExplorerComponent"],
                _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_14__["PlumbEditorComponent"],
                _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_15__["QueryResultComponent"],
            ],
            entryComponents: [
                _visual_query_component__WEBPACK_IMPORTED_MODULE_19__["VisualQueryComponent"],
                _run_explorer_run_explorer_component__WEBPACK_IMPORTED_MODULE_16__["RunExplorerComponent"],
                _add_explorer_add_explorer_component__WEBPACK_IMPORTED_MODULE_13__["AddExplorerComponent"],
                _plumb_editor_plumb_editor_component__WEBPACK_IMPORTED_MODULE_14__["PlumbEditorComponent"],
                _query_result_query_result_component__WEBPACK_IMPORTED_MODULE_15__["QueryResultComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_12__["SharedComponentsModule"],
                _visual_query_routing_module__WEBPACK_IMPORTED_MODULE_18__["VisualQueryRoutingModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_11__["Context"],
                _services_query_definition_service__WEBPACK_IMPORTED_MODULE_17__["QueryDefinitionService"],
                _permissions_services_metadata_service__WEBPACK_IMPORTED_MODULE_10__["MetadataService"],
                _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_9__["ContentTypesService"],
            ]
        })
    ], VisualQueryModule);
    return VisualQueryModule;
}());



/***/ }),

/***/ "WjTN":
/*!*************************************************************!*\
  !*** ./src/app/visual-query/plumb-editor/plumber.helper.ts ***!
  \*************************************************************/
/*! exports provided: dataSrcIdPrefix, Plumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSrcIdPrefix", function() { return dataSrcIdPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plumber", function() { return Plumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var dataSrcIdPrefix = 'dataSource_';
var Plumber = /** @class */ (function () {
    function Plumber(jsPlumbRoot, pipelineModel, dataSources, onConnectionsChanged, onDragend, 
    /** Workaround for multiple dblClick listeners */
    plumbInits) {
        var _this = this;
        this.jsPlumbRoot = jsPlumbRoot;
        this.pipelineModel = pipelineModel;
        this.dataSources = dataSources;
        this.onConnectionsChanged = onConnectionsChanged;
        this.onDragend = onDragend;
        this.plumbInits = plumbInits;
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
        this.instance = jsPlumb.getInstance(this.getInstanceDefaults(this.jsPlumbRoot));
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
            var _a;
            var sourceElementId = dataSrcIdPrefix + stream.Source;
            var outTargets = ['00000000-0000-0000-0000-000000000000', _this.pipelineModel.Pipeline.EntityGuid];
            var targetElementId = outTargets.includes(stream.Target) ? dataSrcIdPrefix + 'Out' : dataSrcIdPrefix + stream.Target;
            var fromUuid = sourceElementId + '_out_' + stream.SourceOut;
            var toUuid = targetElementId + '_in_' + stream.TargetIn;
            var sEndp = _this.instance.getEndpoint(fromUuid);
            (_a = sEndp === null || sEndp === void 0 ? void 0 : sEndp.connections) === null || _a === void 0 ? void 0 : _a.forEach(function (connection) {
                if (connection.endpoints[1].getUuid() !== toUuid) {
                    return;
                }
                connection.setLabel({ label: stream.Count.toString(), cssClass: 'streamEntitiesCount' });
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
            // Add Out-Endpoints from Definition
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
                this_1.instance.makeSource(domDataSource, this_1.buildSourceEndpoint(), { filter: '.add-endpoint .new-connection' });
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
                var guid_1 = domDataSource.id.replace(dataSrcIdPrefix, '');
                var pipelineDataSource = _this.pipelineModel.DataSources.find(function (pipeDataSource) { return pipeDataSource.EntityGuid === guid_1; });
                _this.addEndpoint(domDataSource, wire.Out, false, pipelineDataSource);
            }
            // Ensure Out-Endpoint exist
            if (!_this.instance.getEndpoint(toUuid)) {
                var domDataSource = _this.jsPlumbRoot.querySelector('#' + targetElementId);
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
    Plumber.prototype.addEndpoint = function (domDataSource, name, isIn, pipelineDataSource) {
        var uuid = domDataSource.id + (isIn ? '_in_' : '_out_') + name;
        var model = isIn ? this.buildTargetEndpoint() : this.buildSourceEndpoint();
        // Endpoints on Out-DataSource must be always enabled
        var params = { uuid: uuid, enabled: this.pipelineModel.Pipeline.AllowEdit || pipelineDataSource.EntityGuid === 'Out' };
        var endPoint = this.instance.addEndpoint(domDataSource, model, params);
        endPoint.getOverlay('endpointLabel').setLabel(name);
    };
    Plumber.prototype.buildSourceEndpoint = function () {
        var sourceEndpoint = {
            paintStyle: { fill: 'transparent', radius: 10 },
            cssClass: 'sourceEndpoint',
            maxConnections: -1,
            isSource: true,
            anchor: ['Continuous', { faces: ['top'] }],
            overlays: this.getEndpointOverlays(true)
        };
        return sourceEndpoint;
    };
    Plumber.prototype.buildTargetEndpoint = function () {
        var targetEndpoint = {
            paintStyle: { fill: 'transparent', radius: 10 },
            cssClass: 'targetEndpoint',
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
                    // location: [0.5, isSource ? -0.5 : 1.5],
                    location: [0.5, isSource ? 0 : 1],
                    label: 'Default',
                    cssClass: 'noselect ' + (isSource ? 'endpointSourceLabel' : 'endpointTargetLabel'),
                    events: {
                        dblclick: function (labelOverlay) {
                            if (!_this.pipelineModel.Pipeline.AllowEdit) {
                                return;
                            }
                            // spm NOTE: workaround for multiple dblclick listeners
                            if (labelOverlay.dblClickCounter == null || labelOverlay.dblClickCounter >= _this.plumbInits) {
                                labelOverlay.dblClickCounter = 1;
                            }
                            else {
                                labelOverlay.dblClickCounter++;
                            }
                            if (labelOverlay.dblClickCounter > 1) {
                                return;
                            }
                            var newLabel = prompt('Rename stream', labelOverlay.label);
                            if (!newLabel) {
                                return;
                            }
                            labelOverlay.setLabel(newLabel);
                            setTimeout(function () { _this.onConnectionsChanged(); });
                        }
                    }
                }
            ]
        ];
    };
    Plumber.prototype.bindEvents = function () {
        var _this = this;
        // If connection on Out-DataSource was removed, remove custom Endpoint
        this.instance.bind('connectionDetached', function (info) {
            // spm TODO: custom endpoints were removed only on Out DataSource. Bug?
            // if (info.targetId !== dataSrcIdPrefix + 'Out') { return; }
            if (_this.bulkDelete) {
                return;
            }
            var domDataSource = info.target;
            var pipelineDataSource = _this.pipelineModel.DataSources.find(function (pipelineDS) { return pipelineDS.EntityGuid === domDataSource.id.replace(dataSrcIdPrefix, ''); });
            var dataSource = _this.dataSources.find(function (ds) { return ds.PartAssemblyAndType === pipelineDataSource.PartAssemblyAndType; });
            var fixedEndpoints = dataSource.In;
            var label = info.targetEndpoint.getOverlay('endpointLabel').label;
            if (fixedEndpoints.includes(label)) {
                setTimeout(function () { _this.onConnectionsChanged(); });
                return;
            }
            _this.instance.deleteEndpoint(info.targetEndpoint);
            setTimeout(function () { _this.onConnectionsChanged(); });
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
    return Plumber;
}());



/***/ }),

/***/ "Z5uU":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/visual-query/add-explorer/add-explorer.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editor-active-explorer fancy-scrollbar-dark\" *ngIf=\"(sorted$ | async) as sorted\">\r\n\r\n  <mat-slide-toggle labelPosition=\"before\" (change)=\"toggleDifficulty($event)\">\r\n    Show Advanced\r\n  </mat-slide-toggle>\r\n\r\n  <ng-container *ngFor=\"let item of sorted | keyvalue\">\r\n    <div class=\"collapsible\" [matTooltip]=\"item.key\" matTooltipShowDelay=\"750\" (click)=\"toggleItem(item.key)\">\r\n      <mat-icon>{{ toggledItems.includes(item.key) ? 'keyboard_arrow_down' : 'keyboard_arrow_right' }}</mat-icon>\r\n      <span>{{ item.key }}</span>\r\n    </div>\r\n\r\n    <div class=\"list\" *ngIf=\"toggledItems.includes(item.key)\">\r\n      <div class=\"list-item\" *ngFor=\"let value of item.value\" [matTooltip]=\"value.Name\" matTooltipShowDelay=\"750\"\r\n        (click)=\"addDataSource(value)\">\r\n        {{ value.Name }}\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "bC2D":
/*!*********************************************************************!*\
  !*** ./src/app/visual-query/run-explorer/run-explorer.component.ts ***!
  \*********************************************************************/
/*! exports provided: RunExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunExplorerComponent", function() { return RunExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_run_explorer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./run-explorer.component.html */ "Q7yC");
/* harmony import */ var _run_explorer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./run-explorer.component.scss */ "RCwj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/context */ "Iv+g");
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/visual-query.service */ "Thzz");
/* harmony import */ var _run_explorer_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./run-explorer.helpers */ "CiNP");








var RunExplorerComponent = /** @class */ (function () {
    function RunExplorerComponent(context, visualQueryService) {
        this.context = context;
        this.visualQueryService = visualQueryService;
    }
    RunExplorerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pipelineModel$ = this.visualQueryService.pipelineModel$;
        this.warnings$ = this.visualQueryService.pipelineModel$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pipelineModel) { return Object(_run_explorer_helpers__WEBPACK_IMPORTED_MODULE_7__["calculateWarnings"])(pipelineModel, _this.context); }));
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
    RunExplorerComponent.ctorParameters = function () { return [
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"] },
        { type: _services_visual_query_service__WEBPACK_IMPORTED_MODULE_6__["VisualQueryService"] }
    ]; };
    RunExplorerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-run-explorer',
            template: _raw_loader_run_explorer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_run_explorer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_context__WEBPACK_IMPORTED_MODULE_5__["Context"], _services_visual_query_service__WEBPACK_IMPORTED_MODULE_6__["VisualQueryService"]])
    ], RunExplorerComponent);
    return RunExplorerComponent;
}());



/***/ }),

/***/ "e35/":
/*!**********************************************************!*\
  !*** ./src/app/visual-query/visual-query.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-side-toolbar {\n  display: flex;\n  flex-direction: column;\n}\n.editor-side-toolbar .spacer {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC92aXN1YWwtcXVlcnkvdmlzdWFsLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvdmlzdWFsLXF1ZXJ5L3Zpc3VhbC1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3Itc2lkZS10b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "eVkS":
/*!******************************************************!*\
  !*** ./src/app/app-administration/services/index.ts ***!
  \******************************************************/
/*! exports provided: webApiQueryRun, webApiQuerySave, webApiQueryGet, webApiQueryDataSources, PipelinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pipelines_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipelines.service */ "frVg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiQueryRun", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_0__["webApiQueryRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiQuerySave", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_0__["webApiQuerySave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiQueryGet", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_0__["webApiQueryGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webApiQueryDataSources", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_0__["webApiQueryDataSources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipelinesService", function() { return _pipelines_service__WEBPACK_IMPORTED_MODULE_0__["PipelinesService"]; });




/***/ }),

/***/ "iAG9":
/*!***********************************************************************!*\
  !*** ./src/app/visual-query/query-result/query-result.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description {\n  font-size: 14px;\n}\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow-x: auto;\n}\n\nth {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC92aXN1YWwtcXVlcnkvcXVlcnktcmVzdWx0L3F1ZXJ5LXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC92aXN1YWwtcXVlcnkvcXVlcnktcmVzdWx0L3F1ZXJ5LXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5wcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDkuNXB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "ktf2":
/*!***********************************************************************!*\
  !*** ./src/app/visual-query/plumb-editor/plumb-editor.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvdmlzdWFsLXF1ZXJ5L3BsdW1iLWVkaXRvci9wbHVtYi1lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "mmz0":
/*!***********************************************************************!*\
  !*** ./src/app/visual-query/add-explorer/add-explorer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-slide-toggle {\n  margin: 6px;\n}\n\n.collapsible {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  overflow: hidden;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  padding: 3px 0;\n}\n\n.collapsible:hover {\n  background-color: #2a2d2e;\n}\n\n.collapsible .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n\n.list .list-item {\n  cursor: pointer;\n  padding: 4px 0 4px 24px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.list .list-item:hover {\n  background-color: #2a2d2e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC92aXN1YWwtcXVlcnkvYWRkLWV4cGxvcmVyL2FkZC1leHBsb3Jlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBR0U7RUFDRSx5QkFBQTtBQURKIiwiZmlsZSI6InByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC92aXN1YWwtcXVlcnkvYWRkLWV4cGxvcmVyL2FkZC1leHBsb3Jlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc2xpZGUtdG9nZ2xlIHtcclxuICBtYXJnaW46IDZweDtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwYWRkaW5nOiAzcHggMDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQ1LCA0Nik7XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdCAubGlzdC1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogNHB4IDAgNHB4IDI0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDUsIDQ2KTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "ryMv":
/*!*************************************************************!*\
  !*** ./src/app/visual-query/visual-query-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VisualQueryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualQueryRoutingModule", function() { return VisualQueryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "it7M");
/* harmony import */ var _visual_query_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visual-query.component */ "Lpz0");





var routes = [
    {
        path: '', component: _visual_query_component__WEBPACK_IMPORTED_MODULE_4__["VisualQueryComponent"],
        children: [
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "B+J5")).then(function (m) { return m.EditModule; }); },
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

/***/ "sua8":
/*!***************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/visual-query/visual-query.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n<div class=\"editor-root\">\r\n  <div class=\"editor-side-toolbar\">\r\n    <div class=\"button\" matTooltip=\"Run\" [ngClass]=\"{ 'active': activeExplorer === explorer.run }\"\r\n      (click)=\"toggleExplorer(explorer.run)\">\r\n      <mat-icon>play_arrow</mat-icon>\r\n    </div>\r\n    <div class=\"button\" matTooltip=\"Add\" [ngClass]=\"{ 'active': activeExplorer === explorer.add }\"\r\n      (click)=\"toggleExplorer(explorer.add)\">\r\n      <mat-icon>add</mat-icon>\r\n    </div>\r\n    <div class=\"spacer\"></div>\r\n    <div class=\"button\" matTooltip=\"Help\" (click)=\"openHelp()\">\r\n      <mat-icon>help_outline</mat-icon>\r\n    </div>\r\n  </div>\r\n\r\n  <app-run-explorer [hidden]=\"activeExplorer !== explorer.run\"></app-run-explorer>\r\n\r\n  <app-add-explorer [hidden]=\"activeExplorer !== explorer.add\"></app-add-explorer>\r\n\r\n  <app-plumb-editor></app-plumb-editor>\r\n</div>\r\n");

/***/ }),

/***/ "t8rd":
/*!*********************************************************************!*\
  !*** ./src/app/visual-query/plumb-editor/plumb-editor.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlumbEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlumbEditorComponent", function() { return PlumbEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_plumb_editor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plumb-editor.component.html */ "NZOo");
/* harmony import */ var _plumb_editor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plumb-editor.component.scss */ "ktf2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _shared_helpers_load_scripts_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/helpers/load-scripts.helper */ "1/u/");
/* harmony import */ var _services_query_definition_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/query-definition.service */ "8Upm");
/* harmony import */ var _services_visual_query_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/visual-query.service */ "Thzz");
/* harmony import */ var _plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plumb-editor.helpers */ "8gUn");
/* harmony import */ var _plumber_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plumber.helper */ "WjTN");



// tslint:disable-next-line:max-line-length








var jsPlumbUrl = 'https://cdnjs.cloudflare.com/ajax/libs/jsPlumb/2.14.5/js/jsplumb.min.js';
var PlumbEditorComponent = /** @class */ (function () {
    function PlumbEditorComponent(visualQueryService, queryDefinitionService, changeDetectorRef) {
        this.visualQueryService = visualQueryService;
        this.queryDefinitionService = queryDefinitionService;
        this.changeDetectorRef = changeDetectorRef;
        this.dataSrcIdPrefix = _plumber_helper__WEBPACK_IMPORTED_MODULE_10__["dataSrcIdPrefix"];
        this.hardReset = false;
        this.scriptLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.plumbInits = 0;
    }
    PlumbEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_shared_helpers_load_scripts_helper__WEBPACK_IMPORTED_MODULE_6__["loadScripts"])([{ test: 'jsPlumb', src: jsPlumbUrl }], function () {
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
                typeInfos: Object(_plumb_editor_helpers__WEBPACK_IMPORTED_MODULE_9__["calculateTypeInfos"])(pipelineModel.DataSources, dataSources),
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
            _this.plumber = new _plumber_helper__WEBPACK_IMPORTED_MODULE_10__["Plumber"](_this.domRootRef.nativeElement, _this.visualQueryService.pipelineModel$.value, _this.visualQueryService.dataSources$.value, _this.onConnectionsChanged.bind(_this), _this.onDragend.bind(_this), ++_this.plumbInits);
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
    PlumbEditorComponent.prototype.configureDataSource = function (dataSource) {
        // ensure dataSource entity is saved
        if (dataSource.EntityGuid.includes('unsaved')) {
            this.visualQueryService.saveAndRun(true, false);
        }
        else {
            this.visualQueryService.editDataSource(dataSource);
        }
    };
    PlumbEditorComponent.prototype.typeNameFilter = function (input, format) {
        var filtered = this.queryDefinitionService.typeNameFilter(input, format);
        return filtered;
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
        { type: _services_visual_query_service__WEBPACK_IMPORTED_MODULE_8__["VisualQueryService"] },
        { type: _services_query_definition_service__WEBPACK_IMPORTED_MODULE_7__["QueryDefinitionService"] },
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
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_visual_query_service__WEBPACK_IMPORTED_MODULE_8__["VisualQueryService"],
            _services_query_definition_service__WEBPACK_IMPORTED_MODULE_7__["QueryDefinitionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], PlumbEditorComponent);
    return PlumbEditorComponent;
}());



/***/ })

}]);
//# sourceMappingURL=visual-query-visual-query-module.js.map