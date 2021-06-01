(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-management-apps-management-module"],{

/***/ "2TTF":
/*!****************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/manage-features/manage-features.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iframe-wrapper {\n  padding-top: 20px;\n}\n\n.spinner {\n  position: absolute;\n  top: 40px;\n  left: 20px;\n}\n\n.iframe {\n  border: none;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1hbmFnZS1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJtYW5hZ2UtZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWZyYW1lLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uaWZyYW1lIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "3AhV":
/*!*************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-security/features-list-security.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feature-security-icon {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmZWF0dXJlcy1saXN0LXNlY3VyaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImZlYXR1cmVzLWxpc3Qtc2VjdXJpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZS1zZWN1cml0eS1pY29uIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "3iQy":
/*!******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/services/enable-languages.service.ts ***!
  \******************************************************************************************/
/*! exports provided: EnableLanguagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableLanguagesService", function() { return EnableLanguagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var webApiZoneRoot = 'admin/zone/';
var EnableLanguagesService = /** @class */ (function () {
    function EnableLanguagesService(http, dnnContext) {
        this.http = http;
        this.dnnContext = dnnContext;
    }
    EnableLanguagesService.prototype.getAll = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiZoneRoot + 'getlanguages'));
    };
    EnableLanguagesService.prototype.toggle = function (code, enable) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiZoneRoot + 'switchlanguage'), {
            params: { cultureCode: code, enable: enable.toString() },
        });
    };
    // todo: this code is _identical_ to toggle above. one should be removed, but I don't know where they are used
    EnableLanguagesService.prototype.save = function (code, enable) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiZoneRoot + 'switchlanguage'), {
            params: { cultureCode: code, enable: enable.toString() },
        });
    };
    EnableLanguagesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    EnableLanguagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], EnableLanguagesService);
    return EnableLanguagesService;
}());



/***/ }),

/***/ "442b":
/*!*********************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/apps-list-show/apps-list-show.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzLWxpc3Qtc2hvdy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "69DT":
/*!*******************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/apps-list-show/apps-list-show.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AppsListShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsListShowComponent", function() { return AppsListShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_apps_list_show_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./apps-list-show.component.html */ "Ta33");
/* harmony import */ var _apps_list_show_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps-list-show.component.scss */ "442b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppsListShowComponent = /** @class */ (function () {
    function AppsListShowComponent() {
    }
    AppsListShowComponent.prototype.agInit = function (params) {
        this.value = params.value;
    };
    AppsListShowComponent.prototype.refresh = function (params) {
        return true;
    };
    AppsListShowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-apps-list-show',
            template: _raw_loader_apps_list_show_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_apps_list_show_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppsListShowComponent);
    return AppsListShowComponent;
}());



/***/ }),

/***/ "6ZBp":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/sxc-insights/sxc-insights.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cards-box\">\r\n  <mat-card class=\"mat-elevation-z2\">\r\n    <mat-card-header>\r\n      <mat-card-title>2sxc Insights for Super Users</mat-card-title>\r\n      <div class=\"actions-box\">\r\n        <button mat-icon-button matTooltip=\"Open 2sxc Insights\" (click)=\"openInsights()\">\r\n          <mat-icon>speed</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      This is to access a special section to see what is really in the server memory. It's intended for extensive\r\n      debugging\r\n      - see also <a href=\"https://2sxc.org/en/blog/post/using-2sxc-insights\" target=\"_blank\">this blog post</a>.\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"mat-elevation-z2\">\r\n    <mat-card-header>\r\n      <mat-card-title>Activate Page Level Logging</mat-card-title>\r\n      <div class=\"actions-box\"></div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <form #activateLogForm=\"ngForm\" class=\"activate-log-form\" (ngSubmit)=\"activatePageLog(activateLogForm)\">\r\n        <div>\r\n          This will place insights-logs in the HTML of the user output for users with ?debug=true in the url. It can\r\n          only be activated for short periods of time.\r\n        </div>\r\n        <mat-form-field appearance=\"standard\" color=\"accent\">\r\n          <mat-label>Duration in Minutes</mat-label>\r\n          <input matInput type=\"number\" min=\"0\" required [pattern]=\"positiveWholeNumber\" [(ngModel)]=\"pageLogDuration\"\r\n            name=\"Duration\" #duration=\"ngModel\" [disabled]=\"loading$ | async\">\r\n        </mat-form-field>\r\n        <ng-container *ngIf=\"duration.touched && duration.errors\">\r\n          <app-field-hint *ngIf=\"duration.errors.pattern\" [isError]=\"true\">\r\n            Only positive whole numbers\r\n          </app-field-hint>\r\n        </ng-container>\r\n        <div class=\"form-actions\">\r\n          <button mat-raised-button type=\"submit\" color=\"accent\"\r\n            [disabled]=\"!activateLogForm.valid || (loading$ | async)\">\r\n            Activate\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "76tZ":
/*!******************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/enable-languages/enable-languages.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmFibGUtbGFuZ3VhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "8Llm":
/*!**************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/apps-list/apps-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AppsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsListComponent", function() { return AppsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_apps_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./apps-list.component.html */ "K/2S");
/* harmony import */ var _apps_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps-list.component.scss */ "FlgK");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "DR3G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/boolean-filter/boolean-filter.component */ "0p6s");
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ "gyhz");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ "1HxE");
/* harmony import */ var _ag_grid_components_apps_list_actions_apps_list_actions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ag-grid-components/apps-list-actions/apps-list-actions.component */ "XYbZ");
/* harmony import */ var _ag_grid_components_apps_list_show_apps_list_show_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ag-grid-components/apps-list-show/apps-list-show.component */ "69DT");
/* harmony import */ var _constants_app_patterns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constants/app.patterns */ "jNqs");
/* harmony import */ var _services_apps_list_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/apps-list.service */ "L6al");
















var AppsListComponent = /** @class */ (function () {
    function AppsListComponent(router, route, appsListService, snackBar) {
        this.router = router;
        this.route = route;
        this.appsListService = appsListService;
        this.snackBar = snackBar;
        this.apps$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_11__["defaultGridOptions"]), { frameworkComponents: {
                booleanFilterComponent: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_9__["BooleanFilterComponent"],
                idFieldComponent: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_10__["IdFieldComponent"],
                appsListShowComponent: _ag_grid_components_apps_list_show_apps_list_show_component__WEBPACK_IMPORTED_MODULE_13__["AppsListShowComponent"],
                appsListActionsComponent: _ag_grid_components_apps_list_actions_apps_list_actions_component__WEBPACK_IMPORTED_MODULE_12__["AppsListActionsComponent"],
            }, columnDefs: [
                {
                    headerName: 'ID', field: 'Id', width: 70, headerClass: 'dense', cellClass: 'id-action no-padding no-outline',
                    cellRenderer: 'idFieldComponent', sortable: true, filter: 'agTextColumnFilter',
                    cellRendererParams: {
                        tooltipGetter: function (paramsData) { return "ID: " + paramsData.Id + "\nGUID: " + paramsData.Guid; },
                    },
                },
                {
                    headerName: 'Show', field: 'IsHidden', width: 70, headerClass: 'dense', cellClass: 'icons no-outline', sortable: true,
                    filter: 'booleanFilterComponent', cellRenderer: 'appsListShowComponent', valueGetter: this.showValueGetter,
                },
                {
                    headerName: 'Name', field: 'Name', flex: 2, minWidth: 250, cellClass: 'apps-list-primary-action highlight', sortable: true,
                    sort: 'asc', filter: 'agTextColumnFilter', onCellClicked: this.openApp.bind(this),
                    cellRenderer: function (params) {
                        var app = params.data;
                        if (app.Thumbnail != null) {
                            return "\n            <div class=\"container\">\n              <img class=\"image logo\" src=\"" + app.Thumbnail + "?w=40&h=40&mode=crop\"></img>\n              <div class=\"text\">" + params.value + "</div>\n            </div>";
                        }
                        else {
                            return "\n            <div class=\"container\">\n              <div class=\"image logo\">\n                <span class=\"material-icons-outlined\">star_border</span>\n              </div>\n              <div class=\"text\">" + params.value + "</div>\n            </div>";
                        }
                    },
                },
                {
                    headerName: 'Folder', field: 'Folder', flex: 2, minWidth: 250, cellClass: 'no-outline', sortable: true,
                    filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Version', field: 'Version', width: 78, headerClass: 'dense', cellClass: 'no-outline', sortable: true,
                    filter: 'agTextColumnFilter',
                },
                {
                    headerName: 'Items', field: 'Items', width: 70, headerClass: 'dense', cellClass: 'number-cell no-outline', sortable: true,
                    filter: 'agNumberColumnFilter',
                },
                {
                    width: 80, cellClass: 'secondary-action no-padding', cellRenderer: 'appsListActionsComponent', pinned: 'right',
                    cellRendererParams: {
                        onDelete: this.deleteApp.bind(this),
                        onFlush: this.flushApp.bind(this),
                    },
                },
            ] });
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    AppsListComponent.prototype.ngOnInit = function () {
        this.fetchAppsList();
        this.refreshOnChildClosed();
    };
    AppsListComponent.prototype.ngOnDestroy = function () {
        this.apps$.complete();
        this.subscription.unsubscribe();
    };
    AppsListComponent.prototype.browseCatalog = function () {
        window.open('https://2sxc.org/apps', '_blank');
    };
    AppsListComponent.prototype.createApp = function () {
        var _this = this;
        var name = prompt('Enter App Name (will also be used for folder)');
        if (name === null) {
            return;
        }
        name = name.trim().replace(/\s\s+/g, ' '); // remove multiple white spaces and tabs
        while (!name.match(_constants_app_patterns__WEBPACK_IMPORTED_MODULE_14__["appNamePattern"])) {
            name = prompt("Enter App Name (will also be used for folder)\n" + _constants_app_patterns__WEBPACK_IMPORTED_MODULE_14__["appNameError"], name);
            if (name === null) {
                return;
            }
            name = name.trim().replace(/\s\s+/g, ' '); // remove multiple white spaces and tabs
        }
        this.snackBar.open('Saving...');
        this.appsListService.create(name).subscribe(function () {
            _this.snackBar.open('Saved', null, { duration: 2000 });
            _this.fetchAppsList();
        });
    };
    AppsListComponent.prototype.importApp = function (files) {
        var dialogData = { files: files };
        this.router.navigate(['import'], { relativeTo: this.route.firstChild, state: dialogData });
    };
    AppsListComponent.prototype.fetchAppsList = function () {
        var _this = this;
        this.appsListService.getAll().subscribe(function (apps) {
            _this.apps$.next(apps);
        });
    };
    AppsListComponent.prototype.showValueGetter = function (params) {
        var app = params.data;
        return !app.IsHidden;
    };
    AppsListComponent.prototype.deleteApp = function (app) {
        var _this = this;
        var result = prompt("This cannot be undone. To really delete this app, type 'yes!' or type/paste the app-name here. Are you sure want to delete '" + app.Name + "' (" + app.Id + ")?");
        if (result === null) {
            return;
        }
        if (result === app.Name || result === 'yes!') {
            this.snackBar.open('Deleting...');
            this.appsListService.delete(app.Id).subscribe(function () {
                _this.snackBar.open('Deleted', null, { duration: 2000 });
                _this.fetchAppsList();
            });
        }
        else {
            alert('Input did not match - will not delete');
        }
    };
    AppsListComponent.prototype.flushApp = function (app) {
        var _this = this;
        if (!confirm("Flush the App Cache for " + app.Name + " (" + app.Id + ")?")) {
            return;
        }
        this.snackBar.open('Flushing cache...');
        this.appsListService.flushCache(app.Id).subscribe(function () {
            _this.snackBar.open('Cache flushed', null, { duration: 2000 });
        });
    };
    AppsListComponent.prototype.openApp = function (params) {
        var appId = params.data.Id;
        this.router.navigate([appId.toString()], { relativeTo: this.route.parent });
    };
    AppsListComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(!!this.route.snapshot.firstChild.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () { return !!_this.route.snapshot.firstChild.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            _this.fetchAppsList();
        }));
    };
    AppsListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_apps_list_service__WEBPACK_IMPORTED_MODULE_15__["AppsListService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    AppsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-apps-list',
            template: _raw_loader_apps_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_apps_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_apps_list_service__WEBPACK_IMPORTED_MODULE_15__["AppsListService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AppsListComponent);
    return AppsListComponent;
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

/***/ "BXDj":
/*!***************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/apps-list-actions/apps-list-actions.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzLWxpc3QtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "DIqp":
/*!*************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-ui/features-list-ui.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy1saXN0LXVpLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "FlgK":
/*!****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/apps-list/apps-list.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "JEo7":
/*!*****************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/services/features-config.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: FeaturesConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesConfigService", function() { return FeaturesConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var webApiFeatures = 'admin/feature/';
var FeaturesConfigService = /** @class */ (function () {
    function FeaturesConfigService(http, dnnContext) {
        this.http = http;
        this.dnnContext = dnnContext;
    }
    FeaturesConfigService.prototype.getAll = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiFeatures + 'List'));
    };
    FeaturesConfigService.prototype.getManageFeaturesUrl = function () {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiFeatures + 'RemoteManageUrl'));
    };
    FeaturesConfigService.prototype.saveFeatures = function (featuresString) {
        return this.http.post(this.dnnContext.$2sxc.http.apiUrl(webApiFeatures + 'Save'), featuresString);
    };
    FeaturesConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    FeaturesConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], FeaturesConfigService);
    return FeaturesConfigService;
}());



/***/ }),

/***/ "JPyS":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/ag-grid-components/apps-list-actions/apps-list-actions.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"actions-component\">\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"Flush cache\" (click)=\"flushCache()\">\r\n    <mat-icon>cached</mat-icon>\r\n  </div>\r\n  <div class=\"like-button highlight\" matRipple matTooltip=\"More\" [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_horiz</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #menu=\"matMenu\" class=\"grid-more-menu\">\r\n  <button mat-menu-item [disabled]=\"!app.IsApp\" (click)=\"deleteApp()\">\r\n    <mat-icon>delete</mat-icon>\r\n    <span>Delete</span>\r\n  </button>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "K/2S":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/apps-list/apps-list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-wrapper mat-tab-grid-wrapper\">\r\n  <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"apps$ | async\" [modules]=\"modules\" [gridOptions]=\"gridOptions\"\r\n    appDragAndDrop [allowedFileTypes]=\"'zip'\" (filesDropped)=\"importApp($event)\">\r\n  </ag-grid-angular>\r\n\r\n  <div class=\"grid-more-actions-box\"></div>\r\n\r\n  <eco-fab-speed-dial class=\"grid-fab\">\r\n    <eco-fab-speed-dial-trigger [spin]=\"true\">\r\n      <button mat-fab>\r\n        <mat-icon class=\"spin180\">add</mat-icon>\r\n      </button>\r\n    </eco-fab-speed-dial-trigger>\r\n\r\n    <eco-fab-speed-dial-actions>\r\n      <button mat-mini-fab matTooltip=\"Find more apps\" (click)=\"browseCatalog()\">\r\n        <mat-icon>search</mat-icon>\r\n      </button>\r\n      <button mat-mini-fab matTooltip=\"Import app\" (click)=\"importApp()\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n      </button>\r\n      <button mat-mini-fab matTooltip=\"Create app\" (click)=\"createApp()\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </eco-fab-speed-dial-actions>\r\n  </eco-fab-speed-dial>\r\n</div>\r\n");

/***/ }),

/***/ "KIzN":
/*!***********************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-enabled/features-list-enabled.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy1saXN0LWVuYWJsZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "KgCK":
/*!**********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/sxc-insights/sxc-insights.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".activate-log-form .mat-form-field {\n  height: auto;\n}\n.activate-log-form .form-actions {\n  margin-top: 8px;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN4Yy1pbnNpZ2h0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQURKIiwiZmlsZSI6InN4Yy1pbnNpZ2h0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmF0ZS1sb2ctZm9ybSB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5mb3JtLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Ll6W":
/*!***************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/enable-languages-status/enable-languages-status.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cell-box {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxlbmFibGUtbGFuZ3VhZ2VzLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJlbmFibGUtbGFuZ3VhZ2VzLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZWxsLWJveCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "M3FF":
/*!**********************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/apps-management-nav/apps-management-nav.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AppsManagementNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsManagementNavComponent", function() { return AppsManagementNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_apps_management_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./apps-management-nav.component.html */ "odyr");
/* harmony import */ var _apps_management_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps-management-nav.component.scss */ "wpTw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/context */ "1O52");








var AppsManagementNavComponent = /** @class */ (function () {
    function AppsManagementNavComponent(dialogRef, router, route, context) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.router = router;
        this.route = route;
        this.context = context;
        this.zoneId = this.context.zoneId;
        this.tabs = ['list', 'languages', 'features', 'sxc-insights']; // tabs order has to match template
        this.tabIndex$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return _this.tabs.indexOf(_this.route.snapshot.firstChild.url[0].path); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this.tabs.indexOf(this.route.snapshot.firstChild.url[0].path)));
    }
    AppsManagementNavComponent.prototype.ngOnInit = function () {
    };
    AppsManagementNavComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AppsManagementNavComponent.prototype.changeTab = function (event) {
        var path = this.tabs[event.index];
        this.router.navigate([path], { relativeTo: this.route });
    };
    AppsManagementNavComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"] }
    ]; };
    AppsManagementNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-apps-management-nav',
            template: _raw_loader_apps_management_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_apps_management_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _shared_services_context__WEBPACK_IMPORTED_MODULE_7__["Context"]])
    ], AppsManagementNavComponent);
    return AppsManagementNavComponent;
}());



/***/ }),

/***/ "MMLX":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-enabled/features-list-enabled.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\">\r\n  <mat-icon matTooltip=\"Feature is enabled\" *ngIf=\"value\">toggle_on</mat-icon>\r\n  <mat-icon matTooltip=\"Feature is disabled\" *ngIf=\"!value\">toggle_off</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "NT0C":
/*!*********************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-public/features-list-public.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy1saXN0LXB1YmxpYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Q+eI":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/manage-features/manage-features.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div class=\"grid-wrapper mat-tab-grid-wrapper\" [ngClass]=\"{ 'iframe-wrapper': data.showManagement }\">\r\n    <ag-grid-angular class=\"ag-theme-material\" [ngClass]=\"{ 'force-hide': data.showManagement }\"\r\n      [rowData]=\"data.features\" [modules]=\"modules\" [gridOptions]=\"gridOptions\">\r\n    </ag-grid-angular>\r\n\r\n    <mat-spinner class=\"spinner\" *ngIf=\"data.showSpinner\" mode=\"indeterminate\" diameter=\"20\" color=\"accent\">\r\n    </mat-spinner>\r\n\r\n    <iframe class=\"iframe\" *ngIf=\"data.showManagement\" [src]=\"data.managementUrl | safeResourceUrl\"></iframe>\r\n\r\n    <div class=\"grid-more-actions-box\"></div>\r\n\r\n    <button mat-fab mat-elevation-z24 class=\"grid-fab\" matTooltip=\"Manage features\" (click)=\"toggleManagement()\">\r\n      <mat-icon>tune</mat-icon>\r\n    </button>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "R9mk":
/*!***********************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-ui/features-list-ui.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: FeaturesListUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesListUiComponent", function() { return FeaturesListUiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_features_list_ui_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./features-list-ui.component.html */ "m74s");
/* harmony import */ var _features_list_ui_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features-list-ui.component.scss */ "DIqp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FeaturesListUiComponent = /** @class */ (function () {
    function FeaturesListUiComponent() {
    }
    FeaturesListUiComponent.prototype.agInit = function (params) {
        this.value = params.value;
    };
    FeaturesListUiComponent.prototype.refresh = function (params) {
        return true;
    };
    FeaturesListUiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-features-list-ui',
            template: _raw_loader_features_list_ui_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_features_list_ui_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], FeaturesListUiComponent);
    return FeaturesListUiComponent;
}());



/***/ }),

/***/ "STH1":
/*!****************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/enable-languages/enable-languages.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EnableLanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableLanguagesComponent", function() { return EnableLanguagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enable_languages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enable-languages.component.html */ "w2oQ");
/* harmony import */ var _enable_languages_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enable-languages.component.scss */ "76tZ");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "DR3G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/boolean-filter/boolean-filter.component */ "0p6s");
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ "gyhz");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ "1HxE");
/* harmony import */ var _ag_grid_components_enable_languages_status_enable_languages_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ag-grid-components/enable-languages-status/enable-languages-status.component */ "o+Zu");
/* harmony import */ var _services_enable_languages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/enable-languages.service */ "3iQy");











var EnableLanguagesComponent = /** @class */ (function () {
    function EnableLanguagesComponent(languagesService) {
        this.languagesService = languagesService;
        this.languages$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_8__["defaultGridOptions"]), { frameworkComponents: {
                idFieldComponent: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_7__["IdFieldComponent"],
                booleanFilterComponent: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_6__["BooleanFilterComponent"],
                enableLanguagesStatusComponent: _ag_grid_components_enable_languages_status_enable_languages_status_component__WEBPACK_IMPORTED_MODULE_9__["EnableLanguagesStatusComponent"],
            }, columnDefs: [
                {
                    headerName: 'ID', field: 'Code', width: 70, headerClass: 'dense', cellClass: 'id-action no-padding no-outline',
                    cellRenderer: 'idFieldComponent', sortable: true, filter: 'agTextColumnFilter',
                    cellRendererParams: {
                        tooltipGetter: function (paramsData) { return "ID: " + paramsData.Code; },
                    },
                },
                {
                    headerName: 'Name', field: 'Culture', flex: 2, minWidth: 250, cellClass: 'primary-action highlight no-outline', sortable: true,
                    sort: 'asc', filter: 'agTextColumnFilter', onCellClicked: this.handleNameClicked.bind(this),
                },
                {
                    headerName: 'Status', field: 'IsEnabled', width: 72, headerClass: 'dense', cellClass: 'no-padding no-outline',
                    cellRenderer: 'enableLanguagesStatusComponent', sortable: true, filter: 'booleanFilterComponent',
                    cellRendererParams: {
                        onEnabledToggle: this.toggleLanguage.bind(this),
                    },
                },
            ] });
    }
    EnableLanguagesComponent.prototype.ngOnInit = function () {
        this.fetchLanguages();
    };
    EnableLanguagesComponent.prototype.ngOnDestroy = function () {
        this.languages$.complete();
    };
    EnableLanguagesComponent.prototype.handleNameClicked = function (params) {
        var language = params.data;
        this.toggleLanguage(language);
    };
    EnableLanguagesComponent.prototype.toggleLanguage = function (language) {
        var _this = this;
        this.languagesService.save(language.Code, !language.IsEnabled).subscribe(function () {
            _this.fetchLanguages();
        });
    };
    EnableLanguagesComponent.prototype.fetchLanguages = function () {
        var _this = this;
        this.languagesService.getAll().subscribe(function (languages) {
            _this.languages$.next(languages);
        });
    };
    EnableLanguagesComponent.ctorParameters = function () { return [
        { type: _services_enable_languages_service__WEBPACK_IMPORTED_MODULE_10__["EnableLanguagesService"] }
    ]; };
    EnableLanguagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-enable-languages',
            template: _raw_loader_enable_languages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_enable_languages_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_enable_languages_service__WEBPACK_IMPORTED_MODULE_10__["EnableLanguagesService"]])
    ], EnableLanguagesComponent);
    return EnableLanguagesComponent;
}());



/***/ }),

/***/ "Ta33":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/ag-grid-components/apps-list-show/apps-list-show.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\">\r\n  <mat-icon matTooltip=\"Show this app to users\" *ngIf=\"value\">visibility</mat-icon>\r\n  <mat-icon matTooltip=\"Don't show this app to users\" *ngIf=\"!value\">visibility_off</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "U5jY":
/*!*******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/apps-management.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AppsManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsManagementModule", function() { return AppsManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ag-grid-community/angular */ "gwh1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "JbvS");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _ag_grid_components_apps_list_actions_apps_list_actions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ag-grid-components/apps-list-actions/apps-list-actions.component */ "XYbZ");
/* harmony import */ var _ag_grid_components_apps_list_show_apps_list_show_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ag-grid-components/apps-list-show/apps-list-show.component */ "69DT");
/* harmony import */ var _ag_grid_components_enable_languages_status_enable_languages_status_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ag-grid-components/enable-languages-status/enable-languages-status.component */ "o+Zu");
/* harmony import */ var _ag_grid_components_features_list_enabled_features_list_enabled_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ag-grid-components/features-list-enabled/features-list-enabled.component */ "bH+M");
/* harmony import */ var _ag_grid_components_features_list_public_features_list_public_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ag-grid-components/features-list-public/features-list-public.component */ "kZw0");
/* harmony import */ var _ag_grid_components_features_list_security_features_list_security_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ag-grid-components/features-list-security/features-list-security.component */ "uO4x");
/* harmony import */ var _ag_grid_components_features_list_ui_features_list_ui_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ag-grid-components/features-list-ui/features-list-ui.component */ "R9mk");
/* harmony import */ var _apps_list_apps_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./apps-list/apps-list.component */ "8Llm");
/* harmony import */ var _apps_management_nav_apps_management_nav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./apps-management-nav/apps-management-nav.component */ "M3FF");
/* harmony import */ var _apps_management_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./apps-management-routing.module */ "fEm1");
/* harmony import */ var _enable_languages_enable_languages_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./enable-languages/enable-languages.component */ "STH1");
/* harmony import */ var _manage_features_manage_features_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./manage-features/manage-features.component */ "jv3j");
/* harmony import */ var _services_apps_list_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/apps-list.service */ "L6al");
/* harmony import */ var _services_enable_languages_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/enable-languages.service */ "3iQy");
/* harmony import */ var _services_features_config_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/features-config.service */ "JEo7");
/* harmony import */ var _services_sxc_insights_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/sxc-insights.service */ "poP/");
/* harmony import */ var _sxc_insights_sxc_insights_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./sxc-insights/sxc-insights.component */ "vI2K");




































var AppsManagementModule = /** @class */ (function () {
    function AppsManagementModule() {
    }
    AppsManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _apps_management_nav_apps_management_nav_component__WEBPACK_IMPORTED_MODULE_27__["AppsManagementNavComponent"],
                _apps_list_apps_list_component__WEBPACK_IMPORTED_MODULE_26__["AppsListComponent"],
                _manage_features_manage_features_component__WEBPACK_IMPORTED_MODULE_30__["ManageFeaturesComponent"],
                _sxc_insights_sxc_insights_component__WEBPACK_IMPORTED_MODULE_35__["SxcInsightsComponent"],
                _ag_grid_components_apps_list_show_apps_list_show_component__WEBPACK_IMPORTED_MODULE_20__["AppsListShowComponent"],
                _ag_grid_components_apps_list_actions_apps_list_actions_component__WEBPACK_IMPORTED_MODULE_19__["AppsListActionsComponent"],
                _ag_grid_components_features_list_enabled_features_list_enabled_component__WEBPACK_IMPORTED_MODULE_22__["FeaturesListEnabledComponent"],
                _ag_grid_components_features_list_ui_features_list_ui_component__WEBPACK_IMPORTED_MODULE_25__["FeaturesListUiComponent"],
                _ag_grid_components_features_list_public_features_list_public_component__WEBPACK_IMPORTED_MODULE_23__["FeaturesListPublicComponent"],
                _ag_grid_components_features_list_security_features_list_security_component__WEBPACK_IMPORTED_MODULE_24__["FeaturesListSecurityComponent"],
                _enable_languages_enable_languages_component__WEBPACK_IMPORTED_MODULE_29__["EnableLanguagesComponent"],
                _ag_grid_components_enable_languages_status_enable_languages_status_component__WEBPACK_IMPORTED_MODULE_21__["EnableLanguagesStatusComponent"],
            ],
            entryComponents: [
                _apps_management_nav_apps_management_nav_component__WEBPACK_IMPORTED_MODULE_27__["AppsManagementNavComponent"],
                _ag_grid_components_apps_list_show_apps_list_show_component__WEBPACK_IMPORTED_MODULE_20__["AppsListShowComponent"],
                _ag_grid_components_apps_list_actions_apps_list_actions_component__WEBPACK_IMPORTED_MODULE_19__["AppsListActionsComponent"],
                _ag_grid_components_features_list_enabled_features_list_enabled_component__WEBPACK_IMPORTED_MODULE_22__["FeaturesListEnabledComponent"],
                _ag_grid_components_features_list_ui_features_list_ui_component__WEBPACK_IMPORTED_MODULE_25__["FeaturesListUiComponent"],
                _ag_grid_components_features_list_public_features_list_public_component__WEBPACK_IMPORTED_MODULE_23__["FeaturesListPublicComponent"],
                _ag_grid_components_features_list_security_features_list_security_component__WEBPACK_IMPORTED_MODULE_24__["FeaturesListSecurityComponent"],
                _ag_grid_components_enable_languages_status_enable_languages_status_component__WEBPACK_IMPORTED_MODULE_21__["EnableLanguagesStatusComponent"],
            ],
            imports: [
                _apps_management_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppsManagementRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_18__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridModule"].withComponents([]),
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_16__["EcoFabSpeedDialModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_17__["Context"],
                _services_apps_list_service__WEBPACK_IMPORTED_MODULE_31__["AppsListService"],
                _services_enable_languages_service__WEBPACK_IMPORTED_MODULE_32__["EnableLanguagesService"],
                _services_features_config_service__WEBPACK_IMPORTED_MODULE_33__["FeaturesConfigService"],
                _services_sxc_insights_service__WEBPACK_IMPORTED_MODULE_34__["SxcInsightsService"],
            ]
        })
    ], AppsManagementModule);
    return AppsManagementModule;
}());



/***/ }),

/***/ "XYbZ":
/*!*************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/apps-list-actions/apps-list-actions.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AppsListActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsListActionsComponent", function() { return AppsListActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_apps_list_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./apps-list-actions.component.html */ "JPyS");
/* harmony import */ var _apps_list_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps-list-actions.component.scss */ "BXDj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppsListActionsComponent = /** @class */ (function () {
    function AppsListActionsComponent() {
    }
    AppsListActionsComponent.prototype.agInit = function (params) {
        this.params = params;
        this.app = this.params.data;
    };
    AppsListActionsComponent.prototype.refresh = function (params) {
        return true;
    };
    AppsListActionsComponent.prototype.flushCache = function () {
        this.params.onFlush(this.app);
    };
    AppsListActionsComponent.prototype.deleteApp = function () {
        this.params.onDelete(this.app);
    };
    AppsListActionsComponent.ctorParameters = function () { return []; };
    AppsListActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-apps-list-actions',
            template: _raw_loader_apps_list_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_apps_list_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AppsListActionsComponent);
    return AppsListActionsComponent;
}());



/***/ }),

/***/ "bH+M":
/*!*********************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-enabled/features-list-enabled.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: FeaturesListEnabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesListEnabledComponent", function() { return FeaturesListEnabledComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_features_list_enabled_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./features-list-enabled.component.html */ "MMLX");
/* harmony import */ var _features_list_enabled_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features-list-enabled.component.scss */ "KIzN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FeaturesListEnabledComponent = /** @class */ (function () {
    function FeaturesListEnabledComponent() {
    }
    FeaturesListEnabledComponent.prototype.agInit = function (params) {
        this.value = params.value;
    };
    FeaturesListEnabledComponent.prototype.refresh = function (params) {
        return true;
    };
    FeaturesListEnabledComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-features-list-enabled',
            template: _raw_loader_features_list_enabled_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_features_list_enabled_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], FeaturesListEnabledComponent);
    return FeaturesListEnabledComponent;
}());



/***/ }),

/***/ "bKRG":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-public/features-list-public.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\">\r\n  <mat-icon *ngIf=\"value\">person</mat-icon>\r\n  <mat-icon *ngIf=\"!value\">remove</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "fEm1":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/apps-management-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AppsManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsManagementRoutingModule", function() { return AppsManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/empty-route/empty-route.component */ "BJZ3");
/* harmony import */ var _apps_management_nav_apps_management_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apps-management-nav/apps-management-dialog.config */ "rHJH");






var appsManagementRoutes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_3__["DialogEntryComponent"], data: { dialog: _apps_management_nav_apps_management_dialog_config__WEBPACK_IMPORTED_MODULE_5__["appsManagementDialog"] },
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_4__["EmptyRouteComponent"],
                children: [
                    {
                        path: 'import',
                        loadChildren: function () { return Promise.all(/*! import() | import-app-import-app-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("import-app-import-app-module")]).then(__webpack_require__.bind(null, /*! ../import-app/import-app.module */ "nfsb")).then(function (m) { return m.ImportAppModule; }); }
                    },
                ],
                data: { title: 'Apps in this Zone' },
            },
            { path: 'languages', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_4__["EmptyRouteComponent"], data: { title: 'Zone Languages' } },
            { path: 'features', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_4__["EmptyRouteComponent"], data: { title: 'Zone Features' } },
            { path: 'sxc-insights', component: _shared_components_empty_route_empty_route_component__WEBPACK_IMPORTED_MODULE_4__["EmptyRouteComponent"], data: { title: 'Debug Insights' } },
            {
                path: ':appId',
                loadChildren: function () { return Promise.all(/*! import() | app-administration-app-administration-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~5cd8229e"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~8dad88b1"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~8f63a540"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edi~24510ec4"), __webpack_require__.e("default~app-administration-app-administration-module~dev-rest-module~item-history-item-history-modul~33ae364d"), __webpack_require__.e("default~app-administration-app-administration-module~permissions-module~permissions-permissions-modu~afd5f2f2"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~a2090640"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~33e631e1"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~content-type-fields-content-type-fields-module~~a0153aaf"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~visual-query-visual-query-module"), __webpack_require__.e("common"), __webpack_require__.e("app-administration-app-administration-module")]).then(__webpack_require__.bind(null, /*! ../app-administration/app-administration.module */ "Ru9k")).then(function (m) { return m.AppAdministrationModule; }); }
            },
        ]
    },
];
var AppsManagementRoutingModule = /** @class */ (function () {
    function AppsManagementRoutingModule() {
    }
    AppsManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appsManagementRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppsManagementRoutingModule);
    return AppsManagementRoutingModule;
}());



/***/ }),

/***/ "hb1E":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/ag-grid-components/enable-languages-status/enable-languages-status.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cell-box\">\r\n  <mat-slide-toggle [checked]=\"value\" (change)=\"toggleLanguage()\"></mat-slide-toggle>\r\n</div>\r\n");

/***/ }),

/***/ "if+5":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-security/features-list-security.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\">\r\n  <mat-icon matTooltip=\"Security Status still work-in progress\" class=\"feature-security-icon\">help</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "jNqs":
/*!*******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/constants/app.patterns.ts ***!
  \*******************************************************************************/
/*! exports provided: appNamePattern, appNameError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appNamePattern", function() { return appNamePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appNameError", function() { return appNameError; });
var appNamePattern = /^[A-Za-z](?:[A-Za-z0-9\s\(\)-]+)*$/;
var appNameError = 'Standard letters, numbers, spaces, hyphens and round brackets are allowed. Must start with a letter.';


/***/ }),

/***/ "jv3j":
/*!**************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/manage-features/manage-features.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ManageFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFeaturesComponent", function() { return ManageFeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_features_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-features.component.html */ "Q+eI");
/* harmony import */ var _manage_features_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-features.component.scss */ "2TTF");
/* harmony import */ var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ag-grid-community/all-modules */ "DR3G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/boolean-filter/boolean-filter.component */ "0p6s");
/* harmony import */ var _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/id-field/id-field.component */ "gyhz");
/* harmony import */ var _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/constants/default-grid-options.constants */ "1HxE");
/* harmony import */ var _ag_grid_components_features_list_enabled_features_list_enabled_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ag-grid-components/features-list-enabled/features-list-enabled.component */ "bH+M");
/* harmony import */ var _ag_grid_components_features_list_public_features_list_public_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ag-grid-components/features-list-public/features-list-public.component */ "kZw0");
/* harmony import */ var _ag_grid_components_features_list_security_features_list_security_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ag-grid-components/features-list-security/features-list-security.component */ "uO4x");
/* harmony import */ var _ag_grid_components_features_list_ui_features_list_ui_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ag-grid-components/features-list-ui/features-list-ui.component */ "R9mk");
/* harmony import */ var _services_features_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/features-config.service */ "JEo7");















var ManageFeaturesComponent = /** @class */ (function () {
    function ManageFeaturesComponent(featuresConfigService) {
        this.featuresConfigService = featuresConfigService;
        this.modules = _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_3__["AllCommunityModules"];
        this.gridOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _shared_constants_default_grid_options_constants__WEBPACK_IMPORTED_MODULE_9__["defaultGridOptions"]), { frameworkComponents: {
                booleanFilterComponent: _shared_components_boolean_filter_boolean_filter_component__WEBPACK_IMPORTED_MODULE_7__["BooleanFilterComponent"],
                idFieldComponent: _shared_components_id_field_id_field_component__WEBPACK_IMPORTED_MODULE_8__["IdFieldComponent"],
                featuresListEnabledComponent: _ag_grid_components_features_list_enabled_features_list_enabled_component__WEBPACK_IMPORTED_MODULE_10__["FeaturesListEnabledComponent"],
                featuresListUiComponent: _ag_grid_components_features_list_ui_features_list_ui_component__WEBPACK_IMPORTED_MODULE_13__["FeaturesListUiComponent"],
                featuresListPublicComponent: _ag_grid_components_features_list_public_features_list_public_component__WEBPACK_IMPORTED_MODULE_11__["FeaturesListPublicComponent"],
                featuresListSecurityComponent: _ag_grid_components_features_list_security_features_list_security_component__WEBPACK_IMPORTED_MODULE_12__["FeaturesListSecurityComponent"],
            }, columnDefs: [
                {
                    headerName: 'ID', field: 'id', width: 70, headerClass: 'dense', cellClass: 'id-action no-padding no-outline',
                    cellRenderer: 'idFieldComponent', sortable: true, filter: 'agTextColumnFilter',
                    cellRendererParams: {
                        tooltipGetter: function (paramsData) { return "GUID: " + paramsData.id; },
                    },
                },
                {
                    headerName: 'Enabled', field: 'enabled', width: 80, headerClass: 'dense', cellClass: 'no-outline',
                    sortable: true, filter: 'booleanFilterComponent', cellRenderer: 'featuresListEnabledComponent',
                },
                {
                    headerName: 'UI', field: 'ui', width: 70, headerClass: 'dense', cellClass: 'no-outline',
                    sortable: true, filter: 'booleanFilterComponent', cellRenderer: 'featuresListUiComponent',
                },
                {
                    headerName: 'Public', field: 'public', width: 70, headerClass: 'dense', cellClass: 'no-outline',
                    sortable: true, filter: 'booleanFilterComponent', cellRenderer: 'featuresListPublicComponent'
                },
                {
                    headerName: 'Name', field: 'id', flex: 2, minWidth: 250, cellClass: 'primary-action highlight', sortable: true,
                    filter: 'agTextColumnFilter', onCellClicked: this.openFeature,
                    cellRenderer: function (params) { return 'details (name lookup still WIP)'; },
                },
                {
                    headerName: 'Expires', field: 'expires', flex: 1, minWidth: 200, cellClass: 'no-outline',
                    sortable: true, filter: 'agTextColumnFilter', valueGetter: this.valueGetterDateTime,
                },
                { headerName: 'Security', width: 70, cellClass: 'no-outline', cellRenderer: 'featuresListSecurityComponent' },
            ] });
        this.features$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.showManagement$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.showSpinner$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.managementUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.features$, this.showManagement$, this.showSpinner$, this.managementUrl$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 4), features = _b[0], showManagement = _b[1], showSpinner = _b[2], managementUrl = _b[3];
            return ({ features: features, showManagement: showManagement, showSpinner: showSpinner, managementUrl: managementUrl });
        }));
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    ManageFeaturesComponent.prototype.ngOnInit = function () {
        this.fetchFeatures();
        this.subscribeToMessages();
    };
    ManageFeaturesComponent.prototype.ngOnDestroy = function () {
        this.features$.complete();
        this.showManagement$.complete();
        this.showSpinner$.complete();
        this.managementUrl$.complete();
        this.subscription.unsubscribe();
    };
    ManageFeaturesComponent.prototype.toggleManagement = function () {
        var _this = this;
        this.showManagement$.next(!this.showManagement$.value);
        if (!this.showManagement$.value) {
            return;
        }
        this.showSpinner$.next(true);
        this.managementUrl$.next(null); // reset url
        this.featuresConfigService.getManageFeaturesUrl().subscribe(function (url) {
            _this.showSpinner$.next(false);
            if (url.includes('error: user needs host permissions')) {
                _this.showManagement$.next(false);
                throw new Error('User needs host permissions!');
            }
            _this.managementUrl$.next(url);
        });
    };
    ManageFeaturesComponent.prototype.openFeature = function (params) {
        window.open("https://2sxc.org/r/f/" + params.value, '_blank');
    };
    ManageFeaturesComponent.prototype.valueGetterDateTime = function (params) {
        var rawValue = params.data[params.colDef.field];
        if (!rawValue) {
            return null;
        }
        return rawValue.substring(0, 19).replace('T', ' '); // remove 'Z' and replace 'T'
    };
    ManageFeaturesComponent.prototype.fetchFeatures = function () {
        var _this = this;
        this.featuresConfigService.getAll().subscribe(function (features) {
            _this.features$.next(features);
        });
    };
    /** Waits for a json message from the iframe and sends it to the server */
    ManageFeaturesComponent.prototype.subscribeToMessages = function () {
        var _this = this;
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'message').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return _this.showManagement$.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event.origin.endsWith('2sxc.org') === true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event.data != null; })).subscribe(function (event) {
            var features = event.data;
            var featuresString = JSON.stringify(features);
            _this.featuresConfigService.saveFeatures(featuresString).subscribe(function (res) {
                _this.showManagement$.next(false);
                _this.fetchFeatures();
            });
        }));
    };
    ManageFeaturesComponent.ctorParameters = function () { return [
        { type: _services_features_config_service__WEBPACK_IMPORTED_MODULE_14__["FeaturesConfigService"] }
    ]; };
    ManageFeaturesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-manage-features',
            template: _raw_loader_manage_features_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_manage_features_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_features_config_service__WEBPACK_IMPORTED_MODULE_14__["FeaturesConfigService"]])
    ], ManageFeaturesComponent);
    return ManageFeaturesComponent;
}());



/***/ }),

/***/ "kZw0":
/*!*******************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-public/features-list-public.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: FeaturesListPublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesListPublicComponent", function() { return FeaturesListPublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_features_list_public_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./features-list-public.component.html */ "bKRG");
/* harmony import */ var _features_list_public_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features-list-public.component.scss */ "NT0C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FeaturesListPublicComponent = /** @class */ (function () {
    function FeaturesListPublicComponent() {
    }
    FeaturesListPublicComponent.prototype.agInit = function (params) {
        this.value = params.value;
    };
    FeaturesListPublicComponent.prototype.refresh = function (params) {
        return true;
    };
    FeaturesListPublicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-features-list-public',
            template: _raw_loader_features_list_public_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_features_list_public_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], FeaturesListPublicComponent);
    return FeaturesListPublicComponent;
}());



/***/ }),

/***/ "m74s":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-ui/features-list-ui.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon-container\">\r\n  <mat-icon *ngIf=\"value\">visibility</mat-icon>\r\n  <mat-icon *ngIf=\"!value\">remove</mat-icon>\r\n</div>\r\n");

/***/ }),

/***/ "o+Zu":
/*!*************************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/enable-languages-status/enable-languages-status.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: EnableLanguagesStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableLanguagesStatusComponent", function() { return EnableLanguagesStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enable_languages_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enable-languages-status.component.html */ "hb1E");
/* harmony import */ var _enable_languages_status_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enable-languages-status.component.scss */ "Ll6W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var EnableLanguagesStatusComponent = /** @class */ (function () {
    function EnableLanguagesStatusComponent() {
    }
    EnableLanguagesStatusComponent.prototype.agInit = function (params) {
        this.params = params;
        this.value = this.params.value;
    };
    EnableLanguagesStatusComponent.prototype.refresh = function (params) {
        return true;
    };
    EnableLanguagesStatusComponent.prototype.toggleLanguage = function () {
        var language = this.params.data;
        this.params.onEnabledToggle(language);
    };
    EnableLanguagesStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-enable-languages-status',
            template: _raw_loader_enable_languages_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_enable_languages_status_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], EnableLanguagesStatusComponent);
    return EnableLanguagesStatusComponent;
}());



/***/ }),

/***/ "odyr":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/apps-management-nav/apps-management-nav.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-component-wrapper\">\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">\r\n      <div>Manage Apps in Zone {{ zoneId }}</div>\r\n      <button mat-icon-button matTooltip=\"Close dialog\" (click)=\"closeDialog()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <!-- spm NOTE: we use mat-tab-group because mat-tab-nav-bar doesn't have animations and doesn't look pretty -->\r\n  <mat-tab-group class=\"mat-tab-group-max-height\" dynamicHeight color=\"accent\" (selectedTabChange)=\"changeTab($event)\"\r\n    [selectedIndex]=\"tabIndex$ | async\">\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Apps\">\r\n        <mat-icon>star_border</mat-icon>\r\n        <span>Apps</span>\r\n      </div>\r\n      <app-apps-list *matTabContent></app-apps-list>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Languages\">\r\n        <mat-icon>translate</mat-icon>\r\n        <span>Languages</span>\r\n      </div>\r\n      <app-enable-languages *matTabContent></app-enable-languages>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"Features\">\r\n        <mat-icon>tune</mat-icon>\r\n        <span>Features</span>\r\n      </div>\r\n      <app-manage-features *matTabContent></app-manage-features>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n      <div *matTabLabel class=\"mat-tab-label-box\" matTooltip=\"2sxc Insights\">\r\n        <mat-icon>speed</mat-icon>\r\n        <span>2sxc Insights</span>\r\n      </div>\r\n      <app-sxc-insights *matTabContent></app-sxc-insights>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n");

/***/ }),

/***/ "poP/":
/*!**************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/services/sxc-insights.service.ts ***!
  \**************************************************************************************/
/*! exports provided: SxcInsightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SxcInsightsService", function() { return SxcInsightsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @2sic.com/dnn-sxc-angular */ "GJBw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var webApiLogRoot = 'sys/log/';
var SxcInsightsService = /** @class */ (function () {
    function SxcInsightsService(http, dnnContext) {
        this.http = http;
        this.dnnContext = dnnContext;
    }
    SxcInsightsService.prototype.activatePageLog = function (duration) {
        return this.http.get(this.dnnContext.$2sxc.http.apiUrl(webApiLogRoot + 'EnableDebug'), {
            params: { duration: duration.toString() }
        });
    };
    SxcInsightsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"] }
    ]; };
    SxcInsightsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _2sic_com_dnn_sxc_angular__WEBPACK_IMPORTED_MODULE_1__["Context"]])
    ], SxcInsightsService);
    return SxcInsightsService;
}());



/***/ }),

/***/ "rHJH":
/*!**********************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/apps-management-nav/apps-management-dialog.config.ts ***!
  \**********************************************************************************************************/
/*! exports provided: appsManagementDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appsManagementDialog", function() { return appsManagementDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var appsManagementDialog = {
    name: 'APPS_MANAGEMENT_DIALOG',
    initContext: true,
    panelSize: 'large',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var AppsManagementNavComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./apps-management-nav.component */ "M3FF"))];
                    case 1:
                        AppsManagementNavComponent = (_a.sent()).AppsManagementNavComponent;
                        return [2 /*return*/, AppsManagementNavComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "uO4x":
/*!***********************************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/ag-grid-components/features-list-security/features-list-security.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: FeaturesListSecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesListSecurityComponent", function() { return FeaturesListSecurityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_features_list_security_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./features-list-security.component.html */ "if+5");
/* harmony import */ var _features_list_security_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features-list-security.component.scss */ "3AhV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FeaturesListSecurityComponent = /** @class */ (function () {
    function FeaturesListSecurityComponent() {
    }
    FeaturesListSecurityComponent.prototype.agInit = function (params) {
    };
    FeaturesListSecurityComponent.prototype.refresh = function (params) {
        return true;
    };
    FeaturesListSecurityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-features-list-security',
            template: _raw_loader_features_list_security_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_features_list_security_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], FeaturesListSecurityComponent);
    return FeaturesListSecurityComponent;
}());



/***/ }),

/***/ "vI2K":
/*!********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/sxc-insights/sxc-insights.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SxcInsightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SxcInsightsComponent", function() { return SxcInsightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sxc_insights_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sxc-insights.component.html */ "6ZBp");
/* harmony import */ var _sxc_insights_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sxc-insights.component.scss */ "KgCK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_sxc_insights_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/sxc-insights.service */ "poP/");







var SxcInsightsComponent = /** @class */ (function () {
    function SxcInsightsComponent(sxcInsightsService, snackBar) {
        this.sxcInsightsService = sxcInsightsService;
        this.snackBar = snackBar;
        this.positiveWholeNumber = /^[1-9][0-9]*$/;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
    }
    SxcInsightsComponent.prototype.ngOnInit = function () {
    };
    SxcInsightsComponent.prototype.ngOnDestroy = function () {
        this.loading$.complete();
    };
    SxcInsightsComponent.prototype.openInsights = function () {
        window.open(window.$2sxc.http.apiUrl('sys/insights/help'), '_blank');
    };
    SxcInsightsComponent.prototype.activatePageLog = function (form) {
        var _this = this;
        this.loading$.next(true);
        this.snackBar.open('Activating...');
        this.sxcInsightsService.activatePageLog(this.pageLogDuration).subscribe(function (res) {
            _this.loading$.next(false);
            _this.snackBar.open(res, null, { duration: 4000 });
        });
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
        form.resetForm();
    };
    SxcInsightsComponent.ctorParameters = function () { return [
        { type: _services_sxc_insights_service__WEBPACK_IMPORTED_MODULE_6__["SxcInsightsService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    SxcInsightsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sxc-insights',
            template: _raw_loader_sxc_insights_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_sxc_insights_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_sxc_insights_service__WEBPACK_IMPORTED_MODULE_6__["SxcInsightsService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SxcInsightsComponent);
    return SxcInsightsComponent;
}());



/***/ }),

/***/ "w2oQ":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/apps-management/enable-languages/enable-languages.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-wrapper mat-tab-grid-wrapper\">\r\n  <ag-grid-angular class=\"ag-theme-material\" [rowData]=\"languages$ | async\" [modules]=\"modules\"\r\n    [gridOptions]=\"gridOptions\">\r\n  </ag-grid-angular>\r\n\r\n  <div class=\"grid-more-actions-box\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "wpTw":
/*!************************************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/apps-management/apps-management-nav/apps-management-nav.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzLW1hbmFnZW1lbnQtbmF2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=apps-management-apps-management-module.js.map