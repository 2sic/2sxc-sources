(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["replace-content-replace-content-module"],{

/***/ "LDtw":
/*!**********************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/replace-content/replace-content.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReplaceContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceContentComponent", function() { return ReplaceContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_replace_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./replace-content.component.html */ "TPnq");
/* harmony import */ var _replace_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replace-content.component.scss */ "o+2g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manage-content-list/services/content-group.service */ "n63V");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ "X9FW");











var ReplaceContentComponent = /** @class */ (function () {
    function ReplaceContentComponent(dialogRef, contentGroupService, router, route, snackBar) {
        this.dialogRef = dialogRef;
        this.contentGroupService = contentGroupService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
    }
    ReplaceContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.guid = this.route.snapshot.paramMap.get('guid');
        this.part = this.route.snapshot.paramMap.get('part');
        this.index = parseInt(this.route.snapshot.paramMap.get('index'), 10);
        this.add = !!this.route.snapshot.queryParamMap.get('add');
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        this.filterText$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        var filteredOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.filterText$, this.options$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), filterText = _b[0], options = _b[1];
            return options.filter(function (option) { return option.label.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()); }).map(function (option) { return option.label; });
        }));
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.filterText$, filteredOptions$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), filterText = _b[0], filteredOptions = _b[1];
            var templateVars = {
                filterText: filterText,
                filteredOptions: filteredOptions,
                isAddMode: _this.add,
                isMatch: filteredOptions.includes(filterText),
            };
            return templateVars;
        }));
        this.fetchConfig(false, null);
        this.refreshOnChildClosed();
    };
    ReplaceContentComponent.prototype.ngOnDestroy = function () {
        this.filterText$.complete();
        this.options$.complete();
        this.subscription.unsubscribe();
    };
    ReplaceContentComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ReplaceContentComponent.prototype.setFilter = function (filterText) {
        this.filterText$.next(filterText);
    };
    ReplaceContentComponent.prototype.select = function (event) {
        this.filterText$.next(event.option.value);
    };
    ReplaceContentComponent.prototype.copySelected = function () {
        var contentGroup = this.buildContentGroup();
        var form = {
            items: [{ ContentTypeName: this.contentTypeName, DuplicateEntity: contentGroup.id }],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_10__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    ReplaceContentComponent.prototype.save = function () {
        var _this = this;
        this.snackBar.open('Saving...');
        var contentGroup = this.buildContentGroup();
        this.contentGroupService.saveItem(contentGroup).subscribe(function () {
            _this.snackBar.open('Saved', null, { duration: 2000 });
            _this.closeDialog();
        });
    };
    ReplaceContentComponent.prototype.fetchConfig = function (isRefresh, cloneId) {
        var _this = this;
        var contentGroup = this.buildContentGroup();
        this.contentGroupService.getItems(contentGroup).subscribe(function (replaceConfig) {
            var _a;
            var options = Object.entries(replaceConfig.Items).map(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), itemId = _b[0], itemName = _b[1];
                var option = {
                    id: parseInt(itemId, 10),
                    label: itemName + " (" + itemId + ")",
                };
                return option;
            });
            _this.options$.next(options);
            // don't set selected option if dialog should be in add-mode and don't change selected option on refresh unless it's cloneId
            if ((!contentGroup.add && !isRefresh) || cloneId != null) {
                var newId_1 = !isRefresh ? replaceConfig.SelectedId : cloneId;
                var newFilter = ((_a = _this.options$.value.find(function (option) { return option.id === newId_1; })) === null || _a === void 0 ? void 0 : _a.label) || '';
                _this.filterText$.next(newFilter);
            }
            _this.contentTypeName = replaceConfig.ContentTypeName;
        });
    };
    ReplaceContentComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(!!this.route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () { return !!_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            var _a;
            var navigation = _this.router.getCurrentNavigation();
            var editResult = (_a = navigation.extras) === null || _a === void 0 ? void 0 : _a.state;
            var cloneId = editResult === null || editResult === void 0 ? void 0 : editResult[Object.keys(editResult)[0]];
            _this.fetchConfig(true, cloneId);
        }));
    };
    ReplaceContentComponent.prototype.buildContentGroup = function () {
        var _this = this;
        var _a, _b;
        var id = (_b = (_a = this.options$.value.find(function (option) { return option.label === _this.filterText$.value; })) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null;
        var contentGroup = {
            id: id,
            guid: this.guid,
            part: this.part,
            index: this.index,
            add: this.add,
        };
        return contentGroup;
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

/***/ "Mq7R":
/*!**************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/replace-content/replace-content-dialog.config.ts ***!
  \**************************************************************************************/
/*! exports provided: replaceContentDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceContentDialog", function() { return replaceContentDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

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
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./replace-content.component */ "LDtw"))];
                    case 1:
                        ReplaceContentComponent = (_a.sent()).ReplaceContentComponent;
                        return [2 /*return*/, ReplaceContentComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "TPnq":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/replace-content/replace-content.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"templateVars$ | async as data\">\r\n\r\n  <div mat-dialog-title>\r\n    <div class=\"dialog-title-box\">{{ data.isAddMode ? 'Add Existing Item' : 'Replace Content Item' }}</div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <p class=\"dialog-description\">\r\n    {{\r\n    data.isAddMode\r\n    ? 'Select a content-item to add to this list.'\r\n    : 'By replacing a content-item you can make other content appear in the slot of the original content.'\r\n    }}\r\n  </p>\r\n\r\n  <div class=\"options-box\">\r\n    <mat-form-field class=\"options-box__field\" appearance=\"standard\" color=\"accent\">\r\n      <mat-label>Choose item</mat-label>\r\n      <input matInput [matAutocomplete]=\"auto\" [ngModel]=\"data.filterText\" (ngModelChange)=\"setFilter($event)\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"select($event)\">\r\n        <cdk-virtual-scroll-viewport itemSize=\"48\" minBufferPx=\"500\" maxBufferPx=\"1000\"\r\n          [style.height.px]=\"data.filteredOptions.length < 6 ? data.filteredOptions.length * 48 : 240\">\r\n          <mat-option *cdkVirtualFor=\"let option of data.filteredOptions\" [value]=\"option\">{{ option }}</mat-option>\r\n        </cdk-virtual-scroll-viewport>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n    <button mat-icon-button class=\"options-box__copy\" matTooltip=\"Copy\" [disabled]=\"!data.isMatch\"\r\n      (click)=\"copySelected()\">\r\n      <mat-icon>file_copy</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"dialog-component-actions\">\r\n    <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n    <button mat-raised-button color=\"accent\" [disabled]=\"!data.isMatch\" (click)=\"save()\">Save</button>\r\n  </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "Z7El":
/*!*******************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/replace-content/replace-content.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ReplaceContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceContentModule", function() { return ReplaceContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../manage-content-list/services/content-group.service */ "n63V");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _replace_content_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./replace-content-routing.module */ "x6TJ");
/* harmony import */ var _replace_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./replace-content.component */ "LDtw");



















var ReplaceContentModule = /** @class */ (function () {
    function ReplaceContentModule() {
    }
    ReplaceContentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _replace_content_component__WEBPACK_IMPORTED_MODULE_18__["ReplaceContentComponent"],
            ],
            entryComponents: [
                _replace_content_component__WEBPACK_IMPORTED_MODULE_18__["ReplaceContentComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _replace_content_routing_module__WEBPACK_IMPORTED_MODULE_17__["ReplaceContentRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_16__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_15__["Context"],
                _manage_content_list_services_content_group_service__WEBPACK_IMPORTED_MODULE_14__["ContentGroupService"],
            ]
        })
    ], ReplaceContentModule);
    return ReplaceContentModule;
}());



/***/ }),

/***/ "o+2g":
/*!************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/replace-content/replace-content.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".options-box {\n  display: flex;\n  align-items: flex-end;\n}\n.options-box__field {\n  width: 40%;\n}\n.options-box__copy {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVwbGFjZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSiIsImZpbGUiOiJyZXBsYWNlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9ucy1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAmX19maWVsZCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fY29weSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "x6TJ":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/replace-content/replace-content-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ReplaceContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceContentRoutingModule", function() { return ReplaceContentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "EaDK");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _replace_content_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replace-content-dialog.config */ "Mq7R");






var routes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _replace_content_dialog_config__WEBPACK_IMPORTED_MODULE_5__["replaceContentDialog"] },
        children: [
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~5cd8229e"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~8dad88b1"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edi~24510ec4"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~replace-content-replace-content-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "32/c")).then(function (m) { return m.EditModule; }); },
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