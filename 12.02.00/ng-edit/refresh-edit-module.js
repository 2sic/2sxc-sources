(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["refresh-edit-module"],{

/***/ "nxWM":
/*!**********************************************!*\
  !*** ./projects/edit/refresh-edit.module.ts ***!
  \**********************************************/
/*! exports provided: RefreshEditComponent, RefreshEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshEditComponent", function() { return RefreshEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshEditModule", function() { return RefreshEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/helpers */ "AmCw");






var RefreshEditComponent = /** @class */ (function () {
    function RefreshEditComponent(router, route) {
        var params = route.snapshot.params;
        var oldEditUrl = "edit/refresh/" + params.items;
        var newEditUrl = "edit/" + params.items;
        var currentUrl = _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["UrlHelpers"].calculatePathFromRoot(route);
        var lastIndex = currentUrl.lastIndexOf(oldEditUrl);
        if (lastIndex <= 0) {
            return;
        }
        var newUrl = currentUrl.substring(0, lastIndex) + currentUrl.substring(lastIndex).replace(oldEditUrl, newEditUrl);
        router.navigate([newUrl]);
    }
    RefreshEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RefreshEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: '',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RefreshEditComponent);
    return RefreshEditComponent;
}());

var editRefreshRoutes = [
    {
        path: '', component: RefreshEditComponent, data: { title: 'Refreshing Edit Dialog' }
    },
];
var RefreshEditModule = /** @class */ (function () {
    function RefreshEditModule() {
    }
    RefreshEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                RefreshEditComponent,
            ],
            entryComponents: [
                RefreshEditComponent,
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(editRefreshRoutes),
            ],
        })
    ], RefreshEditModule);
    return RefreshEditModule;
}());



/***/ })

}]);
//# sourceMappingURL=refresh-edit-module.js.map