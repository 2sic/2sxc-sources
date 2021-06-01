(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~a2090640"],{

/***/ "spPA":
/*!**************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/content-type-fields/services/content-types-fields.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: webApiFieldsRoot, webApiFieldsAll, ContentTypesFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiFieldsRoot", function() { return webApiFieldsRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webApiFieldsAll", function() { return webApiFieldsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesFieldsService", function() { return ContentTypesFieldsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-administration/services/content-types.service */ "uwFg");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");







var webApiFieldsRoot = 'admin/field/';
var webApiFieldsAll = webApiFieldsRoot + 'all';
var ContentTypesFieldsService = /** @class */ (function () {
    function ContentTypesFieldsService(http, context, dnnContext) {
        this.http = http;
        this.context = context;
        this.dnnContext = dnnContext;
    }
    ContentTypesFieldsService.prototype.apiUrl = function (name) {
        return this.dnnContext.$2sxc.http.apiUrl(name);
    };
    ContentTypesFieldsService.prototype.typeListRetrieve = function () {
        return this.http.get(this.apiUrl(webApiFieldsRoot + 'DataTypes'), {
            params: { appid: this.context.appId.toString() }
        });
    };
    ContentTypesFieldsService.prototype.getInputTypesList = function () {
        return this.http
            .get(this.apiUrl(webApiFieldsRoot + 'InputTypes'), { params: { appid: this.context.appId.toString() } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (inputConfigs) {
            var inputTypeOptions = inputConfigs.map(function (config) {
                var option = {
                    dataType: config.Type.substring(0, config.Type.indexOf('-')),
                    inputType: config.Type,
                    label: config.Label,
                    description: config.Description,
                };
                return option;
            });
            return inputTypeOptions;
        }));
    };
    ContentTypesFieldsService.prototype.getFields = function (contentType) {
        return this.http
            .get(this.apiUrl(webApiFieldsAll), {
            params: { appid: this.context.appId.toString(), staticName: contentType.StaticName },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) {
            var e_1, _a;
            if (fields) {
                try {
                    for (var fields_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                        var fld = fields_1_1.value;
                        if (!fld.Metadata) {
                            continue;
                        }
                        var md = fld.Metadata;
                        var allMd = md.All;
                        var typeMd = md[fld.Type];
                        var inputMd = md[fld.InputType];
                        md.merged = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, allMd), typeMd), inputMd);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return fields;
        }));
    };
    ContentTypesFieldsService.prototype.reOrder = function (idArray, contentType) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'Sort'), null, {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                order: JSON.stringify(idArray),
            },
        });
    };
    ContentTypesFieldsService.prototype.setTitle = function (item, contentType) {
        return this.http.post(this.apiUrl(_app_administration_services_content_types_service__WEBPACK_IMPORTED_MODULE_5__["webApiTypeRoot"] + 'SetTitle'), null, {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                attributeId: item.Id.toString(),
            },
        });
    };
    ContentTypesFieldsService.prototype.rename = function (item, contentType, newName) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'Rename'), null, {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                attributeId: item.Id.toString(),
                newName: newName,
            },
        });
    };
    ContentTypesFieldsService.prototype.delete = function (item, contentType) {
        if (item.IsTitle) {
            throw new Error('Can\'t delete Title');
        }
        return this.http.delete(this.apiUrl(webApiFieldsRoot + 'Delete'), {
            params: {
                appid: this.context.appId.toString(),
                contentTypeId: contentType.Id.toString(),
                attributeId: item.Id.toString(),
            },
        });
    };
    ContentTypesFieldsService.prototype.add = function (newField, contentTypeId) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'Add'), null, {
            params: {
                AppId: this.context.appId.toString(),
                ContentTypeId: contentTypeId.toString(),
                Id: newField.Id.toString(),
                Type: newField.Type,
                InputType: newField.InputType,
                StaticName: newField.StaticName,
                IsTitle: newField.IsTitle.toString(),
                Index: newField.SortOrder.toString(),
            }
        });
    };
    ContentTypesFieldsService.prototype.updateInputType = function (id, staticName, inputType) {
        return this.http.post(this.apiUrl(webApiFieldsRoot + 'InputType'), null, {
            params: { appId: this.context.appId.toString(), attributeId: id.toString(), field: staticName, inputType: inputType }
        });
    };
    ContentTypesFieldsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_6__["Context"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    ContentTypesFieldsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_context__WEBPACK_IMPORTED_MODULE_6__["Context"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], ContentTypesFieldsService);
    return ContentTypesFieldsService;
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
//# sourceMappingURL=default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~a2090640.js.map