(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-content-list-manage-content-list-module"],{

/***/ "/mZ9":
/*!******************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/manage-content-list/manage-content-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ManageContentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageContentListComponent", function() { return ManageContentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_content_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-content-list.component.html */ "luCQ");
/* harmony import */ var _manage_content_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-content-list.component.scss */ "0EPp");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/helpers/url-prep.helper */ "X9FW");
/* harmony import */ var _services_content_group_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/content-group.service */ "n63V");












var ManageContentListComponent = /** @class */ (function () {
    function ManageContentListComponent(dialogRef, contentGroupService, route, router, snackBar) {
        this.dialogRef = dialogRef;
        this.contentGroupService = contentGroupService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.hostClass = 'dialog-component';
        this.items$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.header$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.templateVars$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([this.items$, this.header$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), items = _b[0], header = _b[1];
            return ({ items: items, header: header });
        }));
        this.contentGroup = {
            id: null,
            guid: this.route.snapshot.paramMap.get('guid'),
            part: this.route.snapshot.paramMap.get('part'),
            index: parseInt(this.route.snapshot.paramMap.get('index'), 10),
        };
        this.reordered = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
    }
    ManageContentListComponent.prototype.ngOnInit = function () {
        this.fetchList();
        this.fetchHeader();
        this.refreshOnChildClosed();
    };
    ManageContentListComponent.prototype.ngOnDestroy = function () {
        this.items$.complete();
        this.header$.complete();
        this.subscription.unsubscribe();
    };
    ManageContentListComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ManageContentListComponent.prototype.saveList = function () {
        var _this = this;
        this.snackBar.open('Saving...');
        this.contentGroupService.saveList(this.contentGroup, this.items$.value).subscribe(function (res) {
            _this.snackBar.open('Saved');
            _this.closeDialog();
        });
    };
    ManageContentListComponent.prototype.editHeader = function () {
        var form = {
            items: [
                {
                    Group: {
                        Guid: this.contentGroup.guid,
                        Index: 0,
                        Part: 'listcontent',
                        Add: this.header$.value.Id === 0,
                    },
                },
                {
                    Group: {
                        Guid: this.contentGroup.guid,
                        Index: 0,
                        Part: 'listpresentation',
                        Add: this.header$.value.Id === 0,
                    },
                },
            ],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_10__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    ManageContentListComponent.prototype.editItem = function (id) {
        var form = {
            items: [{ EntityId: id }],
        };
        var formUrl = Object(_shared_helpers_url_prep_helper__WEBPACK_IMPORTED_MODULE_10__["convertFormToUrl"])(form);
        this.router.navigate(["edit/" + formUrl], { relativeTo: this.route });
    };
    ManageContentListComponent.prototype.drop = function (event) {
        var items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.items$.value);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(items, event.previousIndex, event.currentIndex);
        this.items$.next(items);
        this.reordered = true;
    };
    ManageContentListComponent.prototype.trackByFn = function (index, item) {
        // we use both Index and Id because all demo items have Id=0
        return item.Index + "+" + item.Id;
    };
    ManageContentListComponent.prototype.fetchList = function () {
        var _this = this;
        this.contentGroupService.getList(this.contentGroup).subscribe(function (items) {
            if (_this.reordered) {
                var oldIds_1 = _this.items$.value.map(function (item) { return item.Id; });
                var idsChanged = _this.items$.value.length !== items.length || items.some(function (item) { return !oldIds_1.includes(item.Id); });
                if (!idsChanged) {
                    var sortOrder_1 = _this.items$.value.map(function (item) { return item.Index; });
                    items.sort(function (a, b) {
                        var aIndex = sortOrder_1.indexOf(a.Index);
                        var bIndex = sortOrder_1.indexOf(b.Index);
                        if (aIndex === -1 || bIndex === -1) {
                            return 0;
                        }
                        return aIndex - bIndex;
                    });
                }
                else {
                    _this.snackBar.open('List was changed from somewhere else. Order of items is reset', null, { duration: 5000 });
                }
            }
            _this.items$.next(items);
        });
    };
    ManageContentListComponent.prototype.fetchHeader = function () {
        var _this = this;
        this.contentGroupService.getHeader(this.contentGroup).subscribe(function (header) {
            _this.header$.next(header);
        });
    };
    ManageContentListComponent.prototype.refreshOnChildClosed = function () {
        var _this = this;
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(!!this.route.snapshot.firstChild), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function () { return !!_this.route.snapshot.firstChild; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hadChild = _b[0], hasChild = _b[1];
            return hadChild && !hasChild;
        })).subscribe(function () {
            _this.fetchList();
            _this.fetchHeader();
        }));
    };
    ManageContentListComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _services_content_group_service__WEBPACK_IMPORTED_MODULE_11__["ContentGroupService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    ManageContentListComponent.propDecorators = {
        hostClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['className',] }]
    };
    ManageContentListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-manage-content-list',
            template: _raw_loader_manage_content_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [_manage_content_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _services_content_group_service__WEBPACK_IMPORTED_MODULE_11__["ContentGroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ManageContentListComponent);
    return ManageContentListComponent;
}());



/***/ }),

/***/ "0EPp":
/*!********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/manage-content-list/manage-content-list.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sort-title {\n  padding-top: 16px;\n}\n\n.dnd-list {\n  margin: 16px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.dnd-item {\n  cursor: move;\n  height: 40px;\n  border-bottom: 1px solid #ccc;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n\n.dnd-item:last-child {\n  border: none;\n}\n\n.dnd-item__title {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\n.dnd-item__title-icon {\n  margin-right: 8px;\n  opacity: 0.4;\n}\n\n.dnd-item__title-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.dnd-list.cdk-drop-list-dragging .dnd-item:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFuYWdlLWNvbnRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQU1BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBSEY7O0FBUUE7RUFDRSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxzREFBQTtBQUxGOztBQVFBO0VBQ0Usc0RBQUE7QUFMRiIsImZpbGUiOiJtYW5hZ2UtY29udGVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcnQtdGl0bGUge1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uZG5kLWxpc3Qge1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5kbmQtaXRlbSB7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlLXRleHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5kbmQtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kbmQtaXRlbTpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "TGwE":
/*!***********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/manage-content-list/manage-content-list-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ManageContentListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageContentListRoutingModule", function() { return ManageContentListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../edit/edit.matcher */ "EaDK");
/* harmony import */ var _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-entry/dialog-entry.component */ "odua");
/* harmony import */ var _manage_content_list_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-content-list-dialog.config */ "UGh8");






var routes = [
    {
        path: '', component: _shared_components_dialog_entry_dialog_entry_component__WEBPACK_IMPORTED_MODULE_4__["DialogEntryComponent"], data: { dialog: _manage_content_list_dialog_config__WEBPACK_IMPORTED_MODULE_5__["manageContentListDialog"] },
        children: [
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["edit"],
                loadChildren: function () { return Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~code-edi~680cc73c"), __webpack_require__.e("default~app-administration-app-administration-module~code-editor-code-editor-module~content-export-c~5cd8229e"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~8dad88b1"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~688b9b68"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~content-~4a56a0b6"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edi~24510ec4"), __webpack_require__.e("default~apps-management-apps-management-module~edit-edit-module~visual-query-visual-query-module"), __webpack_require__.e("default~app-administration-app-administration-module~apps-management-apps-management-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~manage-content-list-manage-content-list-module"), __webpack_require__.e("default~dev-rest-module~edit-edit-module"), __webpack_require__.e("default~edit-edit-module~replace-content-replace-content-module"), __webpack_require__.e("default~app-administration-app-administration-module~edit-edit-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ../../../../edit/edit.module */ "32/c")).then(function (m) { return m.EditModule; }); }
            },
            {
                matcher: _edit_edit_matcher__WEBPACK_IMPORTED_MODULE_3__["refreshEdit"],
                loadChildren: function () { return __webpack_require__.e(/*! import() | edit-refresh-edit-module */ "refresh-edit-module").then(__webpack_require__.bind(null, /*! ../../../../edit/refresh-edit.module */ "nxWM")).then(function (m) { return m.RefreshEditModule; }); }
            },
        ]
    },
];
var ManageContentListRoutingModule = /** @class */ (function () {
    function ManageContentListRoutingModule() {
    }
    ManageContentListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManageContentListRoutingModule);
    return ManageContentListRoutingModule;
}());



/***/ }),

/***/ "UGh8":
/*!**********************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/manage-content-list/manage-content-list-dialog.config.ts ***!
  \**********************************************************************************************/
/*! exports provided: manageContentListDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageContentListDialog", function() { return manageContentListDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var manageContentListDialog = {
    name: 'MANAGE_CONTENT_LIST_DIALOG',
    initContext: true,
    panelSize: 'small',
    panelClass: null,
    getComponent: function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ManageContentListComponent;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./manage-content-list.component */ "/mZ9"))];
                    case 1:
                        ManageContentListComponent = (_a.sent()).ManageContentListComponent;
                        return [2 /*return*/, ManageContentListComponent];
                }
            });
        });
    }
};


/***/ }),

/***/ "luCQ":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dialogs/src/app/manage-content-list/manage-content-list.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\r\n  <div class=\"dialog-title-box\">Manage content-item lists</div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"dialog-component-content fancy-scrollbar-light\" *ngIf=\"(templateVars$ | async) as data\">\r\n  <ng-container *ngIf=\"data.header\">\r\n    <p class=\"dialog-description\">\r\n      You can manage the list header here (if it is defined):\r\n    </p>\r\n\r\n    <p class=\"dialog-description\">\r\n      <ng-container *ngIf=\"data.header.Type\">\r\n        <span>{{ data.header.Title }}</span>\r\n        <button mat-icon-button matTooltip=\"Edit header\" (click)=\"editHeader()\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!data.header.Type\">(this list has no header)</ng-container>\r\n    </p>\r\n  </ng-container>\r\n\r\n  <p class=\"dialog-description sort-title\">Sort the items by dragging as you need, then save:</p>\r\n\r\n  <div class=\"dnd-list\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n    <div *ngFor=\"let item of data.items; trackBy: trackByFn\" class=\"dnd-item\" cdkDrag>\r\n      <div class=\"dnd-item__title\">\r\n        <mat-icon class=\"dnd-item__title-icon\" matTooltip=\"Drag to reorder the list\">drag_handle</mat-icon>\r\n        <span class=\"dnd-item__title-text\" matTooltip=\"{{ item.Title }} ({{ item.Id }})\">\r\n          {{ item.Title }} ({{ item.Id }})\r\n        </span>\r\n      </div>\r\n      <div *ngIf=\"item.Id !== 0\">\r\n        <button mat-icon-button matTooltip=\"Edit item\" appMousedownStopPropagation (click)=\"editItem(item.Id)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"dialog-component-actions\">\r\n  <button mat-raised-button (click)=\"closeDialog()\">Cancel</button>\r\n  <button mat-raised-button color=\"accent\" (click)=\"saveList()\">Save</button>\r\n</div>\r\n");

/***/ }),

/***/ "z239":
/*!***************************************************************************************!*\
  !*** ./projects/ng-dialogs/src/app/manage-content-list/manage-content-list.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ManageContentListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageContentListModule", function() { return ManageContentListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _shared_services_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/context */ "1O52");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared-components.module */ "H6vc");
/* harmony import */ var _manage_content_list_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-content-list-routing.module */ "TGwE");
/* harmony import */ var _manage_content_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage-content-list.component */ "/mZ9");
/* harmony import */ var _services_content_group_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/content-group.service */ "n63V");














var ManageContentListModule = /** @class */ (function () {
    function ManageContentListModule() {
    }
    ManageContentListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _manage_content_list_component__WEBPACK_IMPORTED_MODULE_12__["ManageContentListComponent"],
            ],
            entryComponents: [
                _manage_content_list_component__WEBPACK_IMPORTED_MODULE_12__["ManageContentListComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _manage_content_list_routing_module__WEBPACK_IMPORTED_MODULE_11__["ManageContentListRoutingModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_10__["SharedComponentsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            ],
            providers: [
                _shared_services_context__WEBPACK_IMPORTED_MODULE_9__["Context"],
                _services_content_group_service__WEBPACK_IMPORTED_MODULE_13__["ContentGroupService"],
            ]
        })
    ], ManageContentListModule);
    return ManageContentListModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-content-list-manage-content-list-module.js.map