(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["replace-content-replace-content-module"],{

/***/ "/aPv":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Projects/2sxc/eav-item-dialog-angular/node_modules/raw-loader/dist/cjs.js!./src/app/replace-content/replace-content.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(templateVars$ | async) as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">{{ data.item.add ? 'Add Existing Item' : 'Replace Content Item' }}</div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <p class=\"dialog-description\">\r\n    {{\r\n      data.item.add\r\n      ? 'Select a content-item to add to this list.'\r\n      : 'By replacing a content-item you can make other content appear in the slot of the original content.'\r\n    }}\r\n  </p>\r\n\r\n  <div class=\"options-box\">\r\n    <mat-form-field class=\"options-box__field\" appearance=\"standard\" color=\"accent\">\r\n      <mat-label>Choose item</mat-label>\r\n      <mat-select [ngModel]=\"data.item.id\" name=\"Language\" (ngModelChange)=\"selectedChanged($event)\">\r\n        <mat-option *ngFor=\"let option of data.options\" [value]=\"option.value\">{{ option.label }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button mat-icon-button class=\"options-box__copy\" matTooltip=\"Copy\" (click)=\"copySelected()\">\r\n      <mat-icon>file_copy</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n    <button mat-raised-button color=\"accent\" [disabled]=\"!data.item.id\" (click)=\"save()\">Save</button>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "1yen":
/*!**************************************************************!*\
  !*** ./src/app/replace-content/replace-content.component.ts ***!
  \**************************************************************/
/*! exports provided: ReplaceContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceContentComponent", function() { return ReplaceContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _raw_loader_replace_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./replace-content.component.html */ "/aPv");
/* harmony import */ var _replace_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replace-content.component.scss */ "JdJK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manage-content-list/services/content-group.service */ "PlBB");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ "uuTa");











var ReplaceContentComponent = /** @class */ (function () {
    function ReplaceContentComponent(dialogRef, contentGroupService, router, route, snackBar) {
        this.dialogRef = dialogRef;
        this.contentGroupService = contentGroupService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.item$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]({
            id: null,
            guid: this.route.snapshot.paramMap.get('guid'),
            part: this.route.snapshot.paramMap.get('part'),
            index: parseInt(this.route.snapshot.paramMap.get('index'), 10),
            add: !!this.route.snapshot.queryParamMap.get('add'),
        });
        this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.item$, this.options$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), item = _b[0], options = _b[1];
            return ({ item: item, options: options });
        }));
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    ReplaceContentComponent.prototype.ngOnInit = function () {
        this.getConfig();
        this.refreshOnChildClosed();
    };
    ReplaceContentComponent.prototype.ngOnDestroy = function () {
        this.item$.complete();
        this.options$.complete();
        this.subscription.unsubscribe();
    };
    ReplaceContentComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ReplaceContentComponent.prototype.selectedChanged = function (id) {
        this.item$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.item$.value), { id: id }));
    };
    ReplaceContentComponent.prototype.save = function () {
        var _this = this;
        this.snackBar.open('Saving...');
        this.contentGroupService.saveItem(this.item$.value).subscribe(function () {
            _this.snackBar.open('Saved', null, { duration: 2000 });
            _this.closeDialog();
        });
    };
    ReplaceContentComponent.prototype.copySelected = function () {
        var form = {
            items: [{ ContentTypeName: this.contentTypeName, DuplicateEntity: this.item$.value.id }],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_10__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    ReplaceContentComponent.prototype.getConfig = function () {
        var _this = this;
        this.contentGroupService.getItems(this.item$.value).subscribe(function (replaceConfig) {
            var e_1, _a;
            var options = [];
            var itemKeys = Object.keys(replaceConfig.Items);
            try {
                for (var itemKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(itemKeys), itemKeys_1_1 = itemKeys_1.next(); !itemKeys_1_1.done; itemKeys_1_1 = itemKeys_1.next()) {
                    var key = itemKeys_1_1.value;
                    var nKey = parseInt(key, 10);
                    var itemName = replaceConfig.Items[nKey];
                    options.push({ label: itemName + " (" + nKey + ")", value: nKey });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (itemKeys_1_1 && !itemKeys_1_1.done && (_a = itemKeys_1.return)) _a.call(itemKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.options$.next(options);
            // don't set the ID if dialog should be in add-mode
            if (!_this.item$.value.id && !_this.item$.value.add) {
                _this.item$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.item$.value), { id: replaceConfig.SelectedId }));
            }
            if (!_this.contentTypeName) {
                _this.contentTypeName = replaceConfig.ContentTypeName;
            }
        });
    };
    ReplaceContentComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(!!this.route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () { return !!_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            var _a;
            _this.getConfig();
            var navigation = _this.router.getCurrentNavigation();
            var editResult = (_a = navigation.extras) === null || _a === void 0 ? void 0 : _a.state;
            if (editResult) {
                var id = editResult[Object.keys(editResult)[0]];
                _this.item$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.item$.value), { id: id }));
            }
        }));
    };
    ReplaceContentComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: _manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_9__["ContentGroupService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    ReplaceContentComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['className',] }]
    };
    ReplaceContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-replace-content',
            template: _raw_loader_replace_content_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_replace_content_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_9__["ContentGroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ReplaceContentComponent);
    return ReplaceContentComponent;
}());



/***/ }),

/***/ "JdJK":
/*!****************************************************************!*\
  !*** ./src/app/replace-content/replace-content.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".options-box {\n  display: flex;\n  align-items: flex-end;\n}\n.options-box__field {\n  width: 40%;\n}\n.options-box__copy {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRpYWxvZ3Mvc3JjL2FwcC9yZXBsYWNlLWNvbnRlbnQvcmVwbGFjZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kaWFsb2dzL3NyYy9hcHAvcmVwbGFjZS1jb250ZW50L3JlcGxhY2UtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb25zLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICZfX2ZpZWxkIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxuICAmX19jb3B5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "JxX1":
/*!******************************************************************!*\
  !*** ./src/app/replace-content/replace-content-dialog.config.ts ***!
  \******************************************************************/
/*! exports provided: replaceContentDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceContentDialog", function() { return replaceContentDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");

var replaceContentDialog = {
    name: 'REPLACE_CONTENT_DIALOG',
    initContext: true,
    panelSize: 'small',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ReplaceContentComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./replace-content.component */ "1yen"))];
                    case 1:
                        ReplaceContentComponent = (_a.sent()).ReplaceContentComponent;
                        return [2 /*return*/, ReplaceContentComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "N/cS":
/*!***********************************************************!*\
  !*** ./src/app/replace-content/replace-content.module.ts ***!
  \***********************************************************/
/*! exports provided: ReplaceContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceContentModule", function() { return ReplaceContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "bFHC");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../manage-content-list/services/content-group.service */ "PlBB");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/context */ "Iv+g");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared-components.module */ "O6Xb");
/* harmony import */ var _replace_content_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./replace-content-routing.module */ "uBFA");
/* harmony import */ var _replace_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./replace-content.component */ "1yen");
















var ReplaceContentModule = /** @class */ (function () {
    function ReplaceContentModule() {
    }
    ReplaceContentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _replace_content_component__WEBPACK_IMPORTED_MODULE_15__["ReplaceContentComponent"],
            ],
            entryComponents: [
                _replace_content_component__WEBPACK_IMPORTED_MODULE_15__["ReplaceContentComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _replace_content_routing_module__WEBPACK_IMPORTED_MODULE_14__["ReplaceContentRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_13__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_12__["Context"],
                _manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_11__["ContentGroupService"],
            ]
        })
    ], ReplaceContentModule);
    return ReplaceContentModule;
}());



/***/ }),

/***/ "uBFA":
/*!*******************************************************************!*\
  !*** ./src/app/replace-content/replace-content-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReplaceContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceContentRoutingModule", function() { return ReplaceContentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "it7M");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "nXrb");
/* harmony import */ var _replace_content_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replace-content-dialog.config */ "JxX1");






var routes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _replace_content_dialog_config__WEBPACK_IMPORTED_MODULE_5__["replaceContentDialog"] },
        children: [
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~2af0ef45"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~c6332310"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-items-co~556c2cae"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~dev-rest~bcfe902f"), __webpack_require__.e("default~code-editor-code-editor-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-dev-rest-module~edit-edit-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "B+J5")).then(function (m) { return m.EditModule; }); },
                data: { history: false },
            },
        ]
    },
];
var ReplaceContentRoutingModule = /** @class */ (function () {
    function ReplaceContentRoutingModule() {
    }
    ReplaceContentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReplaceContentRoutingModule);
    return ReplaceContentRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=replace-content-replace-content-module.js.map