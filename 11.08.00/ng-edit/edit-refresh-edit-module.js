(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-refresh-edit-module"],{

/***/ "LCtb":
/*!*******************************************************!*\
  !*** ../edit/shared/services/edit-routing.helpers.ts ***!
  \*******************************************************/
/*! exports provided: calculatePathFromRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePathFromRoot", function() { return calculatePathFromRoot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

function calculatePathFromRoot(route) {
    var e_1, _a, e_2, _b;
    var lastChild = route;
    while (lastChild.firstChild) {
        lastChild = lastChild.firstChild;
    }
    var pathFromRoot = '';
    try {
        for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(lastChild.snapshot.pathFromRoot), _d = _c.next(); !_d.done; _d = _c.next()) {
            var path = _d.value;
            if (path.url.length <= 0) {
                continue;
            }
            try {
                for (var _e = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(path.url)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var urlSegment = _f.value;
                    if (!urlSegment.path) {
                        continue;
                    }
                    pathFromRoot += '/' + urlSegment.path;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return pathFromRoot;
}


/***/ })

}]);
//# sourceMappingURL=edit-refresh-edit-module.js.map